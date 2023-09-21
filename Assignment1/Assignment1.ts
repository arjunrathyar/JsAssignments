//Q1

let number1 = 123;
var nums = String(number1).split('').map(function (str) {
    return parseInt(str);
});
console.log(nums);

//Q2

let str = "äÄçÇéÉêPHP-MySQLöÖÐþúÚ";
str = str.toString();
str = str.replace(/[^\x20-\x7E]/g, '');
console.log(str)

//Q3


//Q4

var stringVal = "faith";
stringVal = stringVal.charAt(0).toUpperCase()+stringVal.slice(1,stringVal.length);
console.log(stringVal);

//Q5



//Q6

//Q7
let object = {};
let key1 = "Car1";
let value1 = "BMW";
let key2 = "Car2";
let value2 = "AUDI";
let key3 = "Car3";
let value3 = "NISSAN";


Object.assign(object, { [key1]: value1 });
Object.assign(object, { [key2]: value2 });
Object.assign(object, { [key3]: value3 });
console.log(object);


//Q8

//Q9
let numList = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];
console.log(numList);
let multiplier = Math.floor(Math.random()*10);
console.log(multiplier);
let sqauredNumList = numList.map((num) => num*multiplier);
console.log(sqauredNumList);
let sum = 0;
for (const num of sqauredNumList) {
    sum += num;
}
console.log(sum / sqauredNumList.length);

//Q10
let text: string = "Hi, this is String 1!";
console.log("\x1b[44m"+text);
let text2: string = "Hi, this is String 2!";
console.log("\x1b[31m"+text2);