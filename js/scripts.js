var num1 ='';
var num2 = '';
var operator = '';
var total = '';

$(document).ready(function() {

//function to assign btn click to number or operator function
  $('button').on('click', function(e) {
        var btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    });



// function to handle numbers
  function handleNumber(num) {
    if (num1 === '') {
      num1 = num;
    } else {
      num2 = num;
    }
    displayButton(num);
  }

//fundtion to handle operators
  function handleOperator(oper) {
    if (operator === '') {
      operator = oper;
    } else {
      handleTotal();
      operator = oper;
    }

    }

// function to display button click in screen div
function displayButton(btn) {
    $('#output').text(btn);
}

function handleTotal() {
  switch (operator) {
    case '+':
      total = +num1 + +num2;
      displayButton(total);
      break;

    case '-':
      total = +num1 - +num2;
      displayButton(total);
      break;

    case '*':
      total = +num1 * +num2;
      displayButton(total);
      break;

    case '/':
      total = +num1 / +num2;
      displayButton(total);
      break;

    case '%':
    total = +num1 % +num2;
    displayButton(total);
    break;

    case 'CE':
    total = 0;
    displayButton(total);
    break;


  }
  updateVariables();

  }

  function updateVariables() {
      num1 = total;
      num2 = '';
  }


});
