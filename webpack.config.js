const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },

    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool : 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/dist': 'http://localhost:3000'
    },
    static: path.join(__dirname, 'public/'),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Helpers: path.resolve(__dirname, 'src/helpers/')
    }
  }
};
