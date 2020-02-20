let inputCPF = document.getElementById('cpf');
let inputCEP = document.getElementById('cepUsuario');
let inputSenha = document.getElementById('senhaUsuario');
let inputSenhaOk = document.getElementById('confirmarSenhaUsuario');
let inputCartao = document.getElementById('cartaoUsuario');
let inputCPFT = document.getElementById('cpfdoTitular')
let config = {
    method: "GET"
}

function buscarCep(cep){
    alert("Vou buscar o cep " +cep)
}

//validação CPF
inputCPF.addEventListener("keyup", (event) => {
    if(isNaN(inputCPF.value)){
            inputCPF.value = inputCPF.value.substring(0,(inputCPF.value.length -1));
            //console.log(input);
    } if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0,(11));
    }

})
//validação CEP
inputCEP.addEventListener("keyup", (event) => {
    if(isNaN(inputCEP.value)){
        inputCEP.value = inputCEP.value.substring(0,(inputCEP.value.length -1));
    } if(inputCEP.value.length >= 8){
        inputCEP.value = inputCEP.value.substring(0,(8));
        buscarCep(inputCEP.value);
    }
})
//validação da senha
inputSenhaOk.addEventListener("keyup", (e) => {
    if(inputSenhaOk.value != inputSenha.value){
        inputSenhaOk.setAttribute("class", "form-control is-invalid")
    }else{
        inputSenhaOk.setAttribute("class", "form-control is-valid")
    }
})

inputCPFT.addEventListener("keyup", (event) => {
    if(isNaN(inputCPFT.value)){
            inputCPFT.value = inputCPFT.value.substring(0,(inputCPFT.value.length -1));
            //console.log(input);
    } if(inputCPFT.value.length >= 11){
        inputCPFT.value = inputCPFT.value.substring(0,(11));
    }

})

//validação numero do Cartão
inputCartao.addEventListener("keyup", (event) => {
if(isNaN(inputCartao.value)){
    inputCartao.value = inputCartao.value.substring(0,(inputCartao.value.length -1));
} if(inputCartao.value.length >= 16){
    inputCartao.value - inputCartao.value.substring(0,(16));
}
})