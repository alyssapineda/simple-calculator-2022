let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");

//refer input, equal, clear and erase 
let input = document.querySelector("#input");
let clear = document.querySelector("#clear");
let erase = document.querySelector("#delete");
let equal = document.querySelector("#equal");

window.onload = () => {
  input.value = "";
};

//access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //display value of each button
    input.value += button_class.value;
  });
});

//solve user's input when equal button is clicked
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input
    let result = eval(inp_val);
    //true for integers
    //false for decimals
    if (Number.isInteger(result)) {
      input.value = result;
    }else {
      input.value = result.toFixed(2);
    } 
  } catch(error) {
      alert("Please click on valid input button!");
  }
});

// AC button deletes entire input on screen
clear.addEventListener("click", () => {
  input.value = "";
});

//DEL button deletes single item
erase.addEventListener("click", () => {
  input.value = input.value.substr(0,input.value.length - 1);
});