module.exports = {
  root: true,
  env: { es2021: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "import", "prettier"],
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier", // must be last to disable conflicting formatting rules
  ],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    // Let Prettier handle formatting:
    "prettier/prettier": "error",

    // RN/TS ergonomics:
    "react/react-in-jsx-scope": "off", // not needed in modern RN
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",

    // Optional: keep imports tidy
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  ignorePatterns: ["node_modules/", "dist/", "build/", "coverage/"],
};
