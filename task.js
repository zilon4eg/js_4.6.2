//выбираем нужные элементы
const menu = document.querySelectorAll('.menu__link');

// console.log(menu[1]);
// menu[1].className('menu menu_sub menu_active');

// const menuParant = menu[1].closest('.menu__item');
// const menuSub = 
// console.log(`nfnf ${menuSub}`);
const menuSub = document.querySelectorAll('.menu_main li');
console.log(menuSub);


// var a = document.querySelectorAll('.link');
    
//перебираем все найденные элементы и вешаем на них события
menu.forEach(function(el) {
    //вешаем событие
    // console.log(el);
    el.onclick = function() {
        //производим действия
        // console.log(menu[el]);
        el.className('menu menu_sub menu_active');
        //предотвращаем переход по ссылке href
        return false;
    }
});