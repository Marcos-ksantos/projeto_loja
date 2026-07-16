
let itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
// const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO ITEM 
const item = (objProduto) => {

  const item = {
    id_produto: objProduto.id_produto,
    descricao_produto: objProduto.descricao_produto,
    valor_unitario: objProduto.valor_unitario,
    unidade: objProduto.unidade,
    caminho_imagem: objProduto.caminho_imagem,
    quantidade: 1
  }

  return item

}

// FUNÇÃO PARA ADICIONAR CLICK
const addItem = (objItem) => {
  const posicao = itensCarrinho.findIndex(elem => elem.id_produto === objItem.id_produto)

  if (posicao === -1) {
    itensCarrinho.push(item(objItem))
  } else {
    itensCarrinho[posicao].quantidade++
  }


  sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))

}

const listItens = () => {
  const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

  return listaItens
}

// FUNÇÃO REMOVER ITEM DO ARRAY
const removeItem = (pos) => {
  itensCarrinho.splice(pos, 1)

  sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))
}

export { addItem, listItens, removeItem }