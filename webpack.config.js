const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  entry: './src/index.ts',
  mode: isProduction ? 'production' : 'development',
  output: {
    library: 'GreeterWidget',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: `widget${isProduction ? '.min' : ''}.js`,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    isProduction
      ? null
      : new HTMLWebpackPlugin({
          template: path.resolve(__dirname, 'index.html'),
        }),
    isProduction ? null : new webpack.HotModuleReplacementPlugin(),
    // removes the null conditional entries
  ].filter(Boolean),
};