//Slide reviews

const totalPages = document.querySelectorAll('.slide-page').length;
let currentPage = 0;
function updateSlide() {
    document.querySelector('.slide-review').style.transform =
        `translateX(-${currentPage * 100}%)`;
}

function goNext() {
    currentPage++;
    if (currentPage >= totalPages) {
        currentPage = 0;
    }
    updateSlide();
}

function goPrev() {
    currentPage--;
    if (currentPage < 0) {
        currentPage = totalPages - 1;
    }
    updateSlide();
}

//Pesquisa
const inputPesquisa = document.getElementById("pesquisa");
const selectCategoria = document.getElementById("categoria");
const cards = document.querySelectorAll(".card");

function filtrarProdutos() {

    const texto = inputPesquisa.value.toLowerCase().trim();
    const categoria = selectCategoria.value;

    cards.forEach((card) => {

        const nomeProduto = card
            .querySelector("h4")
            .textContent
            .toLowerCase();

        const categoriaProduto = card.dataset.categoria;

        const correspondeNome = nomeProduto.includes(texto);

        const correspondeCategoria =
            !categoria || categoria === categoriaProduto;

        if (correspondeNome && correspondeCategoria) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}

inputPesquisa.addEventListener("input", filtrarProdutos);
selectCategoria.addEventListener("change", filtrarProdutos);