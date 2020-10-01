//numbers
var num1 =  8;
console.log(num1+1);


//Functions
function fun(){
    console.log('this is a function');
}
fun();
function ame(yourname){
   console.log("hello  "+yourname);
}
//var name = prompt("what is your name?");
//ame(name);

//how do arguments work in function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(10 ,20);

/*var num = 0;
while (num < 100) {
    num+=1;
    console.log(num);
}
*/

/*for(let num = 0; num<100; num++){
    console.log(num);
}
*/

//Data Types

let yourAge = 19;
let yourName = 'Vistrit';
let name = {first: 'Vist', last: 'trit'};
let truth = false;
let groceries = ['apple', 'banana', 'oranges'];
let random;
let nothing = null;

// strings in javascript

/*let fruit = 'mango';
let morefruits = 'banana\napple';
console.log(morefruits);
console.log(fruit.indexOf('z'));
console.log(fruit.slice(2,4));
console.log(fruit.replace('man','aam'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit[2]);
console.log(fruit.split(''));
*/


//arrays in javascript

/*let fruits = ['banana','apple','pineapples','oranges'];
fruit =new Array('banana','apple','pineapples','oranges');
console.log(fruits[2]);
fruits[0] = 'coco';
console.log(fruits);

for (let i =0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// array common methods

console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
*/

//objects in js

let student = {
    first: ' Vistrit',
    last: 'Pandey',
    age:19, 
    height: 186,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//console.log(student.first);
//console.log(student.last);
//student.first = 'notVistrit';
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());


//conditionals, control flow (if else)
/*let age = prompt('enter your age...');

if ((age>=18) && (age<=35)){
    status  = 'target demo';
}
else{
    status = 'not my audience';
}
console.log(status);
*/
