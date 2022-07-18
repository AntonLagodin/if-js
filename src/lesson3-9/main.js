import { palindrome } from './Functions(lesson3)/palindrome.js';
import { min } from './Functions(lesson3)/min.js';
import { max } from './Functions(lesson3)/max.js';
import { replace } from './Functions(lesson3)/replaceItem.js';
//import { changeColor } from './Functions(lesson4)/changeColor.js';
import { changeDate } from './String(lesson5)/changeData.js';
import { stringSearch } from './String(lesson5)/stringSearch.js';
import { deepEqual } from './Object(lesson7)/deepEqual.js';
import { obj1 } from './Object(lesson7)/deepEqual.js';
import { obj2 } from './Object(lesson7)/deepEqual.js';
import { obj3 } from './Object(lesson7)/deepEqual.js';
import { Students, studentsData } from './Classes(lesson8)/classes.js';
import { User } from './Classes(lesson8)/classes.js';
import { Student } from './Classes(lesson8)/classes.js';
import { checkPalindrome } from './Array(lesson6)/palindrome1.js';
import { searchHotel } from './Array(lesson6)/searchArray.js';
import { uniqueLocation } from './Array(lesson6)/uniqueCountries.js';
import { hotels } from './Array(lesson6)/searchArray.js';
import { colors } from './Iteartor(lesson9)/colorsIterator.js';

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
console.log(palindrome('шалаш'));
console.log(palindrome('ротор'));
console.log(palindrome('машина'));

console.log(min(3, 5));
console.log(min(6, 4));

console.log(max(4, 8));
console.log(max(10, 2));

const randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.round(Math.random() * 100));
}
console.log(randomArray);

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

//const p1 = document.getElementById('text1');
//const p2 = document.getElementById('text2');
//const p3 = document.getElementById('text3');
//const paragraphs = [p1, p2, p3];
//for (let i = 0; i < paragraphs.length; i++) {
//  paragraphs[i].addEventListener('click', changeColor(paragraphs[i]));
//}

//lesson5
console.log(changeDate('2020-11-28'));
console.log(stringSearch('Berlin'));
console.log(stringSearch('Russia'));
console.log(stringSearch('Villa Kunerad'));
console.log(stringSearch('Belarus'));

//lesson7
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj2, obj3));

//lesson8
const userData = new User('Anton', 'Lagodin');
console.log(userData.fullName);
const studentInfo = new Student('Anton', 'Lagodin', 2018, 'JavaScript');
console.log(studentInfo.course + ' курс');
const students = new Students(studentsData);
console.log(students.getInfo);

//lesson6
console.log(checkPalindrome('шалаш'));
console.log(checkPalindrome('шиш'));
console.log(checkPalindrome('машина'));
console.log(searchHotel('Germany'));
console.log(searchHotel('Edinburgh'));
console.log(searchHotel('Asma Suites'));
console.log(uniqueLocation(hotels));

//lesson9
const paragraphsIt = document.getElementsByTagName('p');
for (const paragraph of paragraphsIt) {
  const colorsIterator = colors[Symbol.iterator]();
  paragraph.onclick = function () {
    this.style.color = colorsIterator.next().value;
  };
}
