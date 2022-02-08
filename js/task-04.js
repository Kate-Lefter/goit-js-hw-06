// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



const refs = {
 counterValue: document.querySelector('#value'),
 removeBtn: document.querySelector('#counter').firstElementChild,
 addBtn: document.querySelector('#counter').lastElementChild,
};
let valueEl = 0;

refs.removeBtn.addEventListener('click', () => {
    valueEl -= 1 ;
    apdateValue();
});

refs.addBtn.addEventListener('click', () => {
    valueEl += 1 ;
    apdateValue();
    
});
function apdateValue() {
    refs.counterValue.textContent = valueEl;
  };

 