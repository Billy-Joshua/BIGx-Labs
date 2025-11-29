//
let person1 = {};
// javascript objects
    person1.firstname="john",
    person1.lastname="doe",
    person1.age=30,
    person1.eyecolor="blue"

    // DISPLAY data from object
document.getElementById("demo3").innerHTML = person1.firstname +" is " + person1.age + " years old and has " + person1.eyecolor + " eyes.";

const people = new Object ({
        firstname: "john",
        lastname: "doe",
        age: 50,
        id:5566,        
        eyecolor: "blue",
        fullname: function(){
            return this.firstname + " " + this.lastname;
        }
});
// display object content
document.getElementById("demo4").innerHTML = people.fullname() + " is " + people.age + " years old and has " + people.eyecolor + " eyes.";

// constructor function for person object
function person3(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age =age;
    this.eyeColor = eye;
}
// create a new person object
const myFather = new person3("john","doe",50,"blue");

// display age
document.getElementById("demo5").innerHTML = "my father is " + myFather.age + ".";

// javascript strings
let carName1 = "BMWS";
let carName2 = "mercedes benz";
let text = "JOSHUA BILLY ";
document.getElementById("demo5").innerHTML = text;
document.getElementById("demo6").innerHTML = carName1 + " " + carName2;

// still  js string manipulation

let answer1 = "it's alright";
let answer2 = "he is called 'Johnn'";
let answer3 = "he is called 'Joshua'";

document.getElementById("demo7").innerHTML =answer1 + "<br>" + answer2 + "<br>" + answer3;
document.getElementById("demo8").innerHTML = "hello joshua";


let text1 =

`The quick
brown fox
jumps over
the lazy dog`; 

document.getElementById("demo9").innerHTML = text1;
let x ="John";
let y =new String("john");
   document.getElementById("demo10").innerHTML = typeof x +"<br>" + typeof y;
   // comparing string objects

   let X ="joshua billy";
    let Y = new String("joshua billy");
    document.getElementById("demo11").innerHTML = (X==Y);
 let firstName ="francine";
 let lastName ="mukamana";
 let world = `welcome ${firstName} ${lastName}!`;
 document.getElementById("demo12").innerHTML = world;

 let price =10;
 let VAT =0.25;
 let total =`Total: ${(price *(1+ VAT)).toFixed(2)}`;
 document.getElementById("demo13").innerHTML = total;

 let header = "free cancer to generation";
let tags = ["free cancer", "back home", "free education", "free health care"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo14").innerHTML = html;
let Z = 999999999999999;
let T = 9999999999999999;
document.getElementById("demo15").innerHTML = Z + "<br>" + T;
// different ways to write numbers

let K = 100 / "Apple";
document.getElementById("demo15").innerHTML = isNaN(K);
// infinity

 let myNumber = 2;
 let txt1 = "";
 while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt1 = txt1 + myNumber + "<br>";
}
    document.getElementById("demo16").innerHTML = txt1;

    // tomorrow will be #day8 with js arrays and moregit 
   const cars =["BMW","Mercedes","Audi","Toyota"];
   cars[0] ="KIA solent 2024";
   cars[1] ="Range rover";
   
   document.getElementById("demo17").innerHTML = cars;
   const cars1 =[];
   cars1[0] ="BMW";
   cars1[1] ="Mercedes";
   cars1[2] ="Audi";
   cars1[3] ="Toyota";
   document.getElementById("demo18").innerHTML = cars[1];

   
   const fruits = ["banana","mango","orange","apple"];
   let myList =fruits.toString();
   document.getElementById("demo19").innerHTML = myList;
   
   // array element can be object 
   // array properties and methods
   // array length PROPERTY
   const cars2 =["BMW","Mercedes","Audi","Toyota","Range rover"];
   let size =  cars2.length;
   document.getElementById("demo20").innerHTML = size;
   document.getElementById("demo21").innerHTML = cars2[cars2.length-1];

   // looping array elements 
  const computers =["mac","dell","hp","lenovo"];
  let  flen = computers.length;
  let text2 ="<ul>";
  for (let i=0; i < flen;i++){
    text2 +="<li>" +computers[i] +"</li>";
  }
  text2 +="</ul>";

    document.getElementById("demo22").innerHTML = text2;

    // array forEach() method
    const computers1 =["mac","dell","hp","lenovo"];
    let text3 = "<ul>";
    computers1.forEach(myFunction);
    text3 += "</ul>";

    function myFunction(value){
        text3 +="<li>" + value + "</li>";
    }
    // adding array elements

    const diseases =["lung","breast","prostate","skin"];
    document.getElementById ("demo23").innerHTML = diseases;

    function addDisease(){
        diseases.push("colona cancer");
        document.getElementById ("demo23").innerHTML = diseases;
    }
    function addBloodCancer(){
        diseases.push("blood cancer");
        document.getElementById ("demo23").innerHTML = diseases;
    }
    const BMWModels =["x1","x3","x5","x7"];
    document.getElementById("demo24").innerHTML = BMWModels;
   
