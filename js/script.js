const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener("click", () => {

        const imagem = card.querySelector("img").src;
        const nome = card.querySelector("p").textContent;
        const preco = card.querySelector("h2").textContent;

        localStorage.setItem("imagemProduto", imagem);
        localStorage.setItem("nomeProduto", nome);
        localStorage.setItem("precoProduto", preco);

        window.location.href = "../paginas/carrinho.html";


    })
});
