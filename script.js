const totalPages = document.querySelectorAll('.slide-page').length;

let currentPage = 0;

function updateSlide() {

    document.querySelector('.slide-review').style.transform =
        `translateX(-${currentPage * 100}%)`;

}

function goNext() {

    currentPage++;

    if(currentPage >= totalPages) {
        currentPage = 0;
    }

    updateSlide();

}

function goPrev() {

    currentPage--;

    if(currentPage < 0) {
        currentPage = totalPages - 1;
    }

    updateSlide();

}