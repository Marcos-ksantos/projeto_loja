
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
  const listaItens =
      JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];

  return listaItens;
}

// TENTANDO CRIAR A FUNÇAO DE SOMA TOTAL
const somaTotal = () => {

  let soma = 0;

  listItens().forEach((elem) => {
      soma += elem.valor_unitario * elem.quantidade;
  });
  sessionStorage.setItem('carrinhoSessao', JSON.stringify
  (itensCarrinho))
  
  return soma;
};
const valorPagar = () =>{
  let frete =`R$${(10).toFixed(2).replace('.', ',')}`;
  let pagar = 0;
   
  listItens().forEach((elem) => {
    pagar += soma + frete;
});
sessionStorage.setItem('carrinhoSessao', JSON.stringify
(itensCarrinho))

return pagar
}

const alterarQuantidade = (pos, quantidade) => {

itensCarrinho[pos].quantidade = quantidade;

sessionStorage.setItem(
    'carrinhoSessao',
    JSON.stringify(itensCarrinho)
);

}
  

// FUNÇÃO REMOVER ITEM DO ARRAY
const removeItem = (pos) => {
  itensCarrinho.splice(pos, 1)

  sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))

  }


 
export { addItem, listItens, removeItem , somaTotal, alterarQuantidade , valorPagar}