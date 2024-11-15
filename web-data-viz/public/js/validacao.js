var nomeValido = false;
var emailValido = false;
var senhaValido = 0;

function validarNome() {
        var nome = inpNome.value;

        if (nome == '') {
                spanErro.innerHTML = '';
                inpNome.style.border = 'solid #30B945 2px';
        } else if (nome.length < 2) {
                spanErro.innerHTML =
                        "O nome deve conter mais de dois caracteres.";
                inpNome.style.border = 'solid red 2px';
        } else {
                nomeValido = true;
                spanErro.innerHTML = '';
                inpNome.style.border = 'solid #30B945 2px';
        }
}

function validarEmail() {
        var email = inpEmail.value;

        if (email == '') {
                spanErro.innerHTML = '';
                inpEmail.style.border = 'solid #30B945 2px';
        } else if (email.includes('@') && (email.endsWith('.com') || email.endsWith('.br'))) {
                emailValido = true;
                spanErro.innerHTML = '';
                inpEmail.style.border = 'solid #30B945 2px';
        } else {
                spanErro.innerHTML =
                        "Deve conter @ e terminar com .com ou .br.";
                inpEmail.style.border = 'solid red 2px';
        }
}

function validarSenha() {
        var senha = inpSenha.value;
        var confirma = inpConfirm.value;

        senhaValido = 0;

        var senhaUpper = senha.toUpperCase();
        var senhaLower = senha.toLowerCase();

        var senhaEspecial = senha.includes('!') ||
                senha.includes('@') ||
                senha.includes('#') ||
                senha.includes('$') ||
                senha.includes('%') ||
                senha.includes('&') ||
                senha.includes('*') ||
                senha.includes('+') ||
                senha.includes('=');

        var senhaNumero = senha.includes('0') ||
                senha.includes('1') ||
                senha.includes('2') ||
                senha.includes('3') ||
                senha.includes('4') ||
                senha.includes('5') ||
                senha.includes('6') ||
                senha.includes('7') ||
                senha.includes('8') ||
                senha.includes('9');

        if (senha == '') {
                erroSenha.style.display = 'none';
                inpSenha.style.border = 'solid #30B945 2px';
        } else if (senha != '') {
                erroSenha.style.display = 'flex';
                inpSenha.style.border = 'solid red 2px';

                if (senha.length >= 8) {
                        qtdCaractere.style.color = '#30B945';
                        senhaValido++;
                } else {
                        qtdCaractere.style.color = 'red';
                }
                if (senha != senhaLower) {
                        maiuscula.style.color = '#30B945';
                        senhaValido++;
                } else {
                        maiuscula.style.color = 'red';
                }
                if (senha != senhaUpper) {
                        minuscula.style.color = '#30B945';
                        senhaValido++;
                } else {
                        minuscula.style.color = 'red';
                }
                if (senhaEspecial) {
                        caractereEspecial.style.color = '#30B945';
                        senhaValido++;
                } else {
                        caractereEspecial.style.color = 'red';
                }
                if (senhaNumero) {
                        numero.style.color = '#30B945';
                        senhaValido++;
                } else {
                        numero.style.color = 'red';
                }

                if (senhaValido == 5) {
                        senhaValido = true;
                        inpSenha.style.border = 'solid #30B945 2px';
                } else {
                        senhaValido = false;
                }
        }
        else if (senha != confirma) {
                spanErro.innerHTML += 'As senhas devem ser idênticas.';
                inpSenha.style.border = 'solid red 2px';
                inpConfirm.style.border = 'solid red 2px';
        } else {
                spanErro.innerHTML = ''
                inpEmail.style.border = 'solid #30B945 2px';
                senhaValido = true;
        }
        if (confirma != ''){
                validarConfirm();   
        }
}

function validarConfirm(){
        var senha = inpSenha.value;
        var confirma = inpConfirm.value;

        if (confirma == ''){
                inpConfirm.style.border = 'solid #30B945 2px';
        } else if (senha != confirma){
                senhasIdenticas.style.display = 'block';
                inpConfirm.style.border = 'solid red 2px';
                senhaValido = false;
        } else {
                senhasIdenticas.style.display = 'none';
                inpConfirm.style.border = 'solid #30B945 2px';
                senhaValido++;
                if (senhaValido){
                        senhaValido = true;
                }
        }
}
