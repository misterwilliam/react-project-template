module.exports = {
  entry: './main.js',
  output: {
    filename: './build/dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
        }
      }
    ]
  }
};