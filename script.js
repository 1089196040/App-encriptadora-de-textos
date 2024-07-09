// script.js
function encryptText() {
  let inputText = document.getElementById("inputText").value;
  let encryptedText = inputText.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
  showResult(encryptedText);
}

function decryptText() {
  let inputText = document.getElementById("inputText").value;
  let decryptedText = inputText.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
  showResult(decryptedText);
}

function showResult(text) {
  let outputText = document.getElementById("outputText");
  outputText.value = text;
  outputText.style.display = 'block';
  document.querySelector('.result img').style.display = 'none';
  document.querySelector('.result p:nth-child(2)').style.display = 'none';
  document.querySelector('.result p:nth-child(3)').style.display = 'none';
}

function copyText() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}

