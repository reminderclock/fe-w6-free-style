export const makeEachMenu = (imgurl, name, length,type, cost) =>`
<ul class="best-menu__bundle">
<img src="${imgurl}" alt="${name}" class="best-menu__img" />
<li class="menu-name">${name}(${length}${type})</li>
<li class="menu-cost">${cost}원</li>
</ul>`;