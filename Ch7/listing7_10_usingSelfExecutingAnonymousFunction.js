var myVariable = "I live outside the function.";
(function(){
	var myVariable = "I live in this anonymous function";
	document.write(myVariable);
})();
document.write(myVariable);