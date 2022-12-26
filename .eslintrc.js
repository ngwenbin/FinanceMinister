module.exports = {
  extends: ["@react-native-community", "eslint-config-prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error", { singleQuote: false }],
  },
};
