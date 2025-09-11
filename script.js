
// still learning js thought creating object
const person ={
    firstname:"billy",
    lastname:"joshua",
    age:25,
    eyecolor:"browon"
};
document.getElementById("demo2").innerHTML = person.firstname +" is " + person.age + " years old and has " + person.eyecolor + " eyes.";

const person1={};
    person1.firstname="john",
    person1.lastname="doe",
    person1.age=30,
    person1.eyecolor="blue"

    // DISPLAY data from object
document.getElementById("demo3").innerHTML = person1.firstname +" is " + person1.age + " years old and has " + person1.eyecolor + " eyes.";
// create an object

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

// escape character
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

    // tomorrow will be #day8 with js arrays and more