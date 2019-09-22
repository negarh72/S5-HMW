var Num1 = document.getElementById('num1');
var Num2 = document.getElementById('num2');
var output = document.getElementById('output');

// output1.innerHTML = Num1.value;
// output2.innerHTML = Num2.value;

function getNumbers() {
    output1.innerHTML = Num1.value;
    output2.innerHTML = Num2.value;
}
// SELECT OPTION
var operator

function myFunction() {
    var x = document.getElementById("mySelect").selectedIndex;
    var operator = document.getElementsByTagName("option")[x].value
    console.log(operator)
    doOperation(Num1.value, Num2.value, operator)
}

function doOperation(a, b, selectedOperator) {
    var result;
    a = Number(a);
    b = Number(b);
    console.log(a);
    console.log(b);
    console.log(selectedOperator);
    if (selectedOperator == "SUM") {
        result = a + b;
    } else if (selectedOperator == "Subtraction") {
        result = a - b;
    } else if (selectedOperator == "Multiply") {
        result = a * b;
    } else if (selectedOperator == "Division") {
        result = a / b;
    }
    console.log(result)
    document.getElementById('result').innerHTML = "Your Answer:  " + result;
}