/* 
//Functia explicata inainte de a fi transformata din strin in nr

function calc() {
    //select ('document') part of the DOM(document object model)
    //select a specific element from the website with ('querySelector') method

    //# select a specific element by (Id="value1"0

    //value from input  (.value)
    var a = document.querySelector("#value1").value;
}
*/

//convert a string to number
function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value); 
    //operator type it s a string so with don t need to change
    // grab and use as is it
    var op  = document.querySelector("#operator").value;
    //no value yet
    var calculate; 

    if (op == "add") {
       calculate = a + b;
    } else if (op == "min") {
         calculate = a - b;
    }  else if (op == "div") {
        calculate = a / b;
   } else if (op == "mul") {
    calculate = a * b;
}
//console.log(calculate);

//show rezult on website, grab the id by querySelector and show rezult
document.querySelector("#rezult").innerHTML = calculate;
} 

//Add event on my button, write onclick="calc()"