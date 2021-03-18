
import {MakeBestMenu} from './bestMenu.js';
import {MakeShortSetMenu} from './shortSetMenu.js';
import {local, port, menuPath} from './util/data.js';
import {MakeselectOption} from './optionSelect.js';
const bestMenuContainer = document.querySelector('.best-menu__container');
const shortSetContainer = document.querySelector('.sandwich-short__set__container');

const toogleBtn = document.querySelector('.menu__title__toggle');
const mainView = document.querySelector('.main-view');
const optionView = document.querySelector('.option-view');

function loadMenuData() {
    return fetch(`${local}:${port}${menuPath}`)
    .then(response => response.json())
    .then(json => json.sand__short__set);
}

loadMenuData()
.then((menu) => {
    const createBestMenu = new MakeBestMenu(menu, bestMenuContainer);
    createBestMenu.init();

    const createShortSetMenu = new MakeShortSetMenu(menu, shortSetContainer, toogleBtn)
    createShortSetMenu.init();

    shortSetContainer.addEventListener('click', ({target}) => {
        console.log(target.closest('.best-menu__bundle').children[1].innerText);
        let menuTitle = target.closest('.best-menu__bundle').children[1].innerText;
        if(target.closest('.best-menu__bundle').className === 'best-menu__bundle') {
            let selectData = menu.filter(e => menuTitle.includes(e.name));
            
            mainView.classList.toggle('active');
            console.log('sss')
            const createOption = new MakeselectOption(selectData, optionView);
            createOption.init();

        }
    })
    console.log(menu.map(e => e.name))
})



