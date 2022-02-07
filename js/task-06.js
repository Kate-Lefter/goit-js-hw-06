// 1 Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2 Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.


document.getElementById("validation-input").onblur = function() {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length) { 
      this.classList.remove('valid');
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
      this.classList.add('valid');
    }
  };




// let inputEl = document.querySelector('#validation-input');

// let inputLength = inputEl.dataset.length;

// const input = document.querySelector('input');
// inputEl.addEventListener('change', e => {
//   const text = e.target.value;

//   if (text.length === +inputLength) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
//   }
// });
// ---------------------------------------------------------
// validationInputEl.classList.remove("invalid", "valid");
// let addClass = "invalid";
// if (text.length === +inputLength) addClass = "valid";
// inputEl.classList.add(addClass);

// if (text.length === +inputLength) inputEl.className = "valid";
// else inputEl.className = "invalid";

// --------------------------------------------------------
//   P.s. я не сама к этом пришла, google  в помощь.