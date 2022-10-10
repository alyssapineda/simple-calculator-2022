// const screen = document.querySelector('.screen');
// const numberBtn = document.querySelectorAll('[data-number]');
// const operationBtn = document.querySelectorAll('[data-operation]');
// const equalBtn = document.querySelector('[data-equal]');
// const allClear = document.querySelector('[data-all-clear]');
// const delBtn = document.querySelector('[data-delete]');

// const previousOp = document.querySelector('[data-prev-op]');
// const currentOp = document.querySelector('[data-current-op]');

const screenel = document.querySelector('[data-screen]')

function display(number){
  document.querySelector('#result').value += number;
  screenel.textContent = number;
  return number;
}
  
function calc(){
  let x = document.querySelector('#result').value;
  let y = eval(x);
  document.querySelector('#result').value = y;
  screenel.textContent = y;
  return y
}

function clear(){
  document.querySelector('#result').value = ''
}
