const form = document.getElementById("form");
const messageBox = document.getElementById("campo-mensagem");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoA = parseInt(document.getElementById("campo-a").value);
  const campoB = parseInt(document.getElementById("campo-b").value);

  if (campoB > campoA) {
    messageBox.textContent = "Formulário válido!";
  } else {
    messageBox.textContent =
      "O número em Campo B deve ser maior que o número em Campo A!";
  }
});
