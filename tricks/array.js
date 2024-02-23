// array to object
var array = [
    "Microsoft",
    "Apple",
    "Tesla",
    "Alphabet",
    "Nvidia",
    "Amazon"
]

var object = 
{...array};

console.log(object);

//fill array with
//data
var newarray=
new Array(6).fill("hello")

console.log(newarray);

//remove duplicates
//from array
var duplicates = [
    "Microsoft",
    "Microsoft",
    "Apple",
    "Apple",
    "Tesla",
    "Tesla",
    "Alphabet",
    "Alphabet",
    "Nvidia",
    "Nvidia",
    "Amazon",
    "Amazon"
]

var newarray2 = 
Array.from(new Set(duplicates));

console.log(newarray2);

//merge arrays

var array1 =[
    "Microsoft",
    "Apple",
    "Tesla",
    "Alphabet",
    "Nvidia",
    "Amazon"
]

var array2 =[
    "Facebook",
    "Apple",
    "Amazon",
    "Netflix",
    "Google"
]

var merge =[
    ...array1,
    ...array2
]

console.log(merge)
