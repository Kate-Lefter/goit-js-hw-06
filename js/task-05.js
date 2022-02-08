// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name-output. Если инпут пустой,
//   в спане должна отображаться строка "Anonymous".

  const inputNameEl = document.querySelector('#name-input');
  const outputNameEl = document.querySelector('#name-output');
  inputNameEl.addEventListener('input', onInputChange);
  function onInputChange (event) {
    if (event.target.value == "") {
      outputNameEl.textContent = "Anonymous";
  } else {
    outputNameEl.textContent = event.target.value;
  }
  };
  