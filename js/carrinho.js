
const itensCarrinho = JSON.parse(localStorage.get('carrinhoSessao')) || []
// const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

// FUNÇÃO PARA ADICIONAR CLICK
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', itensCarrinho)
    listItens()

}

const listItens = () => {
    const listaItens = JSON.stringify(sessionStorage.get ('carrinhoSessao'))

    itensCarrinho.forEach((elem, i) => {
        console.log(`elemento ${i+1} - ${elem.descricao_produto} - ${elem.valor_unitario}
         - ${elem.unidade}`)
    })
}


export {addItem}