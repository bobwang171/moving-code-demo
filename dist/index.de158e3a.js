let html = document.querySelector("#html") //通过CSS选择器找到"html"
;
let string = `
/* 你好，我是小王
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来把div变成一个八卦图
首先把div变成一个圆
**/

body{
    color:red;
}
`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += '<br>';
        else if (string[n] === "") string2 += "&nbsp";
        else string2 += string[n];
        html.innerHTML = string2;
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999); // 当网页显示的代码溢出屏幕时，自动向下滚动屏幕
        if (n < string.length - 1) //如果n不是最后一个，就继续
        n += 1;
    }, 50);
};
step(); //从1变到2，如果没有它，网页不会改变

//# sourceMappingURL=index.de158e3a.js.map
