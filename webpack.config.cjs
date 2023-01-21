const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
     new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/careers.html',
      filename: 'careers.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/credits.html',
      filename: 'credits.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/privacy.html',
      filename: 'privacy.html'
    }),
  ],
  // ... other configuration options
  mode: 'production'
};