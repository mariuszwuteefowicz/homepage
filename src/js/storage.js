console.log('hello storage')

const myObject = {
    name: 'maciek',
    age: 35
}

localStorage.setItem('name', JSON.stringify(myObject))

//document.cookie = 'ciastko = mniamniam'
//document.cookie = 'drugie = OK'
//document.cookie = 'trzecie = no niezle'

//localStorage.setItem('name', 'Maciek')

//const fromStorage = localStorage.getItem('name');

const fromStorage = JSON.parse(localStorage.getItem('name'));

console.log(fromStorage)

//localStorage.removeItem('name');

//console.log(localStorage.getItem('name'));