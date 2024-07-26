
// // 1
function even(array) {
    let array1=[];
    for (let i=0; i<= array.length;i++){
        if (array[i] % 2 === 0){
            array1.push(array[i]);
        }
    }
    return array1;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Result = even(myArray);
console.log(Result); 


// 2
const person = {
    name: "mohamed",
    age: 25,
    email: "moh@gmail.com"
};

 function over30(peopleArray) {
    let newarray=[];
    for (let i=0;i<= peopleArray.length-1;i++){
        console.log(peopleArray[i].age);
        if(peopleArray[i].age>30){
            newarray.push(peopleArray[i])
        }
    }
    return newarray;
}


const people = [
    { name: "ali", age: 28, email: "ali@gmail.com" },
    { name: "ahmed", age: 42, email: "ahmed@gmail.com" },
    { name: "younes", age: 22, email: "younes@gmail.com" },
    { name: "karim", age: 38, email: "karim@gmail.com" }
];

const result = over30(people);
console.log(result);

// // 3
let stack = []
stack.push("ali")
stack.push("azeddine")
stack.push("amine")
console.log(stack)
stack.pop()
console.log(stack);

// 4
let queue = []
queue.push("ali")
queue.push("azeddine")
queue.push("amine")
console.log(queue)
queue.shift()
console.log(queue);

// // 5
function removeVowels(string) {
    let newstring = " ";
    for (let i=0 ;i<string.length;i++){
        if(string[i]!=="a"&&string[i]!=="e"&&string[i]!=="i"&&string[i]!=="o"&&string[i]!=="u" ){
            newstring+=string[i];
        }
    }
    return newstring;
}

const string = "Hello, world! How are you?";
const p = removeVowels(string);
console.log(p); 


// 6

function same(arr1, arr2) {
    const resarray = new Set([...arr1, ...arr2]);

    const unique = Array.from(resarray);

    return unique;
}


const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const Unique = same(array1, array2);
console.log(Unique); 