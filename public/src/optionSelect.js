import {categoryCheckList, staticCost, breadBundle, chesseBundle, addBundle, veggieBundle, toastBundle, sourceBundle, cookieBundle, drinkBundle, categoryList, makeInnerInfo} from './util/htmlTemplate.js';
export class MakeselectOption{
    constructor(data, newData, selector) {
        this.data = data;
        this.subOptionData = newData;
        this.selector = selector;
        this.addCost = 0;
    }
    init() {
        this.data.forEach(e => this.creatMenu(e));
        this.setBundle();
        this.data.map(e=>this.displayPushBox(e.cost));
        this.noticeEvent();
    }
    noticeEvent() {
        document.addEventListener('click', ({target})=> {
            this.updateCash(this.cashToNum(target.value));
        })
    }
    cashToNum(c) {
        let a = c.substr(1).replace(",","");
        return parseInt(a);
    }
    updateCash(e) {
        this.addCost +=e;
        this.displayPushBox(this.addCost);
    }
    displayPushBox(e) {
        this.selector.innerHTML += staticCost(this.numToCash(e));
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
        this.subOptionData.bread.map(e => this.displayRadioOption(e, breadBox));
        this.subOptionData.chesse.map(e => this.displayRadioOption(e, chesseBox));
        this.subOptionData.addIngredient.map(e => this.displaycheckOption(e, addBox));
        this.subOptionData.toast.map(e => this.displayRadioOption(e, toastBox));
        this.subOptionData.exceptVeggie.map(e => this.displaycheckOption(e, veggieBox));
        this.subOptionData.source.map(e => this.displaycheckOption(e, sourceBox));
        this.subOptionData.cookie.map(e => this.displayRadioOption(e, cookieBox));
        this.subOptionData.drink.map(e => this.displayRadioOption(e, drinkBox));
    }
    displaycheckOption(bread, box) {
        box.innerHTML += categoryCheckList(bread.type,bread.name, this.numToCash(bread.cost));
    } 
    displayRadioOption(bread, box) {
        box.innerHTML += categoryList(bread.type,bread.name, this.numToCash(bread.cost));
    } 
    creatMenu(e) {
        this.addCost = e.cost;
        let cost = this.numToCash(e.cost);
        this.selector.innerHTML += makeInnerInfo(e.imgurl, e.name, e.length, e.type, cost);
    }
    numToCash(num) {
        return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
    } 
}