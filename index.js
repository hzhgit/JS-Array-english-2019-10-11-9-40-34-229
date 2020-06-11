// The writer determines whether the following variables are of type array.
var a1 = '[a, b, c, d]';
var b1 = [1, 2, 3, 4];
//TODO
function isArr(value,name) {
    if (Object.prototype.toString.call(value) === "[object Array]") {
        console.log(name + "是数组")
    } else {
        console.log(name + "不是数组")
    }
}
isArr(a1,'a1')
isArr(b1,'b1')
// Write a program that multiplies each entry in the following array by 2。
var a2 = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a2.length; i++) {
    a2[i] *= 2;
}
console.log(a2)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
let case1 = colors.join('')
console.log(case1);
let case2 = colors.join('+')
console.log(case2);
let case3 = colors.join(',')
console.log(case3);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a3 = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNumber(a, b) {
    return b - a
}
a3 = a3.sort(sortNumber)
console.log(a3);


// Program to find the most frequent element in the following array.
var a4 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let str = a4.join('');
let json = {}
for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i)
    if (json[letter]) {
        json[letter]++;
    } else {
        json[letter] = 1;
    }
}

var count = 0;
var result = ''
for (let ele in json) {
    if (json[ele] > count) {
        result = ele;
        count = json[ele]
    }
}
console.log(result)