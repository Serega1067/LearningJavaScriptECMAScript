// Урок 1. Функциональный Javascript.
// Домашнее задание.
// 1. Дан массив const arr = [1, 5, 7, 9] с помощью
// Math.min и spread оператора, найти минимальное число
// в массиве, решение задание должно состоять из одной
// строки.

const arr = [18, 4, 1, 5, 7, 9];

console.log(Math.min(...arr));

// 2. Напишите функцию createCounter, которая создает
// счетчик и возвращает объект с двумя методами:
// increment и decrement. Метод increment должен
// увеличивать значение счетчика на 1, а метод decrement
// должен уменьшать значение счетчика на 1. Значение
// счетчика должно быть доступно только через методы
// объекта, а не напрямую.
const counter = (function outerFoo() {
    let count = 0;
    return {
        increment: function innerFooInc() {
            return ++count;
        },
        decrement: function innerFooDec() {
            return --count;
        },
    }
}());

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

// 3. Напишите рекурсивную функцию findElementByClass,
// которая принимает корневой элемент дерева DOM и
// название класса в качестве аргументов и возвращает
// первый найденный элемент с указанным классом в этом
// дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);
const rootElement = document.getElementById('root');
console.log(rootElement);

function findElementByClass(argElem, argClass) {
    let result = '';
    for (let i = 0; i < argElem.children.length; i++) {
        if (argElem.children[i].className === argClass) {
            return argElem.children[i];
        }
        else if (argElem.children[i].length !== 0) {
            result = findElementByClass(argElem.children[i], argClass);
            if (result) return result;
        }
    }
}

const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);