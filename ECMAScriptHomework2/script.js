// Урок 2. Основы ООП (объектно-ориентированного программирования).
// Домашнее задание.

// Задание 1: "Управление библиотекой книг".

// Реализуйте класс Book, представляющий книгу,
// со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название,
// автор и количество страниц).

class Book {
    title;
    author;
    pages;
    displayInfo() {
        console.log(`Книга:\n` +
            `название: ${this.title}\n` +
            `автор: ${this.author}\n` +
            `страниц: ${this.pages}`);
    };
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const book1 = new Book('Пороховая Луна', 'Дэвид Педрейра', 384);

book1.displayInfo();

// Задание 2: "Управление списком студентов".
// Реализуйте класс Student, представляющий студента,
// со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя,
// возраст и класс).

class Student {
    name;
    age;
    grade;
    displayInfo() {
        console.log(`Вывод:\n` +
            `Name: ${this.name}\n` +
            `Age: ${this.age}\n` +
            `Class: ${this.grade}\n`);
    }
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

// ****** Задача необязательная для выполнения:

// Создайте класс "Банк", который будет иметь следующие свойства:
// название банка, список клиентов и список счетов.
// Класс должен иметь методы для добавления нового клиента,
// открытия нового счета для клиента, пополнения счета,
// снятия денег со счета и проверки баланса.

class Bank {
    nameBank;
    listClient = [];
    listDeposit = [];
    constructor(nameBank) {
        this.nameBank = nameBank;
    }
    displayInfo() {
        console.log(`Вывод:\n` +
            `Bank: ${this.nameBank}\n` +
            `Clients counter: ${this.listClient.length}`);
    }
    addClient(argClient, argNum = 0) {
        this.listClient.push(argClient);
        let numDeposit = Math.round(Math.random() * 10000000000);
        argClient.deposit = [numDeposit];
        this.listDeposit.push({ numDeposit, argNum });
        console.log(this.listClient);
    }
    openAccount(argClient, argNum) {
        let numDeposit = Math.round(Math.random() * 10000000000);
        argClient.deposit.push(numDeposit);
        console.log(argClient.deposit);
        this.listDeposit.push({ numDeposit, argNum });
        console.log(this.listDeposit);
    }
    deposit(argNumDeposit, argNum) {
        const findDeposit = this.listDeposit.find(({ numDeposit }) =>
            numDeposit === argNumDeposit);
        if (findDeposit) {
            findDeposit.argNum += argNum;
            console.log(this.listDeposit);
        }
        else {

            console.log("Неверный номер депозита");
        }

    }
    withdraw(argNumDeposit, argNum) {
        const findDeposit = this.listDeposit.find(({ numDeposit }) =>
            numDeposit === argNumDeposit);
        if (findDeposit) {
            if (findDeposit.argNum < argNum) {
                console.log("Сумма на счету недостаточная");
            }
            else {
                findDeposit.argNum -= argNum;
                console.log(this.listDeposit);
            }
        }
        else {
            console.log("Неверный номер депозита");
        }
    }
    checkBalance(argNumDeposit) {
        const findDeposit = this.listDeposit.find(({ numDeposit }) =>
            numDeposit === argNumDeposit);
        if (findDeposit) {
            console.log(findDeposit.argNum);
        }
        else {
            console.log("Неверный номер депозита");
        }
    }
}

class Client {
    name;
    age;
    deposit;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Client:\n` +
            `name: ${this.name}\n` +
            `age: ${this.age}`);
    }
}

const bank1 = new Bank('Мой Банк');
bank1.displayInfo();
const client1 = new Client("Иван", 25);
client1.displayInfo();
const client2 = new Client("Мария", 30);
client2.displayInfo();
bank1.addClient(client1);
bank1.addClient(client2);
bank1.displayInfo();
console.log(bank1.listClient);
console.log(bank1.listDeposit);
console.log(bank1.listClient.indexOf(client1));
bank1.openAccount(client1, 1000);
bank1.openAccount(client2, 500);
const clientDeposit = client1.deposit[1];
bank1.deposit(123, 100);
bank1.deposit(clientDeposit, 100);
bank1.withdraw(915128, 500);
bank1.withdraw(clientDeposit, 3500);
bank1.withdraw(clientDeposit, 500);
bank1.checkBalance(19628);
bank1.checkBalance(clientDeposit);