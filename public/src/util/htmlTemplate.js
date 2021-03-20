
export const makeEachMenu = (imgurl, name, length,type, cost) =>`
<ul class="best-menu__bundle">
<img src="${imgurl}" alt="${name}" class="best-menu__img" />
<li class="menu-name">${name}(${length}${type})</li>
<li class="menu-cost">${cost}원</li>
</ul>`;

export const makeInnerInfo = (imgurl, name, length, type, cost) => `
<ul class="inner-menu__bundle">
<img src="${imgurl}" alt="${name}" class="inner-menu__img" />
<li class="inner-menu__name">${name}(${length}${type})</li>
</ul>
<div class="inner__default">
<span>기본</span>
<span>${cost}</span>
</div>`;


export const breadBundle = () => `
<div class="bread-bundle">
<div class="bread__title">빵 선택</div>
</div>`;

export const chesseBundle = () => `
<div class="chesse-bundle">
<div class="chesse__title">치즈 선택</div>
</div>`;

export const addBundle = () => `
<div class="add-bundle">
<div class="add__title">재료 추가 선택</div>
</div>`;

export const toastBundle = () => `
<div class="toast-bundle">
<div class="toast__title">빵/미트 토스팅 선택</div>
</div>`;

export const veggieBundle = () => `
<div class="veggie-bundle">
<div class="veggie__title">아채 제외(최대 8개)</div>
</div>`;

export const sourceBundle = () => `
<div class="source-bundle">
<div class="source__title">소스 선택(1개 필수 선택)</div>
</div>`;

export const cookieBundle = () => `
<div class="cookie-bundle">
<div class="cookie__title">쿠키 또는 칩 선택</div>
</div>`;

export const drinkBundle = () => `
<div class="drink-bundle">
<div class="drink__title">음료 선택</div>
</div>`;
export const categoryList = (check,type,name, cost) => `
<div class="${name}-type__info">
<span><input type='radio'
name='${name}' 
value='${type}'${check}/>${type}</span>
<span>+${cost}</span>
</div>`;


export const categoryCheckList = (type,name, cost) => `
<div class="${name}-type__info">
<span><input type='checkbox'
name='${name}' 
value='${type}'/>${type}</span>
<span>+${cost}</span>
</div>`;
const costSpaceLine = () => `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;
export const staticCost = (min, cnt, cost) =>`
<div class="push-box">
<div class="push-box__title">
배달 최소주문 금액 ${min}
</div>
<input type="button" class="push-box__cost" value="${cnt}담기${costSpaceLine()}${cost}" disabled="disabled">
<div>
`; 