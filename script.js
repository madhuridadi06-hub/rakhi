function openSurprise() {
    const openingScreen = document.getElementById("openingScreen");
    const mainContent = document.getElementById("mainContent");
    openingScreen.classList.add("hide");
    setTimeout(() => {
        openingScreen.style.display = "none";
        mainContent.classList.add("show");
        createConfetti();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1000);
}
function showSurprise() {
    const message = document.getElementById("hiddenMessage");
    message.classList.add("show");
    createConfetti();
    setTimeout(() => {
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 200);
}
function createConfetti() {
    const container = document.getElementById("confetti");
    const symbols = ["🌸", "❤️", "✨", "💗", "🌺", "🪔"];
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");
        piece.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.fontSize =
            Math.random() * 15 + 10 + "px";
        piece.style.animationDuration =
            Math.random() * 2 + 2 + "s";
        piece.style.animationDelay =
            Math.random() * 0.8 + "s";
        container.appendChild(piece);
        setTimeout(() => {
            piece.remove();
        }, 4000);
    }
}