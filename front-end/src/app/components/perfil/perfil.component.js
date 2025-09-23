function mostrarPreview() {
  const input = document.getElementById("foto-perfil");
  const preview = document.getElementById("preview-imagem");

  const arquivo = input.files[0];
  if (arquivo) {
    const leitor = new FileReader();
    leitor.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    }
    leitor.readAsDataURL(arquivo);
  }
}

function salvarPerfil() {
  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const email = document.getElementById("email").value;
  const hobbies = document.getElementById("hobbies").value;

  const neurodivergencias = [];
  document.querySelectorAll('input[name="nd"]:checked').forEach((el) => {
    neurodivergencias.push(el.value);
  });

  console.log("Nome:", nome);
  console.log("dataNascimento:", dataNascimento);
  console.log("Email:", email);
  console.log("Neurodivergência:", neurodivergencias);
  console.log("Hobbies:", hobbies);

  alert("Perfil salvo com sucesso.");
}
