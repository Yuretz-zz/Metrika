document.fonts.ready.then (() => {


    let sumHeaderElements;
    let workspace = document.querySelector('.workspace');
    let header = document.querySelector('header');
    let headerBurger = document.querySelector('header .burger');

    function calcHeaderWidth() {
        let container = document.querySelector('.container');
        let paddingLeft = window.getComputedStyle(container).getPropertyValue("padding-left");
        let paddingRight = window.getComputedStyle(container).getPropertyValue("padding-right");

        let logo = document.querySelector('header .logo').offsetWidth;
        let menu = document.querySelector('header .menu').offsetWidth;
        let phone = document.querySelector('header .phone').offsetWidth;
        
        sumHeaderElements =
        document.querySelector('header .logo').offsetWidth +
        document.querySelector('header .menu').offsetWidth +
        document.querySelector('header .phone').offsetWidth +
        parseInt(paddingLeft) + parseInt(paddingRight);
        // console.log(paddingLeft, logo, menu, phone, sumHeaderElements, paddingRight);
        // console.log(document.querySelector('nav').offsetWidth)
    }

    function headerMode() {
        if (sumHeaderElements >= workspace.clientWidth) {
            header.classList.add('mobile');
        } else {
            header.classList.remove('mobile');
            calcHeaderWidth();
        };
    }

    // Функция. Меню мобильное (открыть/закрыть)
    function navMobileView() {
        header.classList.toggle('active');
    }

    // Функция. Меню мобильное (закрыть)
    function navMobileOff() {
        header.classList.remove('active');
    }

    // Старт
    calcHeaderWidth();
    headerMode();
    header.style.visibility = 'visible'; // отображаем header после всех замеров
    window.addEventListener('resize', headerMode);
    headerBurger.addEventListener('click', navMobileView);


});