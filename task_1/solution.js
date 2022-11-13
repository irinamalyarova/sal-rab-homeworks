function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину
	let message = productName + " " + "за" + " " + productPrice + " теперь в корзине!";
   	console.log(message);
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    // создайте переменную newValue
	let newValue;
    // присвойте ей значение oldValue
	newValue = oldValue;
	    // увеличьте значение newValue на 1
	newValue += 1;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
	let newSum;
	newSum = oldSum+difference;
	
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
	let newSumText;
	
    // замените склеивание, используемое в newSumText на шаблонную строку
	newSumText = `${newSum} ₽`;

    // Конец решения задания №1.3.

    return newSumText;
}

