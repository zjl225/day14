const { resolve } = require('path'); //Node.js内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js', //配置入口文件
    output: {
        path: resolve(__dirname, 'build'), //输出路径，__dirname：当前文件所在路径
        filename: 'built.js' //输出文件
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            //处理图片资源
            {
                test: /\.(jpg|png|gif)$/,
                //下载url-loader file-loader
                loader: 'url-loader',
                options:
                {
                    //图片小于8kb，就会被base64处理
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                //处理html中的图片（引入，然后被url-loader处理）
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    //开发服务器devserver：自动更新
    //启动指令：npx webpack-dve-server
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        //启动gzip压缩
        compress: true,
        //端口号
        port: 3000,

    }
};
