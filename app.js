let firstOperand = '';
let operator = '';
let secondOperand = '';
let result;

function init() {
  const display = document.querySelector('.display');
  const buttons = document.querySelectorAll('.button');

  // Function to update the display
  function updateDisplay() {
    display.textContent = firstOperand + operator + secondOperand;
  }

  // Function to clear the calculator
  function clearCalculator() {
    firstOperand = '';
    operator = '';
    secondOperand = '';
    updateDisplay();
  }

  // Function to perform the calculation
  function calculate() {
    const num1 = parseInt(firstOperand);
    const num2 = parseInt(secondOperand);

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Error: Division by zero!";
        }
        break;
      default:
        result = '';
    }

    // This will display the result 
    display.textContent = result;

    // Reset operands
    firstOperand = result.toString();
    operator = '';
    secondOperand = '';
  }

  // Add click event listeners to buttons
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const value = button.textContent;

      // Check if value is a number or an operator
      if (!isNaN(value)) {
        if (operator === '') {
          firstOperand += value;
        } else {
          secondOperand += value;
        }
      } else if (value === 'C') {
        clearCalculator();
      } else if (value === '=') {
        calculate();
      } else {
        if (operator === '') {
          operator = value;
        } else {
          calculate();
          operator = value;
        }
      }
      updateDisplay();
    });
  });
}

init();