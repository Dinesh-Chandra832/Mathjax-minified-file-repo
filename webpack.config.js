const PACKAGE = require("mathjax-full/components/webpack.common.js");

module.exports = PACKAGE(
  "custom-mathjax", // the name of the package to build
  "../node_modules/mathjax-full/ts", // location of the mathjax library
  [], // packages to link to
  __dirname, // our directory
  "." // where to put the packaged component
);

// const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");

// module.exports = {
//   entry: "./custom-mathjax.ts",
//   output: {
//     filename: "custom-mathjax.min.ts",
//     path: path.resolve(__dirname, "dist"),
//   },
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   },
// };