// js array push() method   
        let cart = ["Milk", "Bread"];
cart.push("Eggs"); 
cart.pop();
cart.push("Sugar");
console.log(cart); 
document.getElementById("demo30").innerHTML = cart;

let products =["phone","laptop","tablet"];
console.log(products.includes("laptop"));
document.getElementById("demo31").innerHTML = products.includes("laptop");
// javascript set
const letters = new Set(["a","b","c","d","e"]);
document.getElementById("demo32").innerHTML = "the set has "+ letters.size +" values.";
// DAY 11 WITH JAVASCRIPT 
const numbers = [2,4,6,8,10];
const doubled = numbers.map(x=> x*4); 
document.getElementById("demo33").innerHTML = doubled;
const taxes = [ 1000,2000,500];
const finaltaxes = taxes.map(p=> p*1.18);
document.getElementById("demo34").innerHTML = finaltaxes;
 
const scores=[60,30,80,90,40,100];
const over60 = scores.filter(scores => scores>60);
document.getElementById("demo35").innerHTML = over60;
// create map in js
const goods = new Map([
    ["item1",400],
    ["item2",500],
    ["item3",600]
]);
let goodsList ="";
goods.forEach(function(value,key){
    goodsList +=key + " = " +value + "<br>";
})
document.getElementById("demo36").innerHTML = goodsList;
// Create a WeakMap to store visit counts
const visitsCount = new WeakMap();

// Create Visitor Objects
const John = {name:"John", age:40};
const Paul = {name:"Paul", age:41};
const Ringo = {name:"Ringo", age:42};
const George = {name:"George", age:43};

// Track visits
track(Paul);
track(Ringo);  
track(Paul);
track(Paul);
track(John);

// Function to track visitors
function track(visitor) {
  let count = visitsCount.get(visitor) || 0;
  count++;
  visitsCount.set(visitor, count);
  text += visitor.name + ", age " + visitor.age + ", has visited " + count + " time(s).<br>";
}

document.getElementById("demo37").innerHTML = text;
//
let text4 = "";
for (const [key, value] of goods.entries()) {
  text4 += key + ' = ' + value + '<br>';
}
document.getElementById("demo38").innerHTML = text4;
const person4 ={
    firstname:"billy",
    lastname:"joshua",
    age:25,
    eyecolor:"brown"
}; 
let txt5 ="";
for (const [key, value] of Object.entries(person4)) {
  txt5 += key + ' = ' + value + '<br>';
}
document.getElementById("demo39").innerHTML = txt5;

// object methods
const person5 ={
    firstname:"billy",
    lastname:"joshua",
    middlename:"ishimwe",
    age:25,
    eyecolor:"brown",
    fullname: function() {
        return this.firstname + " " +   this.middlename + " " + this.lastname;
    }
}
document.getElementById("demo40").innerHTML = person5.fullname();


let thisworld ="hello, my name is Joshua";
let pattern =/Billy/; 


if (pattern.test(thisworld)){
    console.log("pattern found");
    thisworld ="found Billy";
} else {
    thisworld ="Billy not found"; 
}  
    document.getElementById("thisworld").innerHTML =thisworld;
