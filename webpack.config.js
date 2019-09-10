const  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'output.js'
    },
    module:{
        rules:{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],


                test: /\.scss?$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    }
                ]
            
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css'
          }),
    ]
}