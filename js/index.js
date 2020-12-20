
const numberButtons = document.querySelectorAll("[data-number]");
const operandButtons = document.querySelectorAll("[data-operand]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equal]");
const previousText = document.querySelector("[data-previous-element]");
const currentText = document.querySelector("[data-current-element]");
const calculator = new Calculator(previousText, currentText);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.appendNumber(button.value);
    calculator.updateDisplay();
  })
);

operandButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.chooseOperand(button.value);
    calculator.updateDisplay();
  })
);

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
