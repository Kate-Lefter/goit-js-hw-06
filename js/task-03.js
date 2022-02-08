const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
// ----------внесла корректировки-----------------------
  const navImagesEl = document.querySelector('.gallery');
  navImagesEl.style.listStyle = "none";

  const navListImagesEl = images.map(
    ({ url, alt }) =>
      `<li><img src = '${url}' alt = '${alt}' width = '364' height = '204'></li>`
  )
  .join("");
  navImagesEl.insertAdjacentHTML("afterbegin", navListImagesEl);



  //   const imagesEl = images.map(image => {
  //     const navListImagesEl = document.createElement('li');
  //     const listImagesEl = document.createElement('img');
  //     listImagesEl.setAttribute('srs', image.url);
  //     listImagesEl.setAttribute('alt', image.alt);
  //     // listImagesEl.classList.add('item');
  //     listImagesEl.classList.add('width', 'height');
  //     navListImagesEl.append(listImagesEl);
  //     return navListImagesEl;
  //   });
  

  // navImagesEl.insertAdjacentHTML('afterbegin', imagesEl);
  // console.log(navImagesEl);


  // ---------этот вариант не получается (((
  