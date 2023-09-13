import tax, { calculate as superCalculate } from "./calculate";
console.log(tax);

import differenceInDays from 'date-fns/differenceInDays'

// alert('wtf!');
const firstName='Mariusz';
const age=35;

const calculate = () => 'hej hej obliczam';

console.log(firstName);
console.log(age);

console.log(`Cześć! Mam na imię ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js')

//console.log(header)

//header.innerHTML=`Cześć! Mam na imię ${firstName} i mam ${age} lat`

//console.log(header.style)

//header.style.color='red';

//const contentJs=document.querySelector('.my-article__content--js')

//contentJs.innerHTML='Jestem wypelniony Javascriptem'

//function calculate(myNumber) {
//    myNumber=myNumber+3;
 //   console.log(myNumber);
  //  return myNumber*7;}

   

calculate(1)

const result = calculate(3);
console.log (result);

function hello() {
    console.log('hello');
}
hello();

const humanOne = {
    name: 'Maciek',
    age: 32,
    address: {
        street: 'Warszawska',
        city: 'Bialystok'
            }
}

const humanTwo = {
    name: 'Stefan',
    age: 35,
    address: humanOne.address.street,
    city: 'Bialystok'
}
console.log(humanOne)
console.log(humanTwo)

humanOne.address.street = "Lipowa"

console.log(humanOne)
console.log(humanTwo)

const button = document.querySelector('.page-header__button--js') 

const clickFunction = (e) => {
    const header = document.querySelector('.page-header__heading--js')
   header.innerHTML = 'klik, klik!';
}
button.addEventListener('click', clickFunction)



/*wersja krotka
button.addEventListener('click', (e) => {
    const header = document.querySelector('.page-header__heading--js')
   header.innerHTML = 'klik, klik!';})
*/
/*button.classList.toggle('testowa')
console.log(button.classList.contains('testowa'))

console.log(button.classList)
*/

try {

const resultDays = differenceInDays(
    new Date(2022, 1, 24, 0, 0),
    new Date()
  )
  
  console.log(resultDays)
} catch (e) {
    console.log(e);
    alert('cos poszlo nie tak');
}


