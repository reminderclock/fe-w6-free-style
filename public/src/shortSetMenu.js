import {makeEachMenu} from './util/htmlTemplate.js';
export class ShortSetMenuMaker{
    constructor(data, selector, toogleBtn) {
        this.data = data;
        this.selector = selector;
        this.toogleBtn = toogleBtn;
    }
        init() {    
        this.toogleBtn.addEventListener('click', () => {
            this.selector.classList.toggle('active');
        })
        return this.data.forEach(e => this.creatMenu(e));
    }
    creatMenu(e) {
        const cost = this.numToCash(e.cost);
        this.selector.innerHTML += makeEachMenu(e.imgurl, e.name, e.length, e.type, cost);
    }
    numToCash(num) {
        return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
    } 
}

