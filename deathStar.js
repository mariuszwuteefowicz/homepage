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
console.log (deathStar['diameter'])
deathStar.fire('alderaan')
deathStar.fire('scarif')
console.log(deathStar.commander.name)

const numberOne = 42;
const numberTwo = 42;
const nameOne = 'Maciek';
let nameTwo = 'Stefan';
console.log(nameTwo);
nameTwo = 'Maciek';
console.log(nameTwo);