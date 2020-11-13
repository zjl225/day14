//配置文件
const { resolve } = require('path'); //Node.js内置模块
module.exports = {
    entry: './src/index.js', //配置入口文件
    output: {
        path: resolve(__dirname, 'build'), //输出路径，__dirname：当前文件所在路径
        filename: 'built.js' //输出文件
    },
    module: {
        rules: [
            {
                test: /\.css$/,    //打包规则应用到以css结尾的文件上
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [

    ],
    mode: 'development'
    //mode:'production
}