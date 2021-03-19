
export const bestMenu = (menu) => {
    const bestNum = [6,1,19,9,18,11];
    return menu.filter(e => bestNum.includes(e.menuNum));
}