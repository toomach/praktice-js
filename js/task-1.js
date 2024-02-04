// ----------------дані------------------
// let age = 20;
// console.log(age);
// змінні дані - можна переініціалізувати))

// const name = "Alina";
// console.log(name);
// дані постійна - не можна переініціалізувати

// -----------------типи даних------------------
// let age = 20; number
// const name = "Alina"; string
// const isOpen = true; boolean
// const product = null; object
// let user; undefined
// console.log(typeof user); typeof - показує тип даних

// -----------------арифметичні оператори---------------
// const x = 5;
// const y = 10;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y); залишок від ділення
// console.log(x ** y); піднесення до степеню

// -----------------комбіновані оператори------------------
// let apple = 50;
// apple += 20;
// console.log("Fruit", apple);

// -------------------рядки---------------------------
// const firstName = "Alina";
// const lastName = "Yarosh";
// const fullName = firstName + " " + lastName;
// // console.log(fullName);

// const shablonnuyRyadok = `Her name is ${fullName}.`
// console.log(shablonnuyRyadok);

// const msg = "Hello world";
// console.log(msg.length);
// власивість length визначає довжину рядка з пробілами (всі символи)

// console.log(msg[0]);
// дістати індекс допомагає [2] символи починаються з нуля

// console.log(msg[msg.length - 1]);
// отримуємо останній символ

// --------------перетворення типів в рядки-----------
// console.log(String(7));
// console.log(String(false));
// console.log(String(null));
// console.log(typeof String(undefined));

// -----------------перетворення типів в рядки-------------
// console.log(Namber("3"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));

// --------------------оператори-----------------------
// console.log(5 > 4);
// console.log(5 >= 5);
// console.log(5 >= "4");
// console.log("2" >= "12");
// прирівнює перші індекси
// console.log("jawa" < "Jawa");
// порівнює за першим індексом нижній регістрт > за верхній регіст
// console.log("4" == 4);
// не суворе порівняння, приводить до одного типу
// console.log("4" === 4);
// cуворе порівняння звертає увагу на типи і на значення (використовується в практиці)
// console.log(5 !== 5);
// ! - не, (5 !== 5) пять не дорівнює 5

// ----------------------арифметичні функції---------------
// let width = "13.2px";
// width = Number.parseInt(width);
// залишає ціле число
// width = Number.parseFloat(width);
// залишає цілі і десяті

// width = Math.floor(width);
// округлює число до низу
// width = Math.ceil(width);
// округлює число до верху
// width = Math.round(width);
// математичне округлення числа
// console.log(width);

// --------------------функція-------------------------
// function add(x, y) {
//   console.log(x - y);
// }
// оголошення функції
// add(x, y) - параметри функції

// add(10, 4)
// виклик функції
// add(10, 4) - аргументи функції

// -----------------------поовертання зачення функції------------
// function add(x, y) {
//   const dayTotal = x * 7;
//   return dayTotal * y;
// }

// const alina = add(20, 20);
// const yana = add(20, 10);
// const marco = add(20, 5);

// console.log("alina", alina);
// console.log("yana", yana);
// console.log("marco", marco);
// return - повертає значення функції


function makeTransaction(quantity, pricePerDroid) {
    const totalprice = quantity * pricePerDroid;
    const message = (`You ordered ${quantity} droids worth ${totalprice} credits!`);
    return message;
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"