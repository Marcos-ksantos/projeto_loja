import { listItens, removeItem, somaTotal, alterarQuantidade, valorFrete , valorPagar } from "./carrinho.js";

// MONTAR TELA CARRINHO
const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho');

    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section');
        sectionItem.setAttribute('class', 'item');

        const divImgItem = document.createElement('div');
        divImgItem.setAttribute('class', 'img-item');

        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', elem.caminho_imagem);
        imgItem.setAttribute('alt', elem.descricao_produto);

        divImgItem.appendChild(imgItem);

        const divDescricaoItem = document.createElement('div');
        divDescricaoItem.setAttribute('class', 'descricao-item');

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'descricao-item')
        divDescricao.innerHTML = elem.descricao_produto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        pItem.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        const divQuant = document.createElement('div')
        divQuant.setAttribute('class', 'input-quantidade')

        const inputQuantidade = document.createElement('input')
        inputQuantidade.addEventListener('input', () => {

            alterarQuantidade(i, Number(inputQuantidade.value));

            pCalc.innerHTML =
                `R$ ${(elem.valor_unitario * Number(inputQuantidade.value))
                    .toFixed(2)
                    .replace('.', ',')}`;

            divTotal.innerHTML =
                `R$ ${somaTotal().toFixed(2).replace('.', ',')}`;
            
        });

        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', elem.quantidade)

        divQuant.appendChild(inputQuantidade)


        const pCalc = document.createElement('p')
        pCalc.innerHTML = `R$ ${(elem.valor_unitario * elem.quantidade).toFixed(2).replace('.', ',')}`

        //valores
        const divTotal = document.querySelector('#valor-total');
        divTotal.innerHTML =
            `R$ ${somaTotal().toFixed(2).replace('.', ',')}`;

            const divFrete = document.querySelector('#valor-frete');
        divFrete.innerHTML =
            `R$ ${valorFrete().toFixed(2).replace('.', ',')}`;

        const divPagar = document.querySelector('#valor-final');
        divPagar.innerHTML =
            `R$ ${valorPagar().toFixed(2).replace('.', ',')}`;

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/lixeira.jpg')
        imgRemover.setAttribute('alt', 'remover')
        imgRemover.setAttribute('class', 'img-remover')

        imgRemover.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja remover ${elem.descricao_produto} do carrinho?`)) {
                removeItemTela(i)
            }
        })

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCalc)
        divValores.appendChild(imgRemover)

        divDescricaoItem.appendChild(divDescricao)
        divDescricaoItem.appendChild(divValores)

        sectionItem.appendChild(divImgItem)
        sectionItem.appendChild(divDescricaoItem)

        sectionItensCarrinho.appendChild(sectionItem
        )
    });
};

montaTelaCarrinho()

const removeItemTela = (pos) => {
    removeItem(pos)

    montaTelaCarrinho()
}