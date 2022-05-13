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
function palindrome(str) {
  str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const lastIndex = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[lastIndex - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome('шалаш'));
console.log(palindrome('ротор'));
console.log(palindrome('машина'));

/*function min(a,b) {
    if (a < b) {
        return a;
    }
    return b;
}
*/
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(3, 5));
console.log(min(6, 4));

/*function max(a,y) {
    if (a > y) {
        return a;
    }
    return y;
}
 */
function max(a, y) {
  return a > y ? a : y;
}
console.log(max(4, 8));
console.log(max(10, 2));

const randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(Math.round(Math.random() * 100));
}
console.log(randomArray);

function replace(number) {
  if (`${number}`.includes('0')) {
    return `${number}`.replaceAll('0', 'zero');
  } else {
    return number;
  }
}
console.log(randomArray.map(replace));

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

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');
const paragraphs = [p1, p2, p3];
for (let i = 0; i < paragraphs.length; i++){
  paragraphs[i].addEventListener("click", changeColor(paragraphs[i]))
}
const pArray = document.getElementsByName("p");
for (let i =0; i < pArray.length; i++) {
  pArray[i].addEventListener("click", changeColor(pArray[i]))
}
function changeColor(elem) {
  let counter = 0;
  return function () {
    if (counter === colors.length) {
      counter = 0;
    }
    elem.style.color = colors[counter];
    counter++
  }
}

module.exports = changeColor;
