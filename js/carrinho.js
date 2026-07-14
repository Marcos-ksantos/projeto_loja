
let itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
// const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

// FUNÇÃO PARA ADICIONAR CLICK
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))

}

const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

  return listaItens
}


export { addItem, listItens }