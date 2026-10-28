// ===== FUNÇÕES DO SISTEMA =====
function validarNumero(valor, minimo, maximo) {

  if (isNaN(valor)) {
    return false;
  }
  if (valor < minimo || valor > maximo) {
    return false;
  }
  return true;
}

function estoqueBaixo(quantidade) {
  return quantidade < 5;
}

function classificarVinho(safra) {
  let anoAtual = 2026;
  let idade = anoAtual - safra;

  if (idade <= 3) {
    return "Jovem";
  } else if (idade <= 10) {
    return "Amadurecido";
  } else {
    return "Antigo";
  }
}

function exibirVinho(nome, safra, quantidade) {
  let classificacao = classificarVinho(safra);
  let aviso = "";

  if (estoqueBaixo(quantidade)) {
    aviso = " - ATENÇÃO: ESTOQUE BAIXO!";
  }

  let mensagem = "Vinho: " + nome +
                 " | Safra: " + safra +
                 " | Quantidade: " + quantidade +
                 " | Classificação: " + classificacao + aviso;

  console.log(mensagem);
  alert("Vinho cadastrado com sucesso!\n\n" + mensagem);
}
