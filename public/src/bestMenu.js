import {bestMenu} from './util/parser.js';

class MakeBestMenu {
    constructor(data, selector) {
        this.data = data;
        this.selector = selector;
    }
    init() {
        bestMenu(this.data).forEach(e => this.creatBestMenu(e));
    }
    creatBestMenu(e) {
        let cost = this.numToCash(e.cost);
        this.selector.innerHTML += `
        <ul class="best-menu__bundle">
        <img src="${e.imgurl}" alt="${e.name}" class="best-menu__img" />
        <li class="menu-name">${e.name}(${e.length}${e.type})</li>
        <li class="menu-cost">${cost}원</li>
        </ul>`;
    }
    numToCash(num) {
        return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
    } 


}

export {MakeBestMenu}