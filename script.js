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

// 第二個小程式

let time = document.getElementById('demo').innerHTML = Date()
console.log("time")