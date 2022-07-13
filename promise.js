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

 let b=new Promise((resolve,reject)=>{
     let a=false;
     if(true){
         resolve("it is reslove");
     }else
     {
         reject("promise is rejected");
     }

 });
 b.then((res)=>{
     console.log("promise status is:"+res);
 }).catch((err)=>{
     console.log("erro"+err);
 })



var a=new Promise((resolve,reject)=>{
var d=false;
if(d){
    resolve("madhuri")
}else{
    reject("vaibhav")
}
});
a.then((m)=>{
    console.log("good girl"+m);
}).catch((err)=>{
    console.log("good  boy" +" "+err);
})

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
