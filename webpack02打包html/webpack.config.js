
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', //配置入口文件
    output: {
        path: resolve(__dirname, 'build'), //输出路径，__dirname：当前文件所在路径
        filename: 'built.js' //输出文件
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //默认创建一个空的html，自动引入打包输出的所有资源（js/css)
            //复制./src/index.html文件，并自动引入打包输出的所有资源
            template: './src/index.html'
        })
    ],
    mode: 'development'
}