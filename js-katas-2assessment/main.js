function add(num1, num2) {
    return num1 + num2
}
console.log(add(2, 4))


function multiply(a, b) {
    let product = 0
    for (let index = 0; index < b; index = index = add(index, 1)) {
        product = add(product, a)

    }
    return product
}
console.log(multiply(6, 3))


function power(x, y) {
    let answer = 1
    for (let index = 0; index < y; index = add(index, 1)) {
        answer = multiply(answer, x)
    }
    return answer
}
console.log(power(2, 4))

function factorial(num1) {
    let total = 1
    for (let index = num1; index >= 1; index = index - 1) {
        total = multiply(index, total)
    }
    return total
}
console.log(factorial(6))





