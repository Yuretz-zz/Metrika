    // Анимация меню. Появление элементов через интервал времени
    document.querySelectorAll('header .startPosition').forEach((item, i) => {
        setTimeout(() => item.classList.remove('startPosition'), i * 200);
    });

    // Анимация submenu (пока для одного)
    // Каждому пункту присваиваем CSS-переменную от 0 до ...
    document.querySelectorAll('header .submenu-link').forEach((item, i) => {
        item.style.cssText = `--i: ${i}`
    });