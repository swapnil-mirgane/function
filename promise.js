let str=["anuj","pune","barshi"];
function sw(){
    str.map((ele)=>{console.log(ele);})
}
setTimeout(sw(), 1000);

setTimeout(() => {
    str.push("delli");
    sw();
}, 2000);

var a=str.shift();
console.log(a);