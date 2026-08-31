// Campo da senha
const campoSenha = document.querySelector("#campo-senha");

// Número do tamanho
const numeroSenha = document.querySelector("#numero-senha");


// Checkboxes
const chkMaiusculas = document.querySelector("#chk-maiusculas");
const chkMinusculas = document.querySelector("#chk-minusculas");
const chkNumeros = document.querySelector("#chk-numeros");
const chkSimbolos = document.querySelector("#chk-simbolos");


// Barra de força
const nivelForca = document.querySelector(".nivel-forca");
const porcentagemForca = document.querySelector(".porcentagem-forca");


// Caracteres disponíveis

const LetrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const LetrasMinusculas = "abcdefghijklmnopqrstuvwxyz";

const Numeros = "0123456789";

const Simbolos = "#+-?!@%*&$";


// Tamanho inicial

let tamanhoSenha = 8;


// Gera senha ao abrir

geraSenha();



// Função para medir força

function medirForcaSenha(senha) {

    let forca = 0;


    if (senha.length >= 8) {
        forca += 25;
    }


    if (/[A-Z]/.test(senha)) {
        forca += 25;
    }


    if (/[0-9]/.test(senha)) {
        forca += 25;
    }


    if (/[^A-Za-z0-9]/.test(senha)) {
        forca += 25;
    }



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



// Gerar senha

function geraSenha() {


    let caracteresPermitidos = "";


    if (chkMaiusculas.checked) {
        caracteresPermitidos += LetrasMaiusculas;
    }


    if (chkMinusculas.checked) {
        caracteresPermitidos += LetrasMinusculas;
    }


    if (chkNumeros.checked) {
        caracteresPermitidos += Numeros;
    }


    if (chkSimbolos.checked) {
        caracteresPermitidos += Simbolos;
    }



    if (caracteresPermitidos === "") {

        campoSenha.value = "Selecione opções";

        nivelForca.style.width = "0%";

        porcentagemForca.textContent = "0%";

        return;

    }



    let senha = "";



    for (let i = 0; i < tamanhoSenha; i++) {


        let aleatorio = Math.floor(
            Math.random() * caracteresPermitidos.length
        );


        senha += caracteresPermitidos[aleatorio];

    }



    campoSenha.value = senha;



    // Mede a segurança

    medirForcaSenha(senha);

}



// Diminuir tamanho

function diminuiTamanho() {


    if (tamanhoSenha > 1) {

        tamanhoSenha--;

    }


    numeroSenha.textContent = tamanhoSenha;


    geraSenha();

}



// Aumentar tamanho

function aumentaTamanho() {


    if (tamanhoSenha < 20) {

        tamanhoSenha++;

    }


    numeroSenha.textContent = tamanhoSenha;


    geraSenha();

}
