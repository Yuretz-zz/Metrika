document.fonts.ready.then (() => {

    // Сумма элементов блока Header 
    let sumElements =
    document.querySelector('.header-logo').offsetWidth +
    document.querySelector('.nav-block1').offsetWidth +
    document.querySelector('.nav-block2').offsetWidth +
    40 + 40 + 40 + 40; // отступы (пока так)

    // Остальные переменные
    let wrapper = document.querySelector('.wrapper');
    let headerNav = document.querySelector('.header-nav');
    let headerBlock1Link = document.querySelectorAll('.nav-block1-link'); /* Коллекция*/
    let headerBurger = document.querySelector('.header-burger');

    // Функция. Переключение режима меню (десктоп/мобильный)
    function navMode() {
        // Включаем или выключаем режим 'mobile' в зависимости от ширины экрана
        headerNav.classList.toggle('mobile', wrapper.clientWidth <= sumElements);
        // Сбрасывает мобильное меню в начальное закрытое положение (если произошел выход из режима 'mobile')
        if (wrapper.clientWidth > sumElements) navMobileOff();
    }

    // Функция. Меню мобильное (открыть/закрыть)
    function navMobileView() {
        headerNav.classList.toggle('active');
        headerBurger.classList.toggle('close');
    }

    // Функция. Меню мобильное (закрыть)
    function navMobileOff() {
        headerNav.classList.remove('active');
        headerBurger.classList.remove('close');
    }

    // Старт
    navMode();
    window.addEventListener('resize', navMode);
    headerBurger.addEventListener('click', navMobileView);

    // Вешаем событие на каждый пункт меню
    headerBlock1Link.forEach((item) => {
        item.addEventListener('click', ()=> {
            // Если меню находится в мобильном режиме И есть подменю
            if (headerNav.classList.contains('mobile') && item.classList.contains('drop')) {
                // открываем или закрываем подменю
                item.classList.toggle('active');
            };
        });
    });

    // Анимация меню. Появление пунктов меню через интервал времени
    headerBlock1Link.forEach((item, i) => {
        setTimeout(() => item.classList.remove('startPosition'), i * 100);
    });



    // Анимация submenu (пока для одного)
    let headerSubLink = document.querySelectorAll('.nav-submenu-link');
    // Каждому пункту присваиваем CSS-переменную от 0 до ...
    headerSubLink.forEach((item, i) => {
        item.style.cssText = `--i: ${i}`
    })

});