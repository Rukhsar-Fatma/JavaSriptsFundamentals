// const arr = [4, 5, 6, 7];
//         //map method
//         function double(x) {
//             return x * 2;
//         }

//         // function triple(x){
//         //     return x*3;
//         // }

//         function binary(x) {
//             return x.toString(2);
//         }

//         const output = arr.map((x) => {
//             return x * 3;
//         });
//         console.log(output);
//         //filter 
//         //filter odd values
//         const op = arr.filter((x) => {
//             return x % 2;
//         });
//         console.log(op);

//         function findSum(arr) {
//             let sum = 0;
//             for (let i = 0; i < arr.length; i++) {
//                 sum = sum + arr[i];
//             }
//             return sum;
//         }
//         function findMax(arr) {

//             let max = 0;
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] > max) {

//                     max = arr[i];
//                 }
//             }
//             return max;
//         }

//         const op_max = arr.reduce(function (acc, curr) {
//             if (curr > acc) {
//                 acc = curr;
//             }
//             return acc;
//         }, 0);
//         console.log(findSum(arr));
//         // console.log("🚀 ~ file: index.html:65 ~ findSum:", findSum)
//         const op_reduce = arr.reduce(function (max, curr) {
//             max = max + curr;
//             return max;
//         }, 0);
//         // console.log("🚀 ~ file: index.html:70 ~ max:", max)
//         console.log("MAX value is :", op_max);


//         let users = [
//             { firstName: 'Jane', lastName: 'victor', age: 25 },
//             { firstName: 'Bob', lastName: 'george', age: 40 },
//             { firstName: 'John', lastName: 'martin', age: 30 },
//             { firstName: 'Jenny', lastName: 'martin', age: 30 }
//         ];
//         //list of fullName
//         const personal = users.map(x => x.firstName + " " + x.lastName);
//         console.log(personal);

//         const age = users.reduce(function (acc, curr) {
//             if (acc[curr.age]) {
//                 acc[curr.age] = ++acc[curr.age];
//             } else {
//                 acc[curr.age] = 1;
//             }
//             return acc;
//         }, {})
//         console.log(age);

//         function x() {
//             const a = 18;
//             function y() {
//                 console.log(a)
//             }
//             y();
//         }
//         x();

//Debouncing in Javascript
let counter = 0;
const getData = () => {
    console.log("Fetch data", counter++);
}

//debounce is here assign a function with 2 angr fn & d(delay) where it returns fn is the getData that being fetch and d with setTimeout of 300 so that it does not fetch the every single time while pressing a single letter it will hold for some sort of seconds then the debounce method will be called in index.html input feild
const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, d);
    }
}

const betterFunction = debounce(getData, 300);

//call, apply and bind method in JavaScript
let name1 = {
    firstname: "Rukhsar",
    lastname: "Shaikh",
}

let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}

//function borrowing
printFullName.call(name1, "Kolkata", "Bengal");

let name2 = {
    firstname: "Yoongi",
    lastname: "Min",

}

printFullName.call(name2, "Deagu", "South Korea");
printFullName.apply(name2, ["Deagu", "South Korea"]);

// Bind Method
let printName = printFullName.bind(name1, "Kolkata", "Bengal");
printName();


//function statement aka function declaration
function a() {
    console.log("Function Statement")
}
a();

//function expression
var b = function () {
    console.log("Function Expression");

}
b();

//function anonymous
// function (){

// } note gives an error function stattements require a function name

// names function expression 
var c = function xyz() {
    console.log("Named Function Expression");
}
c();

//first class functions
var first = function (param1) {
    return function xyz() {
    }
}
console.log(first())

//callback function
setTimeout(function(){
    console.log("timer")
},5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y")
});

function attachEventListner(){
    let count=0;
    document.getElementById("clickMe")
    .addEventListener("click",function xyz(){
        console.log("button clicked",count++)
    })
}

attachEventListner();

