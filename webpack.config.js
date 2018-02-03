const path = require('path')
module.exports = {
	entry: {
		home:path.resolve('Javascript/main.js'),
	},
	output:{
		path: path.resolve('Javascript/'),
		filename: 'bundle.js'
		},
	module:{
		loaders:[
		{test:/\.js$/, loader:'babel-loader', exclude:/node_modules/}
		]
	}
}
