const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    interop: "./src/interop/InteropRoot.js"
  },
  mode: isProd ? "production" : "development",
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-flow",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        loader: "extension-replace-loader",
        query: {
          exts: [{ from: ".re", to: ".re.js" }]
        }
      }
    ]
  }
};
