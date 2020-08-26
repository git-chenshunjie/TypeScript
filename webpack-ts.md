### 工程化
1. 安装相关工具 npm i webpack webpack-cli webpack-dev-server ts-loader typescript html-webpack-plugin -D
2. 配置文件：build/webpack.config.js
3. 添加开发脚本，package.json
```js
"scripts": {
    "dev": "webpack-dev-server --config ./build/webpack.config.js"
}
```
