import {cntBox, categoryCheckList, staticCost, breadBundle, chesseBundle, addBundle, veggieBundle, toastBundle, sourceBundle, cookieBundle, drinkBundle, categoryList, makeInnerInfo} from './util/htmlTemplate.js';
import {OrderCheckMaker} from './ordercheck.js';
const orderView = document.querySelector('.order-view');
export class MenuOptionMaker{
    constructor(data, newData, selector, orderView) {
        this.data = data;
        this.subOptionData = newData;
        this.selector = selector;
        this.orderView = orderView;
        this.addCost = 0;
        this.ingredientArr = [];
        this.breadArr = ["화이트"];
        this.chesseArr = ["아메리칸치즈"];
        this.toastArr = ["토스팅"];
        this.veggieArr = [];
        this.sourceArr = [];
        this.cookieArr = ["초코칩 쿠키"];
        this.drinkArr = ["코카콜라"];
        this.menuCnt = 1;
        this.minCost = 10000;
        this.defaultChecked = ["화이트", "아메리칸치즈", "토스팅", "초코칩 쿠키", "코카콜라"];
        this.updateCost = 0;
        this.totalOption = {};
    }
    init() {
        this.data.forEach(e => this.creatMenu(e));
        this.setBundle();
        this.data.map(e=>this.displayPushBox(e.cost));
        this.addEventListener();
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
    filterViggieData(target) {
        let targetCost = this.subOptionData.exceptVeggie
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
    radioOption(target) {
        if(target.checked) {
            this.checkCategory(target).pop();
            this.checkCategory(target).push(target.value);
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
    decideCnt(target) {
        if(target.classList.contains('fa-plus')) return this.addCnt();
        else if(target.classList.contains('fa-minus')) return this.shiftCnt();
    }
    shiftCnt() {
        if(this.menuCnt === 1) return;
        this.menuCnt--;
        let curr = this.addCost * this.menuCnt;
        this.displayUpdateCash(curr);
    }
    addCnt() {
        this.menuCnt++;
        let curr = this.addCost * this.menuCnt;
        this.displayUpdateCash(curr);
    }
    creatOrderCheck() {
        this.selector.classList.add('active');
        const orderCheckMaker = new OrderCheckMaker(this.newData, this.totalOption, orderView);
        orderCheckMaker.init();
    }
    addEventListener() {
        let radioArr = ["bread", "chesse", "toast","drink","cookie"]
        document.addEventListener('click', ({target})=> {
            if(target.closest("div").classList.contains('cnt-box'))return this.decideCnt(target);
            if(target.closest("div").classList.contains('push-box'))return this.creatOrderCheck();
            else if (radioArr.includes(target.name)) return this.radioOption(target);
            else if(target.name === "source") return this.filterSoureData(target);
            else if(target.name === "ingredient") return this.filterIngredientData(target);
            else if(target.name === "veggie") return this.filterViggieData(target);

        })
    }
    // 금액 업데이트 뷰 되는 부분
    displayUpdateCash(a) {
        const pushCostBox = document.querySelector('.push-box__cost');
        pushCostBox.value = `${this.menuCnt}담기     ${this.numToCash(a)}`;
        if(a>=this.minCost && this.sourceArr.length !== 0) {
            pushCostBox.disabled = false;
            const basketCnt = document.querySelector('.basket__cnt');
            basketCnt.innerText = this.menuCnt;
            return this.data.forEach(e => this.getOrderData(e, this.numToCash(a)));
        }
        else {
            pushCostBox.disabled = "disabled";
        }
    }
    getOrderData(e ,totalCost) {
        this.totalOption.name = `${e.name}(${e.length}${e.type})`;
        this.totalOption.bread = this.breadArr;
        this.totalOption.chesse = this.chesseArr;
        this.totalOption.ingredient = this.ingredientArr;
        this.totalOption.veggie = this.veggieArr;
        this.totalOption.toast = this.toastArr
        this.totalOption.source = this.sourceArr;
        this.totalOption.cookie = this.cookieArr;
        this.totalOption.drink = this.drinkArr;
        this.totalOption.cost = totalCost;
        this.totalOption.default = e.cost;
        this.totalOption.menuCnt = this.menuCnt;
        this.addEventListener();
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
        const optionBundleList = [breadBundle, chesseBundle, addBundle, veggieBundle, toastBundle, sourceBundle, cookieBundle, drinkBundle];
        optionBundleList.forEach(fn =>this.selector.innerHTML += fn());
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
        this.subOptionData.bread.forEach(e => this.displayRadioOption(e, breadBox));
        this.subOptionData.chesse.forEach(e => this.displayRadioOption(e, chesseBox));
        this.subOptionData.addIngredient.forEach(e => this.displaycheckOption(e, addBox));
        this.subOptionData.toast.forEach(e => this.displayRadioOption(e, toastBox));
        this.subOptionData.exceptVeggie.forEach(e => this.displaycheckOption(e, veggieBox));
        this.subOptionData.source.forEach(e => this.displaycheckOption(e, sourceBox));
        this.subOptionData.cookie.forEach(e => this.displayRadioOption(e, cookieBox));
        this.subOptionData.drink.forEach(e => this.displayRadioOption(e, drinkBox));
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