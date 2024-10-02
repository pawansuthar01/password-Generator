let Output = document.getElementById("Gpass");
let numLength = document.getElementById("numLength");
let uppCheck = document.getElementById("UppCheck");
let lowCheck = document.getElementById("lowCheck");
let symCheck = document.getElementById("symCheck");
let numCheck = document.getElementById("numCheck");
let btn = document.getElementById("copybut");
const upperCase = "ABCDEFGHIJKLMPONQRSTUVWXYZ";
const lowerCas = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*/+-=_";
const number = "123456789";
let upp = 0;
let low = 0;
let sym = 0;
let num = 0;
let total = 0;
let div = 0;
let password = "";

function Generator() {
  prnitpass();
  Output.style.borderColor = "green";
  if (uppCheck.checked) upp = 1;

  if (lowCheck.checked) low = 1;

  if (symCheck.checked) sym = 1;

  if (numCheck.checked) num = 1;

  total = upp + low + sym + num;
  passwordGen();
}
function passwordGen() {
  if (numLength.value >= 8) {
    div = numLength.value / total;
    btn.innerText = "Copy to Clipboard";
    numLength.style.borderColor = "black";
    if (upp) {
      for (let i = 0; i < div; i++) {
        let idx = Math.ceil(Math.random() * upperCase.length - 1);
        password += upperCase[idx];
      }
    }
    if (low) {
      for (let i = 0; i < div; i++) {
        let ind = Math.ceil(Math.random() * lowerCas.length - 1);
        password += lowerCas[ind];
      }
    }
    if (num) {
      for (let i = 0; i < div; i++) {
        let ind = Math.ceil(Math.random() * number.length - 1);
        password += number[ind];
      }
    }
    if (sym) {
      for (let i = 0; i < div; i++) {
        let ind = Math.ceil(Math.random() * symbol.length - 1);
        password += symbol[ind];
      }
    }
    Outputf();
  } else {
    Output.value = "password Length ";
    numLength.style.borderColor = "red";
    prnitpass();
  }
}
function copy() {
  if (Output.value != "") {
    const tempInput = document.createElement("textarea");
    tempInput.value = Output.value;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);
    btn.innerText = "Clipboard";
    Output.style.borderColor = "green";
  } else {
    Output.style.borderColor = "red";
  }
}
function Outputf() {
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
  if (numLength.value == password.length) {
    Output.value = password;
  } else {
    let value;
    value = numLength.value - password.length;
    password = password.slice(0, numLength.value);

    Output.value = password;
  }
}
function prnitpass() {
  upp = 0;
  num = 0;
  low = 0;
  password = "";
  div = 0;
  sym = 0;
  total = 0;
}
