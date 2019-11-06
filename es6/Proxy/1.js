let target = {
    name: 'Tom',
    age: 24
}

let handler = {
    get: function(target, key) {
        console.log('getting '+key);
        return target[key]; // 不是target.key
    },
    set: function(target, key, value) {
        console.log('setting '+key);
        target[key] = value;
    }
}

 // target 即目标对象， handler 是一个对象
let proxy = new Proxy(target, handler)
proxy.name     // 实际执行 handler.get
proxy.age = 25 // 实际执行 handler.set