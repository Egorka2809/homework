
function hello(name) {
    return "hello " + name
}

const result = hello("egor")
console.log(result)

// ==========================================================


let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function sumNumber(array, item) {
    for (let i = 10; i < array.length; i++)
        if (array[i] > 10) {
            console.log(array[i])
        }
}
console.log(sumNumber(number))

// ==========================================================
function calculator(num1, num2, operator) {
if (operator === "plus") {
    return num1 + num2;
} else if (operator === "minus") {
    return num1 - num2;
} else if (operator === "multiply") {
    return num1 * num2;
} else if (operator === "divide") {
    if (num2 === 0) {
        return "Ошибка: деление на ноль!";
    }
    return num1 / num2;
} else {
    return "Неизвестная операция!";
}
}

const result1 = calculator(10, 5, "minus");   // 5
const result2 = calculator(3, 4, "multiply"); // 12
const result3 = calculator(8, 2, "divide");   // 4
const result4 = calculator(1, 2, "plus");     // 3

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
