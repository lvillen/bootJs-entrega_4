//Funciones
var sum = (numA, numB) => numA + numB;
var substract = (numA, numB) => numA - numB;
var multiply = (numA, numB) => numA * numB;
var divide = (numA, numB) => numA / numB;

// Recibiendo los inputs
var getNumber = (inputId) => parseInt(document.getElementById(inputId).value);

// Funciones en uso
var resultSum = () => document.getElementById("result").innerText = isNaN(getNumber("numA")) || isNaN(getNumber("numB")) ? "Not a number, try again" : sum(getNumber("numA"), getNumber("numB"));
var resultSubstract = () => document.getElementById("result").innerText = isNaN(getNumber("numA")) || isNaN(getNumber("numB")) ? "Not a number, try again" : substract(getNumber("numA"), getNumber("numB"));
var resultMultiply = () => document.getElementById("result").innerText = isNaN(getNumber("numA")) || isNaN(getNumber("numB")) ? "Not a number, try again" : multiply(getNumber("numA"), getNumber("numB"));
var resultDivide = () => document.getElementById("result").innerText = isNaN(getNumber("numA")) || isNaN(getNumber("numB")) ? "Not a number, try again" : divide(getNumber("numA"), getNumber("numB"));

//Registro al hacer click
document.getElementById("sum-btn").addEventListener("click", resultSum);
document.getElementById("substract-btn").addEventListener("click", resultSubstract);
document.getElementById("multiply-btn").addEventListener("click", resultMultiply);
document.getElementById("divide-btn").addEventListener("click", resultDivide);