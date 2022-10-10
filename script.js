let screenel = document.querySelector('#result');
let calculation = "";
let result = "";
let lastOperator = "";
let newOperator = "";


function display(value){

	if(value == '%')
	{
		lastOperator = "%";
	}else if(value == '*'){
		lastOperator = "*";
	}else if (value == '-'){
		lastOperator = "-";
	}else if (value == '/'){
		lastOperator = "/";
	}else if (value == '+'){
		lastOperator = "+";
	}

	console.log("The Value is " + value);
	console.log("The lastOperator is " + lastOperator);

	if(lastOperator == "" || (newOperator != lastOperator) || (value != lastOperator))
	{
		result = result.concat(calculation, value);
    	screenel.textContent = result;
    	newOperator = lastOperator;
    	console.log("New Operator" + newOperator);
    	return;
    }
}
  
function calc(){
  let y = eval(result);
  screenel.textContent = String(y);
}

function clear(){
  screenel.textContent = "";
  calculation = "";
  result = "";
  return;
}
