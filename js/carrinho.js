
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

// FUNÇÃO REMOVER ITEM DO ARRAY
const removeItem = (pos) =>{
  itensCarrinho.splice(pos, 1)

  sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))
}

export { addItem, listItens, removeItem }