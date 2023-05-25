'use strict';

const allLists = document.querySelectorAll('.props__list');
console.log(allLists);


const items04 = document.querySelectorAll('.props__item_four');
console.log(items04);

const allTitles = document.querySelectorAll('.item__title');
console.log(allTitles);


const allItems = document.querySelectorAll('.item');
console.log(allItems);


items04[4].before(items04[5]);

const items02 = document.querySelectorAll('.props__item_two');
console.log(items02);


items02[7].after(items02[8], items02[9]);

const items03 = document.querySelectorAll('.props__item_three');
console.log(items03);
allLists[4].after(allLists[3]);
allTitles[2].after(allLists[4]);

allItems[3].after(allItems[0]);

console.log(allTitles);
const cloneTitle04 = allTitles[4].cloneNode(true);
console.log(cloneTitle04);

const cloneTitle03 = allTitles[3].cloneNode(true);
console.log(cloneTitle03);
allTitles[4].replaceWith(allTitles[1]);
allTitles[3].replaceWith(cloneTitle04);
allLists[2].before(cloneTitle03);
allTitles[2].innerHTML = '<h2>This и прототипы объектов</h2>';
allTitles[2].classList.add('item__title');


const promo = document.querySelector('.ads');
console.log(promo);
promo.remove();