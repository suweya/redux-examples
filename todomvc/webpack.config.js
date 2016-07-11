var webpack = require('webpack');
var path = require('path');

module.exports= {

	// source-map 配置
	devtool: 'cheap-module-eval-source-map'
	
	// 编译文件入口
	entry: [
		'webpack-dev-server/client?http://localhost:8090',
		'webpack/hot/only-dev-server',
		'./src/index.js'
    ],

    // 输出目录及文件
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
  		// 减少文件大小
  		new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js'),
    	new webpack.HotModuleReplacementPlugin()
  	]
}