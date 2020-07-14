const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        './src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
  	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
			loader: "babel-loader"
			}
		},
      	{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader"
				}
			]
		},
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		},
      	{
			test: /\.less$/,
			use: [
				{
					loader: 'style-loader',
				}, 
				{
					loader: 'css-loader', // translates CSS into CommonJS
				}, 
				{
					loader: 'less-loader', // compiles Less to CSS
					options: {
						lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
							modifyVars: {
								'primary-color': '#1DA57A',
								'link-color': '#1DA57A',
								'border-radius-base': '2px',
								'border-color': '#fff'
							},
							javascriptEnabled: true,
						}
					},
				}
			]
        } 
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};