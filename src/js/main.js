//lesson10
/*import { hotelsInfo } from './arrays/DOM.js';
const homesList = document.getElementById('homes__list');
hotelsInfo.forEach((item) => {
  homesList.innerHTML += `
            <li id = "${item.id}" class="homes__item">
            <img src="${item.imageUrl}" alt="${item.name}" class="homes__image" />
            <h3 class="homes__subtitle">${item.name}</h3>
            <p class="homes__desc">${item.city}, ${item.country}</p>
          </li>`;
}); */

//lesson12
const homesList = document.getElementById('homes__list');
fetch(' https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      homesList.innerHTML += `
            <li id = "${item.id}" class="homes__item">
            <img src="${item.imageUrl}" alt="${item.name}" class="homes__image" />
            <h3 class="homes__subtitle">${item.name}</h3>
            <p class="homes__desc">${item.city}, ${item.country}</p>
          </li>`;
    });
  })
  .catch((err) => console.log(err));
