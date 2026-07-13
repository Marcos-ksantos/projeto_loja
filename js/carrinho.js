
const itensCarrinho = JSON.parse(localStorage.getItem('carrinhoSessao')) || []
// const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

// FUNÇÃO PARA ADICIONAR CLICK
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', itensCarrinho)
    listItens()

}

const listItens = () => {
    const listaItens = JSON.stringify(sessionStorage.getItem('carrinhoSessao'))

    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    itensCarrinho.forEach((elem, i) => {
        alert(`elemento ${i + 1} - ${elem.descricao_produto} - ${elem.valor_unitario}
         - ${elem.unidade}`)
    })
}

// MONTAR TELA CARRINHO
const montaTelaCarrinho = (objListaItens) => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho');

    objListaItens.forEach((elem, i) => {
        const sectionItem = document.createElement('section');
        sectionItem.setAttribute('class', 'item');

        const divImgItem = document.createElement('div');
        divImgItem.setAttribute('class', 'img-item');

        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', elem.caminho_imagem);
        imgItem.setAttribute('alt', elem.descricao_produto);

        imgItem.appendChild(imgItem);

        const divDescricaoItem = document.createElement('div');
        divDescricaoItem.setAttribute('class', 'descricao-item');
        divDescricaoItem.innerHTML = elme.descricao_produto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        pItem.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        const divQuant = document.createElement('div')
        divQuant.setAttribute('class', 'input-quantidade')

        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', 1)

        divQuant.appendChild(inputQuantidade)

const pCalc = document.createElement('p')
pCalc.innerHTML = `R$ ${elem.valor_unitario * 2}`

const imgRemover = document.createElement('img')
imgRemover.setAttribute('src', '../imagens/icones/remover.png')
imgRemover.setAttribute('alt', 'remover')

divValores.appendChild(pItem)
divValores.appendChild(divQuant)
divValores.appendChild(pCalc)
divValores.appendChild(imgRemover)
    });
};
export { addItem }