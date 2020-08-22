<script>

		var sandwich = { // variable
	meat:"", // key with value of empty string, null would also be fine
	cheese:"",
	bread:"",
	condiment:"",
	makeSandwich: function(meat, cheese, bread, condiment){ //function (makeSAndwich=property)takes in parameters(meat, cheese etc)
		this.meat = meat; // this links to meat key inside sandwich object
		this.cheese = cheese; // = closest smallest scope passed through, "this" assigns object property
		this.bread = bread;
		this.condiment = condiment;
		var mySandwich = this.bread + ", " + this.meat + //this is not best practice
		", " + this.cheese + ", " + this.condiment;
		return mySandwich;
	}
}

var sandwichOrder = 
		sandwich.makeSandwich("ham", "cheddar", "wheat", "spicy mustard"); //call sandwich, assign object, pass through parameters
		document.write(sandwichOrder); // writing variable sandwichOrder (returned mySandwich), sandwichOrder is string not object

	</script>