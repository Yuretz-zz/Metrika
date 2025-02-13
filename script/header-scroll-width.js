function headerSize() {
    let workspaceWidth = document.querySelector('.workspace').clientWidth;
    document.querySelector('header').style.width = `${workspaceWidth}px`;
}

headerSize();
window.addEventListener('resize', headerSize);