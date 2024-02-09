'use strict'; // Код у суворому режимі

/////////////////Змінні та типи. Основи функції/////////////////////

// -----------------Метод console.log()-----------------------------
// console.log("Jacob Mercer");
// console.log(26);

// ===================Змінні та типи даних==========================
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);

// Для оголошення змінної, якій згодом можна задати нове значення,
// використовується ключове слово let.

// Змінним, оголошеним через let, необов'язково відразу задавати значення.
// У разі оголошення змінної без значення, змінна ініціалізується зі
// спеціальним значенням undefined(англ.не визначено).
// let pricePerItem = 2000;
// pricePerItem = 3500;
// let productName = "Droid";
// productName = "Repair droid";
// console.log(pricePerItem);
// console.log(productName);

// -----------------------Типи даних-------------------------------
// const topSpeed = 160;
// const distance  = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// let value = null;
// // null насправді є примітивним значенням, а не об'єктом.
// let undefined;
// console.log(typeof topSpeed);
// console.log(typeof distance);
// console.log(typeof login);
// console.log(typeof isOnline);
// console.log(typeof isAdmin);
// console.log(typeof value);
// console.log(typeof undefined);
// // Оператор typeof використовується для визначення типу даних значення або виразу.

// -----------------------Арифметичні операції---------------------
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// ----------------------Комбіновані оператори---------------------
// Додавання: +=. Приклад: x += y еквівалентно x = x + y
// Віднімання: -=. Приклад: x -= y еквівалентно x = x - y
// Множення: *=. Приклад: x *= y еквівалентно x = x * y
// Ділення: /=. Приклад: x /= y еквівалентно x = x / y
// Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y

// ==========================Рядки================================
// Конкатенація рядків
// Якщо застосувати оператор + до рядка та будь - якого іншого типу
// даних, результатом буде новий рядок, що містить об'єднання вихідних
// значень.Це називається конкатенація(склеювання).

////////////////////////
////////////////////////
// Оголоси змінну message.Використовуючи конкатенацію рядків,
// задай їй наступне значення — рядок привітання користувача зі
// зверненням по імені.Ім'я зберігається в змінній username.
// Повідомлення привітання має виглядати так: "Welcome Poly!",
// де Poly — це значення змінної username.Зверни увагу, що пробіл має
// відноситися до рядка "Welcome "

// const username = "Poly";
// console.log("Welcom " + username);

// --------------------Перетворення типів: рядки------------------
// Явне перетворення типів
// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// Неявне перетворення типів відбувається автоматично під час виконання
// операцій або обчислень.Наприклад, якщо виконується операція додавання(+)
// між рядком та іншим типом даних, JavaScript автоматично перетворює
// значення операнда на рядок і виконує конкатенацію рядків.
// Ось приклади неявного перетворення всіх примітивних типів під час
// конкатенації рядків:
// console.log("5" + 3); // "53"
// console.log("5" + true); // "5true"
// console.log("5" + false); // "5false"
// console.log("5" + null); // "5null"
// console.log("5" + undefined); // "5undefined"

// ----------------------Шаблонні рядки---------------------------
// Шаблонні рядки дозволяють підставляти значення змінних безпосередньо
// всередині рядка за допомогою синтаксису інтерполяції ${ змінна }.

/////////////////////////
/////////////////////////
// Оголоси змінну message і запиши в неї повідомлення про покупку.
// Це буде рядок у форматі: "You picked <назва товару>, price per item
// is < ціна товару > credits", де
// <назва товару> — це значення змінної productName
// <ціна товару> — це значення змінної pricePerItem
// Використовуй синтаксис шаблонних рядків.Уникай зайвих символів
// (пробілів, коми або крапки, що не передбачені вмістом рядка).

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//////////////////////////
//////////////////////////
// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати(ціна одного дроїда
// помножена на кількість дроїдів у замовленні, плюс вартість доставки)
// message - повідомлення про стан замовлення у форматі "You ordered
// droids worth < total price > credits"

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);

//////////////////////////
//////////////////////////
// Змінна username зберігає рядок з іменем користувача.Оголоси змінну
// message та за допомогою синтаксису шаблонних рядків доповни код так, щоб
// в ній зберігався рядок наступного формату: "Username <name> is <length>
// characters long", в якому < name > це ім'я користувача зі змінної
// username, а < length > це його довжина.

// let username = "Poly";
// let message = `Username ${"Poly"} is ${"Poly".length} characters long`;
// console.log(message);

// =======================Оператори порівняння=======================
/////////////////////////
////////////////////////
// Оголоси змінну isAdult та задай їй результат перевірки значення
// змінної age.Використай оператори порівняння та доповни код так,
// щоб значенням isAdult було true, якщо вік користувача більше або
// дорівнює 18 та false, якщо менше 18.

// const age = 20;
// const isAdult = age >= 18;
// console.log(isAdult);

// -----------------------Оператори рівності-------------------------
////////////////////////
///////////////////////
// Оголоси змінну isValid і задай їй значенням результат перевірки рівності
// паролей в змінних correctPassword і userPassword.
// Якщо паролі співпадають (сувора рівність), значення isValid має бути true
// Якщо паролі не співпадають, значення isValid має бути false

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid);

// ------------------------Перетворення типів: числа-----------------
// // Явне перетворення типів
// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// // true завжди приводиться до 1;
// // false , null і "" завжди приводяться до 0.

