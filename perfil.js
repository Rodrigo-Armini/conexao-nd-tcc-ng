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
