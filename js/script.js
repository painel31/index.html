document.addEventListener("DOMContentLoaded", function () {
    // Carrega o cabeçalho
    fetch('../components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o cabeçalho');
            }
            return response.text();
        })
        .then(data => {
            // Insere o cabeçalho no div com id "header"
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o cabeçalho:', error);
        });

    // Configuração do slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlides() {
        // Oculta todos os slides
        slides.forEach(slide => slide.style.display = "none");

        // Avança para o próximo slide
        slideIndex++;
        if (slideIndex > totalSlides) {
            slideIndex = 1;
        }

        // Exibe o slide atual
        slides[slideIndex - 1].style.display = "block";

        // Define o tempo para mudar o slide (4 segundos)
        setTimeout(showSlides, 4000);
    }

    // Inicia o slideshow
    showSlides();
});