module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "operator-linebreak": "off",
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react-native/no-inline-styles": "off",
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: false },
    ],
    "import/extensions": ["off"],
    "react/prop-types": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "prettier/prettier": 0,
    "@typescript-eslint/no-namespace": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.ts", "**/*.test.tsx", "*.config.js"] },
    ],
    "no-underscore-dangle": "off",
    "react/style-prop-object": "off",
    "react/no-array-index-key": "off",
  },
};
