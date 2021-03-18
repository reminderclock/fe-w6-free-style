import {makeInnerInfo} from './util/htmlTemplate.js';
export class MakeselectOption{
    constructor(data, selector) {
        this.data = data;
        this.selector = selector;
    }
    init() {
        return this.data.forEach(e => this.creatMenu(e));
    }
    creatMenu(e) {
        let cost = this.numToCash(e.cost);
        this.selector.innerHTML += makeInnerInfo(e.imgurl, e.name, e.length, e.type, cost);
    }
    numToCash(num) {
        return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
    } 
}
