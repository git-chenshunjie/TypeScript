1. 全局安装ts   npm i typescript -g 
2. 创建tsconfig配置文件  tsc --init
3. 创建package.json配置文件 npm init -y
4. 创建一个ts文件 index.ts 
```ts
const  msg = "TypeScript"
// 定义msg类型为字符串
function sayHello(msg:String){
    return "Hello，" + msg
}
document.body.textContent = sayHello(msg);
```
5. 运行tsc index.ts 生成对应的index.js 文件
6. 创建宿主页面 index..html 并引入 index.js