let demo = document.querySelector("#demo");
let string = `你好，我是一名前端新人`;
console.log(string.length);
let n = 0;
demo.innerHTML = string.substring(0, n);
let step = ()=>{
    setTimeout(()=>{
        console.log(n);
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        if (n + 1 > string.length) return;
        step();
    }, 1000);
};

//# sourceMappingURL=index.c4775257.js.map
