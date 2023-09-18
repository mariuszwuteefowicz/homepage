const hardware = ['mouse', 'keyboard', 'screen']

const elements = ['1', '2', '3']

let myNumber = 13;

const myFunction = (a) => {
    const b = a * 3;
    const c = b * 7;
    return b+c;
}

for (let i = 0; i < elements.length; i++) {
    myNumber = myNumber * (i+1);
    myFunction(i);
}

//for (let i = 0; i < elements.length; i++) {
//    myNumber = myNumber * (i+1);
//    console.log(`Index: ${i} Emoji: ${elements[i]}`)
//}

//for (let i = 0; i < elements.length; i++) {
//    console.log(`Index: ${i} Emoji: ${elements[i]}`)
//}

for (let element of elements) {
    console.log(element)
}

//for (let i = 0; i < 3; i++) {
//    console.log(`${i} wykonanie petli`)
//}

let number = 0;
console.log(number++);
console.log(number)
console.log(++number);
console.log(number)
console.log(number--);
console.log(number)
console.log(--number);
console.log(number)

//let n = 3;
//while (n<9) {    
//    console.log(n)
//    n = n + 3;
//}
//console.log(n)

let n = 3;
do {    
    console.log(n)
    n = n + 3;
    } while (n<9)
    console.log('---------')

console.log(n)

const deathStar = {
    diameter:120000,
    fire: (target) => {
        console.log('${target} destroyed 💥')
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    commander: {
        name: 'darth vader'
    }
}

for (property in deathStar) {
    console.log(`${property}: ${deathStar[property]}`)
}