import {bestMenu} from './util/parser.js';
import {makeEachMenu} from './util/htmlTemplate.js';
// console.log(makeEachMenu('a','b','c','d'));
export const menuName = [];
class MakeBestMenu {
    constructor(data, selector) {
        this.data = data;
        this.selector = selector;
    }
    init() {
        this.noticeEvent();
        bestMenu(this.data).forEach(e => this.creatBestMenu(e));
    }
    noticeEvent() {
        this.selector.addEventListener('click', () => {
            this.selector.classList.toggle('active')
          });
    }
    creatBestMenu(e) {
        let cost = this.numToCash(e.cost);
        this.selector.innerHTML += makeEachMenu(e.imgurl, e.name, e.length, e.type, cost);
    }
    numToCash(num) {
        return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
    } 


}

export { MakeBestMenu }