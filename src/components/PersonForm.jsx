const PersonForm = ({
  addEntryToPersons,
  newName,
  handleAddedNameChange,
  newNumber,
  handleAddedNumberChange,
}) => {
  return (
    <form onSubmit={addEntryToPersons}>
      <div>
        name:
        <input
          data-testid="name"
          type="text"
          name="Name"
          value={newName}
          onChange={handleAddedNameChange}
        />
      </div>
      <div>
        number:
        <input
          data-testid="number"
          type="text"
          name="Number"
          value={newNumber}
          onChange={handleAddedNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
