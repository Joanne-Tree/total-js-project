var movie = "The Godfather";
function showGoodMovie() {
	alert(movie + " is a good movie!");
}
function showBadMovie(){
	let movie = "Speed 2: Cruise Control";
	//added let on above line to fix global variable error
	alert(movie + " is a bad movie!");
}