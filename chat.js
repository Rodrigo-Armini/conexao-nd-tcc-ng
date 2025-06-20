function enviarMensagem() {
  const input = document.getElementById("mensagem");
  const texto = input.value.trim();
  if (texto === "") return;

  const chatBox = document.getElementById("chat-box");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("mensagem");
  msgDiv.textContent = texto;

  chatBox.appendChild(msgDiv);
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
