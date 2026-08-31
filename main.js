// Localiza o campo onde a senha será exibida
const campoSenha =
   document.querySelector("#campo-senha");


// Localiza o número que mostra o tamanho da senha
const numeroSenha =
   document.querySelector("#numero-senha");


// Tamanho inicial da senha
let tamanhoSenha = 8;


// Gera a primeira senha quando a página abrir
geraSenha();


// Função responsável por gerar a senha
function geraSenha() {


   // Começamos com uma senha vazia
   let senha = "";


   // Repete o processo conforme o tamanho escolhido
   for (let i = 0; i < tamanhoSenha; i++) {


       // Gera um número aleatório
       let numeroAleatorio =
           Math.random() * letrasMaiusculas.length;


       // Remove a parte decimal
       numeroAleatorio =
           Math.floor(numeroAleatorio);


   // Escolhe uma letra e adiciona à senha
   senha =
       senha +
       letrasMaiusculas[numeroAleatorio];
}


// Exibe a senha no campo
campoSenha.value = senha;
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


//constante "checkbox"
const checkboxes =
   document.querySelectorAll ("checkbox")
   checkboxes[0].checked = true ;


//constante letras maiúsculas
const letrasMaiusculas =
   "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//constante letras minusculas
const letrasMinusculas =
   "abcdefghijklmnopqrstuvwxyz";


//constante simbolos
const simbolos =
   "!?$@#%&*-+";

