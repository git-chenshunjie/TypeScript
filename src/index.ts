const  msg = "TypeScript"

function sayHello(msg:any){
    return "Hello，" + msg
}

document.body.textContent = sayHello(msg);