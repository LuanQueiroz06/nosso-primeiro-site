function irParaPagina2() {
    window.location.href = "galeria.html"; // Redireciona para a segunda página
}

function toggleNightMode() {
   document.body.classList.toggle("night-mode");
   
}
// Função para adicionar animação de fade-in e slide-up aos perfis
window.onload = function() {
const profiles = document.querySelectorAll('.profile');

profiles.forEach(profile => {
   // Inicializa as animações
   profile.classList.add('animate');
});
};