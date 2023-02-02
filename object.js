//Create Object literals
const player = {};
player.name = "Small Nirob";
player.specialty = "batsman";
player.bat = function () {
  console.log("swing your bat");
};
// console.log(player);
// player.bat();

//
const student = {
  name: "pandey",
  job: "Khai andey",
  ball: function () {
    console.log("throw the ball");
  },
  salary: 1000,
};
// object constructor
const person = new Object();
// console.log(person);

// object create method
const item = Object.create(null);
// console.log(item);

// class
class Persons{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}
const persons1 = new Persons(56);
console.log(persons1);

// function object 
function Car(model,price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon',32);