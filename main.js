// Localiza o campo onde a senha será exibida
const campoSenha = document.querySelector("#campo-senha");
// Localiza o número que mostra o tamanho da senha
const numeroSenha = document.querySelector("#numero-senha");

// NOVO: Localiza o campo de força da senha
const nivelForca = document.querySelector(".nivel-forca");
const porcentagemForca = document.querySelector(".porcentagem-forca");

// NOVO: Localiza as caixas de seleção do HTML
const chkMaiusculas = document.querySelector("#chk-maiusculas");
const chkMinusculas = document.querySelector("#chk-minusculas");
const chkNumeros = document.querySelector("#chk-numeros");
const chkSimbolos = document.querySelector("#chk-simbolos");

// Suas listas de caracteres originais
const LetrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LetrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const Numeros = "0123456789";
const Simbolos = "#+-?!@%*&$";

// Tamanho inicial da senha
let tamanhoSenha = 8;

// Gera a primeira senha quando a página abrir
geraSenha();

// NOVO: Função que mede a força da senha
function medirForcaSenha(senha) {
  let forca = 0;

  if (senha.length >= 8) forca += 25;
  if (/[A-Z]/.test(senha)) forca += 25;
  if (/[0-9]/.test(senha)) forca += 25;
  if (/[^A-Za-z0-9]/.test(senha)) forca += 25;

  // Atualiza a barra e porcentagem
  if (nivelForca && porcentagemForca) {
    nivelForca.style.width = forca + "%";
    porcentagemForca.textContent = forca + "%";

    if (forca <= 25) {
      nivelForca.style.backgroundColor = "#ef4444";
    } else if (forca <= 50) {
      nivelForca.style.backgroundColor = "#facc15";
    } else if (forca <= 75) {
      nivelForca.style.backgroundColor = "#22c55e";
    } else {
      nivelForca.style.backgroundColor = "#16a34a";
    }
  }
}


// Função responsável por gerar a senha
function geraSenha() {
  // NOVO: Começa com a lista de caracteres vazia para construir com base nas marcações
  let caracteresPermitidos = "";
 
  // NOVO: Verifica quais caixas estão marcadas e adiciona os caracteres correspondentes
  if (chkMaiusculas.checked) caracteresPermitidos += LetrasMaiusculas;
  if (chkMinusculas.checked) caracteresPermitidos += LetrasMinusculas;
  if (chkNumeros.checked) caracteresPermitidos += Numeros;
  if (chkSimbolos.checked) caracteresPermitidos += Simbolos;

  // NOVO: Se nenhuma caixa estiver marcada, exibe um aviso e não gera a senha
  if (caracteresPermitidos === "") {
    campoSenha.value = "Selecione uma opção!";
    return;
  }

  let senha = "";
 
  // Repete o processo conforme o tamanho escolhido
  for (let i = 0; i < tamanhoSenha; i++) {
    let numeroAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
    senha = senha + caracteresPermitidos[numeroAleatorio];
  }
 
  // Exibe a senha na tela
  campoSenha.value = senha;

  // NOVO: Mede a força da senha gerada
  medirForcaSenha(senha);
}


// Diminui o tamanho da senha
function diminuiTamanho() {
  if (tamanhoSenha > 1) {
    tamanhoSenha--;
  }
  numeroSenha.textContent = tamanhoSenha;
  geraSenha();
}


// Aumenta o tamanho da senha
function aumentaTamanho() {
  if (tamanhoSenha < 20) {
    tamanhoSenha++;
  }
  numeroSenha.textContent = tamanhoSenha;
  geraSenha();
}