(() => {

// Задаємо початкову кількість кнопок та початкове значення
let numberOfButtons = 10;
let buttonValue = 0;

// Функція формування масиву кнопок та промальовування на сторінці
function renderButtons() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.innerHTML = "";
    let divContent;
    for (let i = 0; i < numberOfButtons; i++ ) {
        if (i === buttonValue) {divContent = '<div><button id="push_button" type="button" value="' + i + '"></button></div>';}
        else {divContent = '<div><button type="button" value="' + i + '"></button></div>';}
        buttonsContainer.innerHTML += divContent;
    }
}

// Функція промальовування початкового значення на сторінці
(function () {
const textContainer = document.querySelector('.text');
textContainer.innerHTML = buttonValue; } ());

// Функція отримання значення кнопки після натискання
function getValue(btn) {
    const currentValue = btn.target.value;
    if (currentValue !== undefined) buttonValue = parseInt(currentValue);
    const textContainer = document.querySelector('.text');
    textContainer.innerHTML = buttonValue;
    renderButtons();
}

// Функція завдання нової кількості кнопок на сторінці
function setTheNumberOfButtons() {
    let newNumberOfButtons = document.querySelector('.inputValue #inputValue__field').value;
    numberOfButtons = parseInt(newNumberOfButtons);
    renderButtons();
}

renderButtons();

// Обробник натискання кнопки Display та виклик функції завдання нової кількості кнопок
const setTheNumber = document.querySelector('.inputValue #inputValue__submit');
setTheNumber.addEventListener('click', setTheNumberOfButtons);

// Обробник натискання кнопки та овиклик функції отримання значення кнопки після натискання
const selectButton = document.querySelector('.buttons');
selectButton.addEventListener('click', getValue);

}) ();
