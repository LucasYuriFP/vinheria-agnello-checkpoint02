// ===== FUNÇÕES DO SISTEMA =====

// Valida se o valor é um número e se está entre o mínimo e o máximo
function validarNumero(valor, minimo, maximo) {
  // isNaN() retorna true quando o valor NÃO é um número
  if (isNaN(valor)) {
    return false;
  }
  if (valor < minimo || valor > maximo) {
    return false;
  }
  return true;
}

// Verifica se o estoque está baixo (menos de 5 unidades)
function estoqueBaixo(quantidade) {
  return quantidade < 5;
}

// Classifica o vinho pela idade (ano atual - safra)
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

// Mostra os dados do vinho no console e avisa por alert()
function exibirVinho(nome, safra, quantidade) {
  // Reaproveita as outras funções para não repetir código
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

// ===== PROGRAMA PRINCIPAL =====

// Cadastra vários vinhos em sequência
function iniciarSistema() {
  // Contadores declarados antes do laço para valerem em todas as repetições
  let totalCadastros = 0;
  let totalEstoqueBaixo = 0;
  let nomeMaisAntigo = "";
  let safraMaisAntiga = 0;
  let continuar = true;

  // Variáveis numeradas, uma para cada vinho (não podemos usar arrays)
  let nome1, safra1, quant1;
  let nome2, safra2, quant2;
  let nome3, safra3, quant3;

  while (continuar) {
    // Pede o nome e repete enquanto estiver vazio
    let nome = prompt("Nome do vinho:");
    while (nome === "") {
      nome = prompt("Nome inválido! Digite o nome do vinho:");
    }

    // Pede a safra e repete enquanto for inválida
    let safra = Number(prompt("Safra (ano):"));
    while (!validarNumero(safra, 1900, 2026)) {
      safra = Number(prompt("Safra inválida! Digite um ano entre 1900 e 2026:"));
    }

    // Pede a quantidade e repete enquanto for inválida
    let quantidade = Number(prompt("Quantidade em estoque:"));
    while (!validarNumero(quantidade, 0, 10000)) {
      quantidade = Number(prompt("Quantidade inválida! Digite um número entre 0 e 10000:"));
    }

    // Conta o cadastro e guarda os dados nas variáveis numeradas
    totalCadastros++;

    if (totalCadastros === 1) {
      nome1 = nome;
      safra1 = safra;
      quant1 = quantidade;
    } else if (totalCadastros === 2) {
      nome2 = nome;
      safra2 = safra;
      quant2 = quantidade;
    } else if (totalCadastros === 3) {
      nome3 = nome;
      safra3 = safra;
      quant3 = quantidade;
    }

    // Conta os vinhos com estoque baixo
    if (estoqueBaixo(quantidade)) {
      totalEstoqueBaixo++;
    }

    // Compara a cada repetição para achar a safra mais antiga
    if (totalCadastros === 1 || safra < safraMaisAntiga) {
      safraMaisAntiga = safra;
      nomeMaisAntigo = nome;
    }

    exibirVinho(nome, safra, quantidade);

    // Pergunta se quer continuar (máximo de 3 vinhos)
    if (totalCadastros === 3) {
      alert("Limite de 3 vinhos atingido.");
      continuar = false;
    } else {
      let resposta = prompt("Deseja cadastrar outro vinho? (s/n)");
      if (resposta !== "s" && resposta !== "S") {
        continuar = false;
      }
    }
  }

  // Resumo final, depois que o laço terminou
  let resumo = "RESUMO FINAL\n\n" +
               "Cadastros realizados: " + totalCadastros + "\n" +
               "Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n" +
               "Vinho com a safra mais antiga: " + nomeMaisAntigo +
               " (" + safraMaisAntiga + ")";

  console.log(resumo);
  alert(resumo);
}

iniciarSistema();