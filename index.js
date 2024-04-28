let display = document.getElementById("inpt");

function displayinput(input) {
  display.value = display.value + input;
}

function clearScreen() {
  display.value = "0";
}

function displayResult() {
  let result = eval(display.value);
  display.value = result;
}
