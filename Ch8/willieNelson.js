var person = newObject();

var person = newObject();
person.eyes = 2;
person.ears = 2;
person.arms = 2;
person.hands = 2;
person.feet = 2;
person.legs = 2;
person.species = "Homo sapien"; // created new person object of the type object


var willieNelson = new Object();
willieNelson.eyes = 2;
willieNelson.ears = 2;
willieNelson.arms = 2;
willieNelson.hands = 2;
willieNelson.feet = 2;
willieNelson.legs = 2;
willieNelson.species = "Homo sapien";
willieNelson.occupation = "musician";
willieNelson.hometown = "Austin";
willieNelson.hair = "long";
willieNelson.genre = "country"; // wasteful way to define willieNelson object


var person = new Object();
// or
var willieNelson = new Person();
// capitalisation game is key


// constructiong objects with constructor functions
function Person(){
	this.eyes = 2;
	this.ears = 2;
	this.arms = 2;
	this.hands = 2;
	this.legs = 2;
	this.feet = 2;
	this.species = "Homo sapien";
}

// to create new object of person type, assign function to new variable
var willieNelson = new Person();
// willieNelson object inherits all properties of person object


