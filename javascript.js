document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio carregado com sucesso!");

    // Atualiza o ano no rodapé automaticamente
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Opcional: Adicionar efeito de smooth scroll para links internos se houverem no futuro
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});