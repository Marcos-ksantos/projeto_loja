
const divCep = document.querySelector("#div-cep");
const inputCep = document.querySelector("#cep");

// CAPTURAND O EVENTO change
inputCep.addEventListener("change", (evt) => {

    const numCep = evt.target.value.replace(/\D/g, "")

    if (numCep.lenght !== 8) {
        alert("Cep inválido")
        return
    }
    //CHAMA A FUNÇÃO consultaCEP
    consultaCep(numCep)

})
//FUNÇÃO CONSULTA CEP VIACEP
const consultaCep = async (cep) => {

    //TENTA CONECTAR A API
    try {

        //FAZ A COMUNICAÇÃO COM A API DO VIA CEP POR MEIO DA FUNÇÃO fetch
        //AWAIT - AGUARDA ATÉ OBTER UM PROMISE
        const resposta = await fetch(`viacep.com.br/ws/${cep}/json/`)

        //SE O STATUS DA RESPOSTA NÃO FOR OK. DISPARA UMA EXCEÇÃO
        if (!resposta.ok) {
            throw new Error("ERRO NA REQUISIÇÃO")
        }

        //OBTEM OS DADOS DA API
        const dadosEndereco = await resposta.json()

        //VERIFICA SE O DADOS SÃO VÁLIDOS
        if (dadosEndereco.erro) {
            alert('CEP NÃO LOCALIZADO')
        }

        //CHAMA A FUNÇÃO carregaInput
        carregaInput(dadosEndereco)

        // CASO HAJA QUALQUER ERRO É DISPARADA UM EXCEÇÃO
    } catch (erro) {
        console.log("ERRO", erro.message)
    }
}

const carregaInput = (objEndereco) =>{
    
}