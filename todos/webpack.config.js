var webpack = require('webpack');
var path = require('path');

module.exports= {
	
	entry: [
		'webpack-dev-server/client?http://localhost:8090',
		'webpack/hot/only-dev-server',
		'./src/index.js'
    ],

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'static'),
    	publicPath: '/static/'
	},

	module: {
	    loaders:[
	      // babel-loader babel-preset-react babel-preset-es2015
	      {
	        test: /\.js[x]?$/,
	        include: path.join(__dirname, 'src'),
	        loaders: ['react-hot', 'babel-loader']
	      },
	      // css-loader
	      { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
	    ]
  	},

  	plugins: [
    	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js'),
    	new webpack.HotModuleReplacementPlugin()
  	]
}