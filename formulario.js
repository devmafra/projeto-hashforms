const formulario = document.getElementById("formulario");
// Aplicar máscaras
IMask(document.getElementById("cpf"), {
  mask: "00000000000", // sem pontuação, porque seu validador espera só os dígitos
});

IMask(document.getElementById("telefone"), {
  mask: "00000000000", // sem parênteses e traços, compatível com seu validador
});

IMask(document.getElementById("cep"), {
  mask: "00000000", // mesmo motivo
});

// Função validar somente letras - campo nome
function isValidName(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    char = char.toUpperCase();
    if (!((char >= "A" && char <= "Z") || char === " ")) {
      return false;
    }
  }
  return true;
}

function isValidCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}

function isValidState(state) {
  return state.length === 2;
}
function limparMascara(valor) {
  return valor.replace(/\D/g, ""); // remove tudo que não for número
}
function validarEGuardarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert("Por favor, preencha todos os campos");
    return;
  }
  if (!isValidName(nome)) {
    alert("O nome deve conter apenas letras e espaços");
    return;
  }
  const cpfLimpo = limparMascara(cpf);
  if (!isValidCPF(cpfLimpo)) {
    alert("CPF inválido");
    return;
  }
  const telefoneLimpo = limparMascara(telefone);
  if (!isValidPhone(telefoneLimpo)) {
    alert("O telefone deve conter 11 digitos númericos");
    return;
  }
  const cepLimpo = limparMascara(cep);
  if (!isValidCEP(cepLimpo)) {
    alert("O CEP deve conter 8 digitos númericos");
    return;
  }
  if (!isValidState(estado)) {
    alert("Selecione o estado");
    return;
  }

  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };
  localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario));
  formulario.reset();
  alert("Dados salvos com sucesso!");
}

formulario.addEventListener("submit", validarEGuardarFormulario);
