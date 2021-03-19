import {breadBundle, chesseBundle, addBundle, veggieBundle, toastBundle, sourceBundle, cookieBundle, drinkBundle, categoryList, makeInnerInfo} from './util/htmlTemplate.js';
export class MakeselectOption{
    constructor(data, newData, selector) {
        this.data = data;
        this.subOptionData = newData;
        this.selector = selector;
    }
    init() {
        let sendFousData = this.data.forEach(e => this.creatMenu(e));
        this.setBundle();
    }
    setBundle() {
        this.selector.innerHTML += breadBundle();
        this.selector.innerHTML += chesseBundle();
        this.selector.innerHTML += addBundle();
        this.selector.innerHTML += toastBundle();
        this.selector.innerHTML += veggieBundle();
        this.selector.innerHTML += sourceBundle();
        this.selector.innerHTML += cookieBundle();
        this.selector.innerHTML += drinkBundle();
        const breadBox = document.querySelector('.bread-bundle');
        const chesseBox = document.querySelector('.chesse-bundle');
        const addBox = document.querySelector('.add-bundle');
        const toastBox = document.querySelector('.toast-bundle');
        const veggieBox = document.querySelector('.veggie-bundle');
        const sourceBox = document.querySelector('.source-bundle');
        const cookieBox = document.querySelector('.cookie-bundle');
        const drinkBox = document.querySelector('.drink-bundle');
        this.splitCategoryData(breadBox, chesseBox, addBox, toastBox, veggieBox, sourceBox, cookieBox, drinkBox);
    }
    splitCategoryData(breadBox, chesseBox, addBox, toastBox, veggieBox, sourceBox, cookieBox, drinkBox) {
        this.subOptionData.bread.map(e => this.displayBreadOption(e, breadBox));
        this.subOptionData.chesse.map(e => this.displayBreadOption(e, chesseBox));
        this.subOptionData.addIngredient.map(e => this.displayBreadOption(e, addBox));
        this.subOptionData.toast.map(e => this.displayBreadOption(e, toastBox));
        this.subOptionData.exceptVeggie.map(e => this.displayBreadOption(e, veggieBox));
        this.subOptionData.source.map(e => this.displayBreadOption(e, sourceBox));
        this.subOptionData.cookie.map(e => this.displayBreadOption(e, cookieBox));
        this.subOptionData.drink.map(e => this.displayBreadOption(e, drinkBox));
    }
    displayBreadOption(bread, box) {
        console.log(bread);
        box.innerHTML += categoryList(bread.type, this.numToCash(bread.cost));
    } 
    creatMenu(e) {
        let cost = this.numToCash(e.cost);
        this.selector.innerHTML += makeInnerInfo(e.imgurl, e.name, e.length, e.type, cost);
    }
    numToCash(num) {
        return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
    } 
}
