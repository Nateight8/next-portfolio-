module.exports = {
  // Other webpack config options...

  module: {
    rules: [
      // Other rules...

      {
        test: /\.(ttf|woff|woff2)$/,
        use: "file-loader",
      },
    ],
  },
};
