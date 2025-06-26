function toggleFocusMode() {
  const body = document.body;
  const btn = document.getElementById("btn-foco");

  body.classList.toggle("focus-mode");

  if (body.classList.contains("focus-mode")) {
    btn.textContent = "Desativar Modo Foco";
  } else {
    btn.textContent = "Ativar Modo Foco";
  }
}
