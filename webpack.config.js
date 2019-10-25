const path = require('path');

module.exports = {
	entry: './src/js/entry.js', //入口文件配置
	output: { //出口文件配置	
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'bundle.js' //输出的文件名
	},
	// 配置css和图片的loader
	module: {
		rules: [
			// css和scss
			//直接支持 解析 Scss
			{
			    test:/\.(css|scss)$/,
			    use:["style-loader","css-loader","sass-loader"]
			},
			// 图片
			{
				test: /\.(png|jpg|gif)$/, //图片用下面loader来处理
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192 //小于8192bit的图片，使用base64来加载。（小于8kb的图片，将被压缩到js中，不会被看到。）
					}

				}]
			},
			// lable
			{
				test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
				loader: "babel-loader"
			},
			// vue
			{
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader',
					options: {
						loaders: {
							js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
							css: 'vue-style-loader!css-loader'
						}
					}
				}],
			}
		]
	}

};
