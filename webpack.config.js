const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = () => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'scripts_bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

const devConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: '../img/',
            }
          }
        ],
      },
    ],
  },
});

const prodConfig = () => ({
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: '../img/',
            }
          }
        ]
      },
    ],
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

module.exports = (env, argv) => {
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};
