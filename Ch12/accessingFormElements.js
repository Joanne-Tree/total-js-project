// use the index number of the form and its input fields (avoid)
//document.forms[0].elements[0]

// use the name of the form and the name of the input field (ok to use)
//document.myForm.firstName

// use getElementById to select the form, and the name of the input field to select the input 
// (ok to use)
//document.getElementById("myForm").firstName 

//<form id="myForm" action="myaction.php">
//...
//</form>

//use unique id attribute value on the field to access the field directly (ok to use with caution)
// document.getElementById("firstName")

