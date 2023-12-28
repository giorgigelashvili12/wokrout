try {                       // block of code to try
    undefinedFunction();
}
catch(err) {                // block to handle errors
    console.log(err.message)
}

// Input Validation

var x = document.getElementById("mynum").value;

try {       // error cases
    if(x == "") throw "empty"; // if empty return "empty" 
    if (isNaN(x)) throw "not a number"; // if not a num
    x = Number(x); // defined x
    if(x > 10) throw "too high"; // if x is more than ten
}
catch(err) {                            // if there's an error
    document.write("Input is " + err);  // output error
    console.error(err);                 // write the error in console
}
finally {
    // executed regardless of the try / catch result
    document.write("</br />Done");
}