// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const fontSizeControlEl = document.querySelector('#font-size-control');
const changeSizeTextEl = document.querySelector('#text');
fontSizeControlEl.addEventListener('input', handleInputRange);
function handleInputRange (event) {
    changeSizeTextEl.style.fontSize = event.currentTarget.value + "px";
};