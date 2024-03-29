'use strict';
/////////////////////////////Розгалуження/////////////////////////////////

// ============================Інструкція if=============================
// Інструкція if дозволяє виконати певний блок коду тільки в тому випадку,
// якщо задана умова істинна(тобто приймає значення true).
/////////////////////////
////////////////////////
// Доповни код функції checkAge(age) так, щоб функція повертала рядок
// "You are an adult", якщо значення параметра age більше або дорівнює 18.
// Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//     if (age >= 18) {
//         return `You are an adult`;
//     }
// }

// console.log(checkAge(18));
// console.log(checkAge(11));

// =========================Інструкція if...else==========================
// Синтаксис інструкції if можна доповнити блоком else для визначення
// альтернативних варіантів виконання коду.
//////////////////////////
/////////////////////////
// Використовуючи розгалуження, доповни код функції таким чином, щоб:
// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на
// складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will
// contact you"

// function checkStorage(available, ordered) {
//     if (available > ordered) {
//         return `Order is processed, our manager will contact you`;
//     } else {
//         return `Not enough goods in stock`;
// }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));

//==========================Блок else...if================================
// Конструкція else...if розширює конструкцію if...else і дозволяє перевірити
// та зреагувати на виконання або невиконання кількох умов.Це корисно, коли
// ми маємо більше однієї умови.
/////////////////////////
/////////////////////////
// Якщо в замовленні ще немає товарів, тобто значення параметра ordered
// дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція
// повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager
// will contact you".

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return `There are no products in the order!`;
//     } else if (available > ordered) {
//         return `Your order is too large, there are not enough items in stock!`;
//     } else {
//         return `The order is accepted, our manager will contact you`;
//  }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

//=======================Тернарний оператор===============================
// Тернарний оператор — це коротша синтаксична заміна інструкції if...else.
// Тернарний оператор рекомендується використовувати у найпростіших випадках
// операції присвоєння чи повернення.Однак не рекомендується використовувати
// його для складних розгалужень, оскільки це може ускладнити читання та
// розуміння коду.
////////////////////////
////////////////////////
// Якщо значення password і correctPassword збігаються, функція повертала
// рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? `Access granted` : `Access denied, wrong password!`;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

//======================Оператор switch==================================
// Оператор switch дозволяє виконувати різні дії залежно від значення
// виразу.Використання switch є більш компактним і зручним способом для
// порівняння виразів з кількома варіантами, ніж інструкції if...else та
// else...if.

////////////////////////
////////////////////////
// Якщо значення параметра type — це рядок:
// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь - якого іншого значення параметра type повертається рядок
// "Invalid subscription type!".

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             console.log(0);
//             return 0;
//             break;
//         case "professional":
//             console.log(20);
//             return 20;
//             break;
//         case "organization":
//             console.log(50);
//             return 50;
//             break;
//         default:
//             console.log("Invalid subscription type!");
//             return "Invalid subscription type!";
//     }
// }

// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");
// getSubscriptionPrice("random");
// getSubscriptionPrice("premium");

// ======================Логічні оператори=============================
//-----------------------Перетворення типів: логічне-------------------
// Логічне перетворення типів означає приведення значення будь - якого типу
// даних у логічне(булеве) значення true або false.Існує кілька правил, які
// визначають, які значення перетворюються на true, а які на false.
// Числа
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true

// Рядки
// Порожній рядок("") приводиться до false.Будь - які інші не пусті рядки
// приводяться до true.

// ----------------------Логічне «І»------------------------------------
// Оператор "І"(&&) наводить усі операнди до логічного типу(true або false)
// і повертає значення одного з них.Дозволяє перевірити, чи виконані всі
// умови у виразі.
//     Оператор “І” зліва направо перевіряє почергово обидва операнди на
// істинність та повертає або значення останнього істинного(тільки правого)
// операнда, або першого хибного(лівого чи правого), на якому він запнувся.

// true
// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"
// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"
// console.log(3 && true); // true
// console.log(true && 3); // 3
// false
// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0
// console.log(3 && false); // false
// console.log(false && 3); // false
// console.log(0 && ""); // 0
// console.log("" && 0); // ""

////////////////////////////
///////////////////////////
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином,
// щоб вона повертала результат входження number у числовий проміжок
// від start до end включно.Тобто число повинно бути одночасно і більшим
// або дорівнювати start, і меншим або дорівнювати end.Результатом виклику
// функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// --------------------Логічне «АБО»---------------------------------------
// Як тільки логічний оператор “АБО” знайшов операнд, який перетворюється
// на true, він зупиняється та повертає його значення.
// Якщо всі операнди перетворюються на false, результатом буде значення
// крайнього правого операнда.

// // true
// console.log(5 || 3); // 5
// console.log(3 || 5); // 3
// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"
// // false
// console.log(0 || false); // false
// console.log(false || 0); // 0
// console.log(null || ""); // ""
// console.log("" || null); // null

