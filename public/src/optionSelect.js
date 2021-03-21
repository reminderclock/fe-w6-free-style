import {cntBox, categoryCheckList, staticCost, breadBundle, chesseBundle, addBundle, veggieBundle, toastBundle, sourceBundle, cookieBundle, drinkBundle, categoryList, makeInnerInfo} from './util/htmlTemplate.js';
export class MakeselectOption{
    constructor(data, newData, selector) {
        this.data = data;
        this.subOptionData = newData;
        this.selector = selector;
        this.addCost = 0;
        this.ingredientArr = [];
        this.breadArr = [];
        this.chesseArr = [];
        this.toastArr = [];
        this.veggieArr = [];
        this.sourceArr = [];
        this.cookieArr = [];
        this.drinkArr = [];
        this.menuCnt = 1;
        this.minCost = 10000;
        this.defaultChecked = ["화이트", "아메리칸치즈", "토스팅", "초코칩 쿠키", "코카콜라"];

    }
    init() {
        this.data.forEach(e => this.creatMenu(e));
        this.setBundle();
        this.data.map(e=>this.displayPushBox(e.cost));
        this.noticeEvent();
        this.checkCnt();
    }
    checkCnt() {
        this.selector.innerHTML += cntBox(this.menuCnt);
    }
    filterSoureData(target) {
        let targetCost = this.subOptionData.source
        .filter(e => e.type === target.value)
        .map(e => e.cost).join('');
        this.checkOption(target, targetCost);
    }
    filterIngredientData(target) {
        let targetCost = this.subOptionData.addIngredient
        .filter(e => e.type === target.value)
        .map(e => e.cost).join('');
        this.checkOption(target, targetCost);
    }
    checkCategory(target) {
        switch(target.name) {
            case "bread":
                return this.breadArr;
            case "chesse":
                return this.chesseArr;
            case "ingredient":
                return this.ingredientArr;
            case "toast":
                return this.toastArr;
            case "veggie":
                return this.veggieArr;
            case "source":
                return this.sourceArr;
            case "cookie":
                return this.cookieArr;
            case "drink":
                return this.drinkArr;
            default:
                return;
        }
    }
    checkOption(target, targetCost) {
        if(target.checked) {
            if(this.checkCategory(target).includes(target.value)) return;
            this.checkCategory(target).push(target.value);
            return this.updateCash(parseInt(targetCost));
        }
        // 체크 되있지 않을 경우, 배열 저장 값 빼주기
        else {
            if(this.checkCategory(target).includes(target.value)){
                let removeTarget =this.checkCategory(target).filter(e => e === target.value).join('');
                let arr = this.checkCategory(target);
                const findIndex1 = arr.indexOf(removeTarget);
                if(arr.length === 1) {
                    this.checkCategory(target).splice(0);
                }
                else {
                    this.checkCategory(target).splice(findIndex1, 1);
                }
            }
            // 원래 가격에서 해제 되었을 때 가격 빼주는 부분
            this.addCost = this.addCost-targetCost;
            this.displayUpdateCash(this.addCost);
        }
    }
    noticeEvent() {
        document.addEventListener('click', ({target})=> {
            if(target.name === "source") return this.filterSoureData(target);
            if(target.name === "ingredient") return this.filterIngredientData(target);
        })
    }
    // 금액 업데이트 뷰 되는 부분
    displayUpdateCash(a) {
        const pushCostBox = document.querySelector('.push-box__cost');
        pushCostBox.value = `${this.menuCnt}담기     ${this.numToCash(a)}`;
        console.log(this.sourceArr);
        (a>=this.minCost && this.sourceArr.length !== 0) ? pushCostBox.disabled = false : pushCostBox.disabled = 'disabled';
    }
    // 금액 더해주는 부분 
    updateCash(e) {
        this.addCost +=e;
        this.displayUpdateCash(this.addCost);
    }
    displayPushBox(e) {
        this.selector.innerHTML += staticCost(this.numToCash(this.minCost),this.menuCnt,this.numToCash(e));
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
    // 하나만 선택
    displayRadioOption(radioMenu, box) {
    if(this.defaultChecked.includes(radioMenu.type)) {
    return box.innerHTML += categoryList('checked',radioMenu.type,radioMenu.name, this.numToCash(radioMenu.cost));
    }
        box.innerHTML += categoryList("",radioMenu.type,radioMenu.name, this.numToCash(radioMenu.cost));
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