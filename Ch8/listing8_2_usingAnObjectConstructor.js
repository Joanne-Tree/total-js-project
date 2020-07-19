var person = new Object();
person.feet = 2;
person.name = "Sandy";
person.hair = "Black";
 
 //above way is generally considered inferior

// Retrieving and Setting Object Properties
// Dot notation

person.firstName = "Glenn";

var fullname = person.firstName + person.lastName;

document.write(person.firstName);

// square bracket notation

person["firstName"] = "Iggy";

var personProperty = "firstName";
person[personProperty] = "Iggy";
