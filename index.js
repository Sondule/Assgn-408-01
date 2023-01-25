let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let country=document.getElementById("contry");
let num=document.getElementById("number");
 
let count=0;

function Add() {
    let output=document.getElementById("output");
    let err=document.getElementById("error");
    var AddTime=new Date();
    if(fname.value=="" || lname.value=="" || country.value=="" || num.value==""){
        console.log("Hello");
        err.innerHTML=`
        <h3 id="errorText" >All Fields Are Required</h3>
        `
    }
    else{
          err.innerHTML=""

   output.innerHTML+=`
   <div class="FirstName" id="data${count}"> 
    <p class="p">${fname.value} ${lname.value}<span>${AddTime}</span></p>
    <p>${country.value}</p>
    <p id="Score${count}">${number.value}</p>
    <div class="butn">
    <button onclick="del(${count})"><img src="Delete.jpeg"></button>
    <button onclick="add5(${count})">+5</button>
    <button onclick="Sub5(${count})">-5</button>
    </div>
   </div>
   `
   
   count++;
//    console.log(count);
    // fname.value=""
    // lname.value=""
    // country.value=""
    // num.value=""
    }
}

function del(count) {
  let Delet=  document.getElementById(`data${count}`);
    console.log(Delet);
    Delet.remove()
}

function add5(count) {
    var addition=document.getElementById(`Score${count}`);
//    console.log(addition.innerText);

    addition.innerText=+addition.innerText+5;
    console.log(addition.innerText);
}

function Sub5(count) {
    var addition=document.getElementById(`Score${count}`);
//    console.log(addition.innerText);

    addition.innerText=+addition.innerText-5;
    console.log(addition.innerText);
}