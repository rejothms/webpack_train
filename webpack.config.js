var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9010
    },


    plugins: [
     new HtmlWebpackPlugin()
    ],


    module: {

        rules: [


            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }

              

        ]

    }
}