// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let valueEl = Number(document.querySelector('#value').textContent);


const counterValue = document.querySelector('#value');
const removeBtn = document.querySelector('#counter').firstElementChild;
const addBtn = document.querySelector('#counter').lastElementChild;

removeBtn.addEventListener('click', event => {
    valueEl -= 1 ;
    console.log(valueEl);
    counterValue.innerText = valueEl;
});

addBtn.addEventListener('click', event => {
    valueEl += 1 ;
    console.log(valueEl);
    counterValue.innerText = valueEl;
    
});

