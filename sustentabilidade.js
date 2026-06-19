document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO MODAL (CARDS DE SOLUÇÃO) ---
    const modal = document.getElementById("meuModal");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalTexto = document.getElementById("modalTexto");
    const botaoFechar = document.querySelector(".fechar");
    const cards = document.querySelectorAll(".card-solucao");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const titulo = this.querySelector("h3").innerText;
            const info = this.getAttribute("data-info");
            
            modalTitulo.innerText = titulo;
            modalTexto.innerText = info;
            modal.style.display = "block";
        });
    });

    botaoFechar.addEventListener("click", () => modal.style.display = "none");
    
    window.addEventListener("click", (evento) => {
        if (evento.target == modal) modal.style.display = "none";
    });


    // --- LÓGICA DO FAQ (ACCORDION / SANFONA) ---
    const perguntasFaq = document.querySelectorAll(".faq-pergunta");

    perguntasFaq.forEach(pergunta => {
        pergunta.addEventListener("click", function() {
            // Alterna a classe ativa para girar o botão "+" e mudar sua cor
            this.classList.toggle("ativa");
            
            // Pega o elemento irmão que guarda a resposta
            const resposta = this.nextElementSibling;
            
            // Se estiver aberto, fecha. Se estiver fechado, calcula a altura real e abre.
            if (resposta.style.maxHeight) {
                resposta.style.maxHeight = null;
            } else {
                resposta.style.maxHeight = resposta.scrollHeight + "px";
            }
        });
    });
});
