// create a generic Person
var Person = {
	eyes: 2,
	arms: 2,
	feet: 2
}

// create the willieNelson object, based on Person
var willieNelson = Object.create(Person);

// test an inherited property
document.write(willieNelson.feet); // outputs 2

