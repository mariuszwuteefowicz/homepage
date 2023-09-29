const numbers = [5,2,3];

const sum = (numbers) => {
    let total = 0;
    for (let partNumber of numbers) {
        total = total + partNumber;
    }
    return total;
}

console.log(sum(numbers))