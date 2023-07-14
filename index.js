let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetScreen = false;

const displayCurrent = document.getElementById("currentOperationScreen");
const displayLast = document.getElementById("lastOperationScreen");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");
const dotButton = document.getElementById("dot");

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
dotButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) => {
	button.addEventListener("click", () => appendNumber(button.textContent));
});

operationButtons.forEach((button) => {
	button.addEventListener("click", () => setOperation(button.textContent));
});

function appendNumber(number) {
	if (shouldResetScreen) {
		resetScreen();
	}
	displayCurrent.textContent += number;
}

function appendPoint() {
	if (shouldResetScreen) resetScreen();
	if (displayCurrent.textContent === "") {
		displayCurrent.textContent = "0";
	}
	if (displayCurrent.textContent.includes(".")) return;
	displayCurrent.textContent += ".";
}

function resetScreen() {
	displayCurrent.textContent = "";
	shouldResetScreen = false;
}

function clear() {
	displayCurrent.textContent = "";
	displayLast.textContent = "";
	firstNumber = "";
	secondNumber = "";
	currentOperator = null;
}

function deleteNumber() {
	displayCurrent.textContent = displayCurrent.textContent
		.toString()
		.slice(0, -1);
}

function setOperation(operator) {
	if (currentOperator !== null) evaluate();
	firstNumber = displayCurrent.textContent;
	currentOperator = operator;
	displayLast.textContent = `${firstNumber}${currentOperator}`;
	shouldResetScreen = true;
}

function evaluate() {
	if (currentOperator === null || shouldResetScreen) return;
	if (currentOperator === "/" && displayCurrent === "0") {
		alert("Cannot divide by 0");
		return;
	}
	secondNumber = displayCurrent.textContent;
	displayCurrent.textContent = round(
		operate(firstNumber, secondNumber, currentOperator),
	);
	displayLast.textContent = `${firstNumber}${currentOperator}${secondNumber}`;
	currentOperator = null;
}

function round(number) {
	return Math.floor(10000 * number) / 10000;
}

function add(num1, num2) {
	return num1 + num2;
}

function substract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 / num2;
}

function divide(num1, num2) {
	return num2 === num1 ? null : num1 / num2;
}

function operate(num1, num2, oper) {
	const a = Number(num1);
	const b = Number(num2);
	switch (oper) {
		case "+":
			return add(a, b);
		case "-":
			return substract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
		default:
			return "That operation does not exist";
	}
}
