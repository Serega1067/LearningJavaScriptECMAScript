// Урок 3. Объектно-ориентированное программирование в Javascript.
// Домашнее задание.
// Задание 1: "Управление персоналом компании".
// Реализуйте класс Employee (сотрудник), который имеет следующие
// свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер),
// который наследует класс Employee и имеет дополнительное
// свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает
// менеджер.
// Метод displayInfo() - переопределяет метод displayInfo()
// родительского класса и выводит информацию о менеджере (имя и отдел).
class Employee {
    name;

    displayInfo() {
        console.log(`Вывод:\nName: ${this.name}`);
    }

    constructor(name) {
        this.name = name;
    }
};

class Manager extends Employee {
    department;

    displayInfo() {
        console.log(`Вывод:\nName: ${this.name}\n` +
            `Department: ${this.department}`);
    }

    constructor(name, department) {
        super(name);
        this.department = department;
    }
}

const employee = new Employee('John Smith');
employee.displayInfo();

const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();

// Задание 2: "Управление списком заказов".
// Реализуйте класс Order (заказ), который имеет следующие свойства
// и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список
// продуктов в заказе.
// Метод addProduct(product) - принимает объект product и
// добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа,
// основанную на ценах продуктов.
class Order {
    orderNumber;
    products = [];

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return `Вывод: ${this.products.reduce(
            (acc, element) => acc += element.price, 0)}`;
        // let sumPrice = 0;
        // for (let i = 0; i < this.products.length; i++) {
        //     sumPrice += this.products[i].price;
        // }
        // return `Вывод: ${sumPrice}`;
    }
}

class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);
console.log(order);

const product1 = new Product("Phone", 500);
console.log(product1);

order.addProduct(product1);
console.log(order.products);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.products);

console.log(order.getTotalPrice());