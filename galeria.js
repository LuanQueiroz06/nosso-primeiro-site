let currentIndex = 0;

    function moveSlide(direction) {
      const track = document.querySelector('.carousel-track');
      const cards = document.querySelectorAll('.card');
      const totalCards = cards.length;

      currentIndex = (currentIndex + direction + totalCards) % totalCards;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function toggleGallery(galleryId) {
      const allGalleries = document.querySelectorAll('.gallery-container');
      allGalleries.forEach(gallery => gallery.style.display = 'none');
      const gallery = document.getElementById(galleryId);
      gallery.style.display = 'block';
    }

    function goBackToCard() {
      const allGalleries = document.querySelectorAll('.gallery-container');
      allGalleries.forEach(gallery => gallery.style.display = 'none');
    }

    function voltarParaPagina1() {
      window.location.href = "index.html"; 
    }

    function irParaPagina3() {
         window.location.href = "cadastro.html"; // Redireciona para a segunda página
   }