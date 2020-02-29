const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  entry: {
    index: ['@babel/polyfill', path.resolve(__dirname, './src/index.ts')],
    // index: path.resolve(__dirname, './src/index.ts'),
    // 'main2.js': 'src/main2.ts',
  },
  target: 'node',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve('./src'),
        exclude: /(node_modules|dist)/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['thread-loader', 'cache-loader', 'babel-loader'],
        include: path.resolve('./src'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules'],
    plugins: [],
  },
  externals: [nodeExternals()],
  plugins: [new HardSourceWebpackPlugin()],
};
