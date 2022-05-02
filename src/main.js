let user = "John Doe";
console.log(user);
let student = "Anton Lagodin";
console.log(student);
user=student;//Anton Lagodin
console.log(user);
let test = 1 + '1' - 1;//11, 10
console.log(test);
test = Boolean(test); //true
console.log(test);
let arr = [2, 3, 5 ,8];
let result = 1;
for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
}
console.log(result);
let arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] > 5 && arr1[j] < 10) {
        console.log(arr1[j]);
    }
}
for ( let k = 0; k < arr1.length; k++) {
    if (arr1[k] % 2 === 0) {
        console.log(arr1[k]);
    }
}