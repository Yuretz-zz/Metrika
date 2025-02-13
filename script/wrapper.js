function ajustViewportHeight() {
    let vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

ajustViewportHeight();
window.addEventListener('resize', ajustViewportHeight);