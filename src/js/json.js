const myObject = {
    name: "Maciek",
    hi: () => {
        console.log('hi')
    },
    age: 35,
hobby: ['frontend', 'music', 'gaming']
}

console.log(myObject)
myObject.hi()

const myJSON = JSON.stringify(myObject)

console.log (myJSON)

const myPasedObject = JSON.parse(myJSON);

console.log(myPasedObject)