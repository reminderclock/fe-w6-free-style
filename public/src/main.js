
// import {displayBestMenu,displayShortSet} from './shortSet.js';
import {MakeBestMenu} from './bestMenu.js';
import {MakeShortSetMenu} from './shortSetMenu.js';
const bestMenuContainer = document.querySelector('.best-menu__container');
const shortSetContainer = document.querySelector('.sandwich-short__set__container');

const toogleBtn = document.querySelector('.menu__title__toggle');
const local = "http://localhost"
const port = 3000;
const menuPath = "/data/data.json";

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
})

// toogleBtn.addEventListener('click', () => {
//     shortSetContainer.classList.toggle('active')
//   });