// // Якщо неможливо привести значення до числа, результатом перетворення
// // буде спеціальне значення NaN(Not a Number).Ось кілька прикладів, коли
// // результатом перетворення буде NaN.
// console.log(Number(undefined)); // NaN
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN

// Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.
// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4
// + біля рядкових операндів викликає їх з'єднання (конкатинацію).

// -----------------------Перетворення рядків у числа----------------
// Метод Number.parseInt()
// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("5cm")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("cm5")); // NaN
// console.log(Number.parseInt("")); // NaN
// console.log(Number.parseInt("qweqwe")); // NaN

// Метод Number.parseFloat()
// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN

///////////////////////////
//////////////////////////
// Змінна value містить величину у вигляді рядка, що складається з
// числової частини та одиниці виміру.Наприклад, 24.5px, 14cm, 20.3vh тощо.
// Оголоси змінну numerical і доповни код таким чином, щоб:
// Якщо це можливо, значенням змінної numerical буде число з плаваючою
// крапкою, що утворилось з рядка змінної value
// В іншому випадку, значенням numerical буде NaN.

// const value = "24.5px";
// const numerical = Number.parseFloat(value);
// console.log(numerical);

// ---------------------Арифметичні функції------------------------
// Клас Math є вбудованим класом JavaScript.Цей клас надає набір методів
// для виконання математичних операцій та роботи з числами.

// Math.floor(num): повертає найближче ціле число, яке є меншим або
// дорівнює вказаному числу num.Наприклад:
// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num): повертає найближче ціле число, яке є більшим, або
// дорівнює зазначеному числу num.Наприклад:
// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2

// Math.round(num): повертає значення числа після округлення до
// найближчого цілого.
// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2

// Math.max(num1, num2, ...): повертає найбільше число з набору
// переданих чисел.
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...): повертає найменше число з набору
// переданих чисел.
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.random(): повертає випадкове число в діапазоні від
// 0(включно) до 1(за винятком).
// console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294

// Це лише деякі методи класу Math.Він також надає методи для
// тригонометричних функцій, логарифмів та інших математичних
// операцій.Ви можете звернутися до документації JavaScript для
// отримання повного списку методів класу Math і більш детального
// опису кожного з них.

// --------------------Дробове число------------------------------
// При виконанні операцій з дробовими числами можуть виникати неточності
// через внутрішнє представлення чисел у пам'яті комп'ютера.
// Як виправити цю проблему?

// // Підхід 1.
// Помножити числа на досить велике число (наприклад, 10 або 100).
// Виконати додавання.
// Розділити результат на те саме число, щоб повернути його до початкового масштабу.
// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// // Підхід 2.
// Використовувати метод числа toFixed() для округлення результату до певної
// кількості знаків після крапки.
// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  ”5.00”
// console.log((8.762195).toFixed(4));  //  “8.7622”

// ========================Основи функцій=========================
//////////////////////////
/////////////////////////
// function sayHi() {
// console.log("Hello, this is my first function!");
// }

// sayHi();

//////////////////////////
/////////////////////////
// Функція add повинна вміти додавати три числа і виводити результат у
// консоль.Оголоси для функції add три параметри: a, b і c, які будуть
// отримувати значення з аргументів, під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition
// result equals < result > ", де < result > - це сума переданих чисел.

// function add(a, b, c) {
// console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// -----------------------Повернення значення----------------------
// Оператор return використовується для повернення значення з тіла функції
// назад у код, у місце її виклику.Коли інтерпретатор зустрічає оператор
// return, він негайно виходить із функції(припиняє її виконання) і
// повертає вказане після return значення в місце виклику функції.

// Якщо в тілі функції відсутній оператор return або він не вказує на
// конкретне значення, функція поверне спеціальне значення undefined.

////////////////////////////
///////////////////////////
// Доповни код функції add таким чином, щоб вона повертала результат
// дoбуток значень трьох параметрів: a, b і c.

// console.log(add);
// function add(a, b, c) {
//     return a * b * c;
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

///////////////////////////
//////////////////////////
// Функція makeMessage(name, price) створює і повертає повідомлення про
// покупку.Вона оголошує два параметри, значення яких будуть
// задаватися під час її виклику.
// name - назва товару
// price - ціна товару

// function makeMessage(name, price) {
//     return `You picked ${name}, price per item is ${price} credits`;
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);
// console.log(makeMessage('Radar', 6150));

////////////////////////////
////////////////////////////
// Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки.
// Вона приймає два параметри, значення яких будуть задаватися під час
// її виклику.
// orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
// pricePerItem - другий параметр, ціна одиниці товару.
// Функція повинна повертати загальну суму покупки - результат
// множення кількості товарів на ціну одного.

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     return orderedQuantity * pricePerItem;
// }

// calculateTotalPrice(5, 100);
// console.log(calculateTotalPrice(5, 100));

/////////////////////////////
/////////////////////////////
// function makeTransaction(quantity, pricePerDroid) {
//     return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

/////////////////////////////
/////////////////////////////
// function getShippingMessage(country, price, deliveryFee) {
//     return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

////////////////////////////
////////////////////////////
// function getElementWidth(content, padding, border) {
//     const boxSizing = Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2;
//     return boxSizing;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

