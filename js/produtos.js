import { produtos } from './lista_produtos.js'

// PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

// CARREGANDO CARDS
const listarProdutos = () => {
        return produtos
}
//CHAMANDO A FUNÇÃO listarProdutos
listarProdutos()

<<<<<<< HEAD
const lnkProdutos = () => {

        const todosProdutos = document.querySelector('#todos') 

        todosProdutos.forEach((elem, i) =>{
                todosProdutos.createElement
        })

}
=======
>>>>>>> 0914a6cd03e647dfbdfe2dcdfa26cf02e40b77f1
// MONTANDO OS MENUS SEÇÕES
const menuSecoes = () => {
        const mapSecoes = new Map()

        produtos.forEach((elem, i) => {
                mapSecoes.set(elem.id_secao, elem)
        })

        const secoesFiltradas = Array.from(mapSecoes.values())

        return secoesFiltradas
}

// FUNÇÃO PARA INSERIR OS MENUS DA LISTA
const carregaSecoes = () => {
        // PEGANDO O ELEMENTO ul menu-secoes DO DOM
        const ulMenuSecoes = document.querySelector('#menu-secoes')

        // LIMPANDO O ELEMENTO DO DOM]
        ulMenuSecoes.innerHTML = ''

        // CHAMANDO A FUNÇÃO menuSeções E PERCORRENDO O ARRAY DE SEÇÕES JA SELECIONADOS
        menuSecoes().forEach((elem, i) => {

                // CRIANDO O ELEMENTO li
                const liMenu = document.createElement('li')

                // CRIANDO ELEMENTO a  E SEUS ATRIBUTOS
                const aMenu = document.createElement('a')
                aMenu.setAttribute('href', '#')
                aMenu.setAttribute('class', 'lnk-secao')
                aMenu.innerHTML = elem.secao

                aMenu.addEventListener('click', () => {
                        montaCards(filtroProduto(elem.id_secao))
                })

                // ADICIONANDO O a(ELEMENTO FILHO) AO li
                liMenu.appendChild(aMenu)

                // ADICIONANDO O li(ELEMENTO FILHO) AO ul
                ulMenuSecoes.appendChild(liMenu)
        })
}
carregaSecoes()

// FUNÇÃO FILTRO PRODUTO
const filtroProduto = (idSecao) => {
        return produtos.filter(elem => elem.id_secao === idSecao)
}

// FUNÇÃO MONTAR CARDS
const montaCards = (objPtodutos) => {
        // LIMPANDO A SECION cards
        sectionCards.innerHTML = ''

        //PERCORRENDO O ARRAY DE PRODUTOS
        objPtodutos.forEach((elem, i) => {
                // CRIANDO O ELEMENTO div E DEFININDO O ATRIBUTO CARD
                const divCard = document.createElement('div')
                divCard.setAttribute('class', 'card')
                // CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS SRC E ALT- VALORES DO CAINHO DA IMAGEM E DESCRIÇÃO DELA
                const imgCard = document.createElement('img')
                imgCard.setAttribute('src', elem.caminho_imagem)
                imgCard.setAttribute('alt', elem.caminho_produto)
                // CRIANDO O ELEMENTO p E DEFININDO A DESCRIÇÃO DO PRODUTO
                const pCard = document.createElement('p')
                pCard.innerHTML = elem.descricao_produto
                //CRIANDO O ELEMENTO H2 E ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS
                //CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
                const h2Card = document.createElement('h2')
                h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

                //CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E DESCRIÇÃO
                //ADICIONAR
                const btnCard = document.createElement('button')
                btnCard.setAttribute('class', 'btn-add')
                btnCard.innerHTML = 'Adicionar'

                //ADICIONANDO OS ELEMENTOS FILHOS AOS divCard
                divCard.appendChild(imgCard)
                divCard.appendChild(pCard)
                divCard.appendChild(h2Card)
                divCard.appendChild(btnCard)
                //ADICIONANDO O divCard A SECTION CARDS
                sectionCards.appendChild(divCard)


        })
        const lnkTodos = document.querySelector('.lnk-todos')

        lnkTodos.addEventListener('click', () => {
                montaCards(produtos)
        })
}
montaCards(produtos)
