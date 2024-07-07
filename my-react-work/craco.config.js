const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  webpack: {
    alias: {
      stream: "stream-browserify",
      crypto: "crypto-browserify",
      path: "path-browserify"
    },
    plugins: [
      new NodePolyfillPlugin()
    ]
  }
};
