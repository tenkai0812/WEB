// 內建方法介紹 console.log() 

// console.log("Hello.js");

// 變數宣告 (var,const,let)

// let name = "codeshiba"
// console.log(name)

// let sentence = 'hows your day?'
// console.log(name + sentence)

// 內建方法介紹 prompt() alert()
// fruit = prompt("what's your favorite fruit?")
//console.log(fruit)
// alert(fruit)

// 第一個小程式

let food = parseInt(prompt("這餐食物花費多少錢"))
let tipPercentage = parseInt(prompt("小費幾趴")) / 100
let tipAmount = food * tipPercentage
let total = food + tipAmount
console.log("小費金額" + tipAmount)
console.log("總金額" + total)




//airbnb

const foo = [1, 3];
console.log(foo[0]);
const bar = foo;
console.log(foo[0],bar[0]);
console.log(foo,bar);
bar[0] = 9;
console.log(foo[0], bar[0]);
console.log(foo,bar);

//let:宣告一個可隨意更改其內容的區塊區域變數,資料可以被複寫、修改，若數值一直在更動，推薦使用let
//const:宣告一個只可讀取的不可變常數，資料不可以被複寫或修改，數值不會更動，可以使用const
//var:宣告一個可以隨意更改其內容的變數 ->通常不建議使用var!早期都使用var去宣告變數。因為她多使用在早期ie的部分，但現在ie走入歷史，所以普遍廣泛還是使用let或const
// 第二個小程式

let time = document.getElementById('demo').innerHTML = Date()
console.log("time")

