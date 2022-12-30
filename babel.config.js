module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@customTypes": "./src/types",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@typings": "./src/typings",
            "@providers": "./src/providers",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
      [
        "module:react-native-dotenv",
        { moduleName: "react-native-dotenv", path: ".env" },
      ],
    ],
  };
};
