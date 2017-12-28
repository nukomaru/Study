const path = require('path');

module.exports = {
  entry: __dirname + "/src/index.jsx", // トランスパイル対象
  output: {
    path: __dirname + '/dist', // 出力先ディレクトリ
    filename: 'bundle.js' // 入力されたファイルをまとめて出力するときのファイル名
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader", // Babelをwebpackで利用できるようにする
        options:{
          presets: ['react', 'es2015'] // reactとes2015をトランスパイル対象とする
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // jsファイル, jsxファイルを対象とする
  }
};