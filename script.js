async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCEP.json();
    if(consultaCEPConvertida.erro) {
        mensagemErro.innerHTML = `<p class="erro">O CEP digitado não existe!</p>`
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');
    var bairro = document.getElementById('bairro')

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    bairro.value = consultaCEPConvertida.bairro;

    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
} catch(erro) {
    mensagemErro.innerHTML = `<p class="erro">Formato de CEP inválido. Tente novamente! Ex: 01001000</p>`
    console.log(erro)
}
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", ()=> buscaEndereco(cep.value))