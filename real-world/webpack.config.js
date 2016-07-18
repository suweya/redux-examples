var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-module-eval-source-map',

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

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js'),
    	new webpack.HotModuleReplacementPlugin()
	],

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
	}
}