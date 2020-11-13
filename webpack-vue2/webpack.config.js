const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//引入vue-loader的插件
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'development',
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}