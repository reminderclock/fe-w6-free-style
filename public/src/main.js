const bestMenuContainer = document.querySelector('.best-menu__container');
const menuContainer = document.querySelector('.menu__container');
const toogleBtn = document.querySelector('.menu__title__toggle');

// nth-child(6)
const local = "http://localhost"
const port = 3000;
const menuPath = "/data/data.json";
const bestNum = [6,1,19,9,18,11];

function loadMenuData() {
    return fetch(`${local}:${port}${menuPath}`)
    .then(response => response.json())
    .then(json => json.sand__short__set);
}
function displayBestMenu(menu) {
    const bestMenu = menu.filter(e => bestNum.includes(e.menuNum));
    console.log(bestMenu);
    let a = bestMenu.map(e => creatBestMenu(e));
}
function numToCash(num) {
    return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
}
function creatBestMenu(e) {
    let cost = numToCash(e.cost);
    bestMenuContainer.innerHTML += `
    <ul class="best-menu__bundle">
    <img src="${e.imgurl}" alt="${e.name}" class="best-menu__img" />
    <li class="menu-name">${e.name}(${e.length})</li>
    <li class="menu-cost">${cost}원</li>
    </ul>`;
}

function creatMenu(e) {
    let cost = numToCash(e.cost);
    menuContainer.innerHTML += `
    <ul class="best-menu__bundle">
    <img src="${e.imgurl}" alt="${e.name}" class="best-menu__img" />
    <li class="menu-name">${e.name}(${e.length})</li>
    <li class="menu-cost">${cost}원</li>
    </ul>`;
}
function displayShortSet(menu) {
    let a = menu.map(e => creatMenu(e));
}
loadMenuData()
.then((menu) => {
    displayBestMenu(menu);
    displayShortSet(menu);
})

toogleBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active')
  });

