const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('URL', url)

mongoose.set('strictQuery', false)

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error(`Connection error: ${error}`))

mongoose.connection.on('connecting', () =>
  console.log('Connecting to MongoDB...')
)
mongoose.connection.on('connected', () => console.log('MongoDB connected!'))
mongoose.connection.on('error', (err) => console.error('MongoDB error:', err))
mongoose.connection.on('disconnected', () =>
  console.log('MongoDB disconnected')
)

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(\d{2}-\d{6,}|\d{3}-\d{5,})$/.test(v)
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
    required: true,
  },
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('User', userSchema)
