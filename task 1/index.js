// 1.
// let str = '123'
// let num = Number(str)
// let num2 = num + 7
// console.log(num2)
//==========================
// 2.
// let num = 0
// if(num === 0 || num === null || num === undefined || num === false || num === NaN || num === '') {
//     console.log('invalid')
// } else {
//     console.log('The number is truthy')
// }
//==========================
// 3.
// for(let i = 0 ; i < 10 ; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }else{
//         console.log('even number')
//     }
// }
//==========================
// 4.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let res = arr.filter((num) => num % 2 === 0)
// console.log(res)
//==========================
// 5.
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let mergedArr = [...arr1,...arr2]
// console.log(mergedArr);
//===========================
// 6.
// let day = 'Monday'
// switch(day){
//     case 'Saturday':
//         console.log('Saturday');
//         break;
//     case 'Sunday':
//         console.log('Sunday');
//         break;
//     case 'Monday':
//         console.log('Monday');
//         break;
//     case 'Tuesday':
//         console.log('Tuesday');
//         break;
//     case 'Wednesday':
//         console.log('Wednesday');
//         break;
//     case 'Thursday':
//         console.log('Thursday');
//         break;
//     case 'Friday':
//         console.log('Friday');
//         break;
//     default:
//         console.log('That is not a day');
        
//     }
//===========================
// 7.
// let str = ['a','ab','abcd']
// let res = str.map((item) => item.length)  
// console.log(res);
//===========================
// 8.
// function divide(num){
//     if(num % 3 == 0 && num % 5 == 0){
//         console.log('divided both');
        
//     }else{
//         console.log('not divided both');
        
//     }
// }
// divide(2)
//===========================
// 9.
// let num = 5
// let factorial = (n) => n**2

// console.log(factorial(num));
//===========================
// 10.
// let obj = {name: 'John', age: 30}
// let {name,age} = obj
// let str = `${name} is ${age} years old.`
// console.log(str);
//===========================
// 11.
// function sum(...arg){
//     return arg.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1,2,3));
//===========================
// 12.
// function isPromise(){
//      return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Seccuess');
            
//         },3000)
//      })
// }
// console.log(isPromise());
//===============================
// 13.
// let arr = [1,3,7,2,4,100]
// function findMax(arr){
//     return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
// }
// console.log(findMax(arr));
//============================
// 14.
// let obj = {name : 'johan' , age : 30}
// let obgKey = Object.keys(obj)
// console.log(obgKey);
//==============================
// 15.
// let obj = "The quick brown fox"
// let arr = obj.split(' ')
// console.log(arr);
//==============================
// B 1.
/*
for each => {
    - بتشتغل علي arrays فقط مش بتشتغل علي (maps , sets , objects)
    - مينفعش نعمل break or continue جواها 
    - return  جوا callback مش بيوقفها بس بيخرج من callback
    - مش statment in js
    - لو في promise  مش هتستني هتنفذ كله بالتوازي
    }
===============================
for of => {
    - statment اساسيه في اللغه بتشتغل علي اي حاجة
    - بتشتغل مع (strings,arrays,maps,sets,objects)
    - تقدر تستخدم break - continue - return كويس جدا
    - لو في promise هتستناه يخلص 
    }
 - لو عندك promise نستخدم for of اكيد ولو عايز استخدم break , continue , return 
 - لو عايز اطلع داتا بس ممكن نستخدم foreach

*/
//==================================
// 2. 
/*
- hoisting = > برفع كل ال dicrlation في اعلي الفايل بتاع الكود بتاعي 
- TDZ = > هي المنطقه اللي مينفعش استخدم فيها variable قبل ما اعمله intilaized


*/
//=============================
// 3.
/*
== ->  بتقارن ال value فقط
=== -> بتقارن بين value & data type


*/
//======================
// 4.
/*
try => رنرن الكود جواها ولو في ايرور ال catch بتمسكها



*/
//==================
// 5.
/*
type convertion => دا انا اللي بحول التايب ب ايدي من string to number مثلا
type coercion => دا js هي اللي بتحوله زي ما بتسخدم اي opreator (* , / , -) بتحول string ل number

//==============================
--------------- bouns ---------------
*/
// var createCounter = function(init) {
//     let count = init;
//     return obj = {
//         increament(){
//             count = count +1
//             console.log(count);
            
//         },
//         decrement(){
//             count = count - 1
//             console.log(count);
            
//         },  
//         reset(){
//             count = init
//             console.log(count);
            
//         }
//     }
// };
// createCounter(5).decrement()