//lesson2
let user = 'John Doe';
console.log(user);
const student = 'Anton Lagodin';
console.log(student);
user = student; //Anton Lagodin
console.log(user);
let test = 1 + '1' - 1; //11, 10
console.log(test);
test = Boolean(test); //true
console.log(test);
const arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
console.log(result);
const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let j = 0; j < arr1.length; j++) {
  if (arr1[j] > 5 && arr1[j] < 10) {
    console.log(arr1[j]);
  }
}
for (let k = 0; k < arr1.length; k++) {
  if (arr1[k] % 2 === 0) {
    console.log(arr1[k]);
  }
}
//lesson3
import { palindrome } from './Functions(lesson3)/palindrome.js';
console.log(palindrome('шалаш'));
console.log(palindrome('ротор'));
console.log(palindrome('машина'));

import { min } from './Functions(lesson3)/min.js';
console.log(min(3, 5));
console.log(min(6, 4));

import { max } from './Functions(lesson3)/max.js';
console.log(max(4, 8));
console.log(max(10, 2));

const randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.round(Math.random() * 100));
}
console.log(randomArray);
import { replace } from './Functions(lesson3)/replaceItem.js';
console.log(randomArray.map(replace));
//lesson4
function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}
console.log(sum(5)(2).toString());
console.log(sum(3)(7).toString());

const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');
const paragraphs = [p1, p2, p3];
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', changeColor(paragraphs[i]));
}
import { changeColor } from './Functions(lesson4)/changeColor.js';
//lesson5
import { changeDate } from './String(lesson5)/changeData.js';
console.log(changeDate('2020-11-28'));

import { stringSearch } from './String(lesson5)/stringSearch.js';
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];
console.log(stringSearch(data, 'Berlin'));
console.log(stringSearch(data, 'Russia'));
console.log(stringSearch(data, 'Villa Kunerad'));

module.exports = changeColor;
