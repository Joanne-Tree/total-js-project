var doTheThing = function(thingToDo) {
	document.write("I will do this thing: " + thingToDo);
}

var doTheThing2 = (thingToDo2) => 
	(document.write("I will do this thing: " + thingToDo2));

	doTheThing("thingToDo");
	
	
	doTheThing2("thingToDo2");


var doTheThing3 = () => 
	"I will do this thing: ";

console.log(doTheThing3());

var cake = "Red " + doTheThing3();
console.log(cake);
