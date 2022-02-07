const navCategoriesEl = document.querySelector('#categories');
console.log(navCategoriesEl);

const navCategoriesItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navCategoriesItemEl.length}`, navCategoriesItemEl);

navCategoriesItemEl.forEach(function (category) {
    console.log(`Category: `, category.firstElementChild.innerHTML) ;   
    console.log(`Elements: `, category.lastElementChild.children.length);
});

// можно так же textContent = innerHTML;