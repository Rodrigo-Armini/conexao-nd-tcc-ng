function validarCadastro(event) {
  event.preventDefault();
  const dataNascimento = document.getElementById("dataNascimento").value;
  const mensagemErro = document.getElementById("mensagemErro");

  if (!dataNascimento) {
    mensagemErro.textContent = "Por favor, preencha a data de nascimento.";
    return false;
  }

  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  if (idade < 18) {
    mensagemErro.textContent = "Você precisa ter 18 anos ou mais para se cadastrar.";
    return false;
  }

  mensagemErro.textContent = "";
  alert("Cadastro realizado com sucesso (simulado)!");
  return true;
}
