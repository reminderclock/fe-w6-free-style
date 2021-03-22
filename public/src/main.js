
import {BestMenuMaker} from './bestMenu.js';
import {ShortSetMenuMaker} from './shortSetMenu.js';
import {local, port, menuPath, sandOption} from './util/data.js';
import {MenuOptionMaker} from './optionSelect.js';
const bestMenuContainer = document.querySelector('.best-menu__container');
const shortSetContainer = document.querySelector('.sandwich-short__set__container');

const toogleBtn = document.querySelector('.menu__title__toggle');
const mainView = document.querySelector('.main-view');
const optionView = document.querySelector('.option-view');

// const menuInfo = {
// }
// menuInfo.name = "비엠티15cm";
// // const option = {};
// menuInfo.option = ['a','b','c'];
// console.log(menuInfo);

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


function displayBestMenu(menu) {
    const bestMenuMaker = new BestMenuMaker(menu, bestMenuContainer);
    bestMenuMaker.init();
}
function displayShortSetMenu(menu) {
    const shortSetMenuMaker = new ShortSetMenuMaker(menu, shortSetContainer, toogleBtn)
    shortSetMenuMaker.init();
}
function displayOptionSelect(selectData, category) {
    mainView.classList.toggle('active');
    const menuOptionMaker = new MenuOptionMaker(selectData, category, optionView);
    menuOptionMaker.init();
}
function catchSelectData(menu) {
        shortSetContainer.addEventListener('click', ({target}) => {
        let menuTitle = target.closest('.best-menu__bundle').children[1].innerText;
        let splitTitle = menuTitle.split("(");
        splitTitle.pop();
        if(target.closest('.best-menu__bundle').className === 'best-menu__bundle') {
            let selectData = menu.filter(e => e.name === splitTitle.join(''));
            loadOptionData()
            .then((category)=> {
                displayOptionSelect(selectData,category);
            })
        }
    })
}

loadMenuData()
.then((menu) => {
    displayBestMenu(menu);
    displayShortSetMenu(menu);
    catchSelectData(menu);
})





