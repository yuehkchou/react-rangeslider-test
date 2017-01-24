module.exports = {
  devtool: 'eval',
  entry: ['./client/index.js'],
  output: {
    path:'./dist',
    filename: 'bundle.js'
  },
  devServer: {
      inline: true,
      port: 8448
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
