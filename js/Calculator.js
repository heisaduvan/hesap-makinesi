class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
    appendNumber(number) {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    updateDisplay() {
      this.currentOperandTextElement.innerText = this.currentOperand;
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          this.previousOperand + this.operation;
      } else {
        this.previousOperandTextElement.innerText = "";
      }
    }
    chooseOperand(operand) {
      if (this.currentOperand === "") return;
      if (this.previousOperand !== "") {
        this.compute();
      }
      this.operation = operand;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }
    compute() {
      let computation;
      if (isNaN(this.previousOperand) || isNaN(this.currentOperand)) return;
      switch (this.operation) {
        case "+":
          computation = parseInt(this.previousOperand,10) + parseInt(this.currentOperand,10);
          break;
        case "-":
          computation = this.previousOperand - this.currentOperand;
          break;
        case "*":
          computation = this.previousOperand * this.currentOperand;
          break;
        case "/":
          computation = parseInt(this.previousOperand,10) / parseInt(this.currentOperand,10);
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = "";
    }
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }