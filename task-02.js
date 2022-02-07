const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  const ingredientsEl = document.querySelector('#ingredients');
  
  const makeIngredientsEl = ingredients => {
    return ingredients.map(ingredient => {
      const navIngredientsEl = document.createElement('li');
      navIngredientsEl.classList.add('item');
      navIngredientsEl.textContent = ingredient;
  
      return navIngredientsEl;
  });
};

const elements = makeIngredientsEl(ingredients);
ingredientsEl.append(...elements);

  // const elements = ingredients.map(ingredient => {
  //   const navIngredientsEl = document.createElement('li');
  //   navIngredientsEl.textContent = ingredient;

  //   return navIngredientsEl;
  // });

  // console.log(elements);
  // ingredientsEl.append(...elements);

