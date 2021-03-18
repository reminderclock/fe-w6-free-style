export const slideParser = (data) => data.map((v) => v.imgurl);

export const moreParser = (data) =>
  data.map((v) => {
    return { imgurl: v.eventContent.imgurl, title: v.eventContent.title, info: v.eventContent.subtitle };
  });

//임의로 10개만 사용
export const hotDealParser = (data) =>
  data
    .map((v) => {
      return { imgurl: v.imgurl, title: v.text, info: v.text2 };
    })
    .slice(10);


export const bestMenu = (menu) => {
    const bestNum = [6,1,19,9,18,11];
    return menu.filter(e => bestNum.includes(e.menuNum));
}