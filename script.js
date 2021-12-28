// task 1
function getsum1(arr){
    let sum = 0;
    for (let elem of arr){
        sum += elem * elem;
    }
    return sum;

}
let arr1 = [3, 4, 5, 6];
alert(getsum1(arr1));

// task 2

function func2(num) {
    return Math.sqrt(num)
}

let num1 = func2(3);
let num2 = func2(4);
alert(num1 + num2);

// task 3

function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

let sqrt1 = sqrt(2);
let round1 = round(sqrt1);

alert(round1);

// task 4
function sqrt2(num) {
    return Math.sqrt(num);
}

function sum2(num1, num2, num3) {
    return num1 + num2 + num3;
}

let root1 = sqrt2(2);
let root2 = sqrt2(3);
let root3 = sqrt2(4);

let s2 = sum2(root1, root2, root3);
alert(s2);

// task 5
function round5(num) {
    return num.toFixed(3);
}
 let s3 = round5(s2);
alert(s3);

// task 6

function func6(num) {
    return num;

    let res = num * num;
    return res;
}

alert( func6(3) );

// task 7
function func7(num) {
    if (num <= 0) {
        return Math.abs(num);
    } else {
        return num * num;
    }
}

alert( func7(10) );
alert( func7(-5) );

// task 8

function func8(num) {
    if (num <= 0) {
        return Math.abs(num);
    }

    return num * num;
}

alert( func8(10) );
alert( func8(-5) );

// task 9
function func(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

alert( func(5) );

// task 10

function func10(num){
    let i = 0;

    while(num >= 10){
          num /= 2;
          i++
     }
     return i;
}

let result10 = func10(60);

alert(result10);
alert(i);

// task 11

function func11(num1, num2) {

    if (num1 > 0 && num2 > 0) {
        return num1 * num2;
    } else {
        return num1 - num2;
    }

}

alert(func11(3, 4));