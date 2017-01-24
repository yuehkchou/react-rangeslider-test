module.exports = {
  devtool: 'eval',
  entry: ['./client/index.js'],
  output: {
    path:'./dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
