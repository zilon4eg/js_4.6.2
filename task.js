//выбираем нужные элементы
const menu = document.querySelectorAll('.menu__link');
    
//перебираем все найденные элементы и вешаем на них события
menu.forEach(function(el) {
    //вешаем событие
    el.onclick = function() {

        //производим действия
        console.log(el);

        let menuParant = el.closest('.menu__item');
        let menuSub = menuParant.querySelector('.menu_sub');
        if (menuSub.className.includes('menu_active')) {
            menuSub.className = 'menu menu_sub';
        }
        else {
            menuSub.className = 'menu menu_sub menu_active';
        }

        let menuAllSub = document.querySelectorAll('.menu_sub');
        menuAllSub.forEach(function(elSub) {
            if (menuSub != elSub) {
                elSub.className = 'menu menu_sub';
            }
        });

        //предотвращаем переход по ссылке href
        return false;
    }
});