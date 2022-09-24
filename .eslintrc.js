const path = require("path");
module.exports = {
  ignorePatterns: ["/*.*"],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  env: { browser: true },
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
  ],
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-template-expressions": "error",
    "react/react-in-jsx-scope": "off",
    "prefer-const": ["warn", { destructuring: "all" }],
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": [
      "warn",
      { forbid: ["<", ">", '"', "}", "{"] },
    ],
    "react/no-direct-mutation-state": "off",
    "react/no-deprecated": "off",
    "react/no-string-refs": "off",
    "react/require-render-return": "off",

    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": "off",
  },
};
