function openCard() {
    document.querySelector(".message").style.display = "block";
    document.querySelector(".heart").style.display = "none";

    // Animación de corazones y flores
    const flowersContainer = document.querySelector(".flowers");
    const symbols = ["🌸", "💖", "🌷", "💗", "🌹"];
    
    symbols.forEach((symbol, index) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.textContent = symbol;
            flowersContainer.appendChild(span);
        }, index * 500);
    });
}