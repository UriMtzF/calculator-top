let firstNumber;
let secondNumber;
let operator;

function add(num1, num2){
  return num1 + num2;
}

function substract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 / num2;
}

function divide(num1, num2){
  return num2 === num1 ? "Error" : num1 / num2;
}

function operate(firstNumber, secondNumber, operator){
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return substract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return "That operation does not exist";
  }
}