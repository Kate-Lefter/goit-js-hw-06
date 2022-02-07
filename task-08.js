// const form = document.querySelector('form.login-form');


// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit (event) {
//     event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((email, password) => {
//       console.log('onFormSubmit -> email', email);
//       console.log('onFormSubmit -> password', password);
//   });

// }

const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}