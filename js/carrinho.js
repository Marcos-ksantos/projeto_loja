const imagem = localStorage.getItem("imagemProduto");
const nome = localStorage.getItem("nomeProduto");
const preco = localStorage.getItem("precoProduto");


document.querySelector("#imagemProduto").src = imagem;
document.querySelector("#nomeProduto").textContent = nome;
document.querySelector("#precoProduto").textContent = preco;