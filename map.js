let arr=[{id:"1",name:"swapnil",age:25,address:"pune"},
{id:"2",name:"anu",age:25,address:"barshi"},
{id:"3",name:"madhu",age:25,address:"nanded"},
{id:"14",name:"kunal",age:23,address:"pune"},
{id:"15",name:"ganu",age:23,address:"solapur"},
{id:"16",name:"sham",age:22,address:"pune"}];
const map=()=>{
    arr.map((ele,i ,s)=>{
        let div=document.getElementById("div1");
        div.innerHTML+=`${i} id= ${ele.id} name${ele.name} address=${ele.address} age=${ele.age} <br>`;
        console.log(s);})    
}
