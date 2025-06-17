const informaton = {
    name: 'Egor',
    age:  13,
    habitation: 'Владимирская обл'
}

console.log(informaton)

// Метод  обьекта, принимающий имя==========================================================

const hello = {
    sayHello: function(name) {
        return 'Hello ' + name 
    }
}

console.log(hello.sayHello("Egor"))

// Массив пользователей==========================================================

const users = [
    { name: 'Egor', isAdmin: false},
    { name: 'Ivan', isAdmin: false},
    { name: 'Gena', isAdmin: true},
    { name: 'Anton', isAdmin: false},
    { name: 'Dasha', isAdmin: true},
    { name: 'Vera', isAdmin: true}
];

let normalUsersCount = 0

for(let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        normalUsersCount++;
    }
}
    console.log("Обычных пользователей: ", normalUsersCount++)


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