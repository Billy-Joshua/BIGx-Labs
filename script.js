
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
