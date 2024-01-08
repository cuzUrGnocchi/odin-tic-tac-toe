const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    Board: './src/model/Board.js',
    Game: './src/model/Game.js',
    Time: './src/model/Time.js',

    moveCalculator: './src/modules/moveCalculator.js',

    BoardView: './src/view/Board.js',
    SidebarView: './src/view/Sidebar.js',
    CountdownTimerView: './src/view/CountdownTimer.js',

    index: './src/index',
  },
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      index: true,
      mimeTypes: {
        phtml: 'text/html',
      },
      publicPath: '/dist',
      serverSideRender: true,
      writeToDisk: true,
    },
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tic-Tac-Toe',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
