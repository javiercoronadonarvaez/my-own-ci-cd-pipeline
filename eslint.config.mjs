import globals from "globals";
import stylisticJs from "@stylistic/eslint-plugin-js";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: "module", // Ensure ESLint understands ES module syntax
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      "@stylistic/js": stylisticJs,
      react,
      jest,
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/linebreak-style": ["error", "unix"],
      "@stylistic/js/quotes": ["error", "single"],
      "@stylistic/js/semi": ["error", "never"],
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "off",
    },
  },
  {
    ignores: ["dist/**", "build/**", "eslint.config.mjs"], // Ignore your config file
  },
];
