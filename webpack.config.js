module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      ...
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      ...
    ]
  },
};