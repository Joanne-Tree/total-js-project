//passing functions as arguments
document.addEventListener('click', doSomething,false);

// writing functions with callbacks
function doMath(number1, number2, callback){
    var result = callback(number1, number2);
    document.write ("The result is: " + result);
}

doMath(5,2,function(number1,number2){
    var calculation = number1 * number2 / 6;
    return calculation;
});

// test closures with ToString() method
personalGreeting.toString();

//listing 15_5 notes

 // factory function 
 function createMessageAlert(theMessage){
     return function(){
         alert(theMessage);
     }
 }

 // to use function factory, assign return value to a variable. 

var badEmailError = createMessageAlert("Unknown email address!");

  // This creates a closure that can be used anywhere just by running badEmailError 
 // as a function. See below:

 document.login.yourEmail.addEventListener('change', badEmailError);
