let arr=[{id:"1",name:"swapnil",age:25,address:"pune"},
{id:"1",name:"anu",age:25,address:"barshi"},
{id:"1",name:"madhu",age:25,address:"nanded"},
{id:"1",name:"kunal",age:23,address:"pune"},
{id:"1",name:"ganu",age:23,address:"solapur"},
{id:"1",name:"sham",age:22,address:"pune"}]
const map=()=>{
    arr.map((ele,i,a)=>{
        let div=document.getElementById("div1");
        div.innerHTML=`${i} ${ele} ${a}`;
    })
}