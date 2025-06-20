
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  ['login', 'cadastro'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function toggleFocusMode() {
  document.body.classList.toggle("focus-mode");
}

function validarCadastro() {
  const dataNasc = document.getElementById("data-nascimento").value;
  if (!dataNasc) {
    alert("Por favor, preencha a data de nascimento.");
    return;
  }

  const hoje = new Date();
  const nascimento = new Date(dataNasc);
  const idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();

  if (idade < 18 || (idade === 18 && m < 0)) {
    alert("Desculpe, é necessário ter 18 anos ou mais para se cadastrar.");
    return;
  }

  alert("Cadastro válido! (Aqui você pode enviar os dados.)");
}