/////////////////////////
////////////////////////
// Функція checkAccess(subType) перевіряє, чи може користувач отримати
// доступ до контенту.Перевірка відбувається за типом передплати.
// Використовуючи оператор "АБО", доповни код функції так, щоб якщо
// значення параметра subType дорівнює рядкам "pro" або "vip", то функція
// повертала true і користувач отримував доступ.В іншому випадку повертала false.

// function checkAccess(subType) {
//     if (subType === "pro" || subType === "vip") {
//         return true;
//     } else {
//         return false;
// }
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));

////////////////////////
///////////////////////
// Функція toggleModalVisibility(isVisible) перемикає стан відображення
// модального вікна.У параметрі isVisible вона очікує буль true або
// false.Доповни код функції так, щоб вона повертала протилежне значення
// цього параметра.

// function toggleModalVisibility(isVisible) {
// return !isVisible
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// =========================Методи рядків===============================
//--------------------------Метод slice()-------------------------------
// str.slice(startIndex, endIndex)
// Метод slice() копіює підрядок із вихідного рядка, починаючи з індексу
// startIndex і до(не включаючи) індексу endIndex, і повертає цю копію як
// новий рядок.
// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'

/////////////////////////////
////////////////////////////
// Доповни код функції так, щоб вона повертала новий підрядок, який
// починається від початку string і має довжину length.
// function getSubstring(string, length) {
//     return string.slice(string, length);
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

//-------------------Методи toLowerCase() і toUpperCase()------------------
// Методи рядків toLowerCase() та toUpperCase() використовуються для зміни
// регістру символів у рядку.Обидва методи не змінюють вихідний рядок, а
// повертають новий рядок у відповідному регістрі.
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

///////////////////////////
///////////////////////////
// Якщо значення параметра to — це рядок "upper", то функція повертала копію
// рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//     if (to === "lower") {
//         return input.toLowerCase();
//     } else {
//         return input.toUpperCase();
// }
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "upper"));

// ----------------------Метод includes()---------------------------------
// Метод рядків includes() використовується для перевірки наявності підрядка
// у рядку.Він повертає логічне значення true, якщо підрядок знайдено,
// і false, якщо підрядок відсутній.
// Регістр символів у рядку й підрядку має значення.Літера a, наприклад, не
// дорівнює літері A.
// const username = 'Jacob Mercer';
// console.log(username.includes('Jacob')); // true
// console.log(username.includes('jacob')); // false
// console.log(username.includes('Mercer')); // true
// console.log(username.includes('mercer')); // false

//////////////////////
/////////////////////
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки
// входження імені(параметр firstName), у повне ім'я (параметр fullName).
// Врахуй, що регістр символів в параметрах fullName і firstName наперед не
// відомий.Перед перевіркою входження не забудь прирівняти їх до однакового
// регістру.

// function checkForName(fullName, firstName) {
//     return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));
// console.log(checkForName("Caty Stars", "Caty"));
// console.log(checkForName("Caty Stars", "cAtY"));
// console.log(checkForName("Caty Stars", "Andromeda"));

//------------------Методи startsWith() і endsWith()------------------------
// Методи startsWith() і endsWith() призначені для перевірки початку й
// закінчення рядка відповідно.Вони повертають булеве значення true або false,
// залежно від того, чи відповідає початок або кінець рядка заданому значенню.
// const str = "Hello, world!";
// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("hello")); // false (метод чутливий до регістру)
// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

////////////////////////
///////////////////////
// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі
// ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//     return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));
// console.log(checkFileExtension("app.js", ".html"));
// console.log(checkFileExtension("index.html", ".html"));
// console.log(checkFileExtension("index.html", ".css"));
// console.log(checkFileExtension("index.html", ".js"));

//------------------------Метод indexOf()----------------------------------
// Метод indexOf() використовується для пошуку першого входження підрядка в
// рядок.Він повертає:
// індекс першого входження(індекс першого символу) підрядка, якщо він
// знайдений або -1, якщо підрядок не виявлено
// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8
// const indexx = message.indexOf("hello");
// console.log(index); // -1

//////////////////////////////
/////////////////////////////
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
// Вона перевіряла наявність розширення в імені файлу(назва розширення
// відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок,
// що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//     console.log(file.indexOf(".") !== -1);
//     // return file.indexOf(".") !== -1 ? file.slice(0, file.indexOf(".")) : file;
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.html"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index"));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = ["Spacious apartment in the city center", 4, 2153];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     // console.log(key);
//     console.log(apartment[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];

// for (const key in apartment) {
//     console.log(apartment[key]);
// }


function countTotalSalary(salaries) {
  let totalSalary = 0;
  const = Object.values(salaries);
  
  for (const values of salaries) {
    totalSalary = 
  }
}


countTotalSalary({})
countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) 





