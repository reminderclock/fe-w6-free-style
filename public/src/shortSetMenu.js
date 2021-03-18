export class MakeShortSetMenu{
    constructor(data, selector, toogleBtn) {
        this.data = data;
        this.selector = selector;
        this.toogleBtn = toogleBtn;
    }
    init() {
        this.toogleBtn.addEventListener('click', () => {
            this.selector.classList.toggle('active')
          });
        return this.data.forEach(e => this.creatMenu(e));
    }
    creatMenu(e) {
        let cost = this.numToCash(e.cost);
        this.selector.innerHTML += `
        <a href="selectOption.html">
        <ul class="best-menu__bundle">
        <img src="${e.imgurl}" alt="${e.name}" class="best-menu__img" />
        <li class="menu-name">${e.name}(${e.length}${e.type})</li>
        <li class="menu-cost">${cost}원</li>
        </ul></a>`;
    }
    numToCash(num) {
        return num.toLocaleString( 'ko-KR', { style: 'currency', currency: 'KRW' } );
    } 
}

