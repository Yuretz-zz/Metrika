
let info = document.createElement('span');
info.style.cssText = `
    position: absolute;
    left: 0;
    top: 0;
    font-size: 10px;
    line-height: 1;
    z-index: 1;
`;

function upgradeWindowSize() {
    info.innerHTML = document.querySelector('.workspace').clientWidth;
}

upgradeWindowSize();
document.querySelector('.wrapper').prepend(info);

window.addEventListener('resize', upgradeWindowSize);

