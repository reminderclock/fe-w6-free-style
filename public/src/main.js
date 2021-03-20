
import {MakeBestMenu} from './bestMenu.js';
import {MakeShortSetMenu} from './shortSetMenu.js';
import {local, port, menuPath, sandOption} from './util/data.js';
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

function loadOptionData() {
    return fetch(`${local}:${port}${sandOption}`)
    .then(response => response.json());
    // .then(json => json.sand__short__set);
}

loadMenuData()
.then((menu) => {
    const createBestMenu = new MakeBestMenu(menu, bestMenuContainer);
    createBestMenu.init();

    const createShortSetMenu = new MakeShortSetMenu(menu, shortSetContainer, toogleBtn)
    createShortSetMenu.init();

    shortSetContainer.addEventListener('click', ({target}) => {
        let menuTitle = target.closest('.best-menu__bundle').children[1].innerText;
        let splitTitle = menuTitle.split("(");
        splitTitle.pop();
        if(target.closest('.best-menu__bundle').className === 'best-menu__bundle') {
            let selectData = menu.filter(e => e.name === splitTitle.join(''));
            loadOptionData()
            .then((category)=> {
                mainView.classList.toggle('active');
                const createOption = new MakeselectOption(selectData, category, optionView);
                createOption.init();
            })
        }
    })
})





