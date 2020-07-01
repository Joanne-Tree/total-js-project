//conditional operator
var isItBiggerThanTen = (value > 10) ? "greater than 10" : "not greater than 10";

//comma operator
var a = 10, b = 0;

//delete operator
var animals = ["dog", "cat", "bird", "octopus"];
console.log (animals[3]) ; // returns "octopus"
delete animals[3];
console.log (animals[3]); // returns "undefined"

//in operator
var animals = ["dog", "cat", "bird", "octopus"];
if (3 in animals) {
	console.log ("it's in there");
}

// instanceof operator
var myString = new String();
if (myString instanceof String){
	console.log("yup, it's a string!");
}

// new operator
var today = new Date();
var bird = new Pet();
var daisy = new Flower();

// typeof operator
var businessName = "Harry's Watch Repair";
console.log typeof businessName; // returns "string"

//void operator
<a href="javascript:void(0);"> This is a link, but it won't do anything </a>

//combining operators
a = a + 10;
a += 10;