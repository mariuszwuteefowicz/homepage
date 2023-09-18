const hardware = ['mouse', 'keyboard', 'screen']
console.log(hardware)
console.log(hardware[1])
console.log(hardware.length)

const myText = "WTF: Co ten frontend";
console.log(myText)
console.log(myText.length)
console.log(myText[17])

hardware.splice(0,1)
console.log(hardware)


console.log(myText.indexOf('f'))
console.log(myText.indexOf('end'))

const textLength = myText.length
console.log(myText[textLength-1])

if (myText.indexOf('maciek') >=0) {
    console.log('maciek znaleziony')
} else {
    console.log('maciek nieznaleziony :(')
}

const myObject = {
    name: "Maciek",
    age: 35
}
hardware.push(myObject);
console.log(hardware.length)
console.log(hardware)

console.log(hardware.indexOf(myObject))

hardware.unshift('test')
console.log(hardware)
hardware.shift();
console.log(hardware)

const newHardware = hardware.slice(0,2)
console.log(newHardware);

console.log(myText.slice(4,12));
