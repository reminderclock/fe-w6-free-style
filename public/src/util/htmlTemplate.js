
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