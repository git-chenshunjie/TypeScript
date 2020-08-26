
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry: './src/index.ts',
    // 出口
    output: {
        filename: 'app.js'
    },
    resolve: {
        // 模块导入扩展名处理
        extensions: ['.js', '.ts', '.tsx']
    },
    // 
    devtool: 'cheap-module-eval-source-map',
    module: {
        // 规则
        rules: [
            {
                // 匹配ts或者tsx文件
                test: /\.tsx?$/i, 
                // 使用ts-loader
                use: [{
                    loader: 'ts-loader'
                }],
                // 排除node_modules
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}