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

//lesson 11
const input = document.getElementById('guests__input');
const modal = document.getElementById('guests__modal');

const modalVisible = () => {
  modal.style.display = 'block';
};

const modalInvisible = (event) => {
  if (event.target.contains(modal)) {
    modal.style.display = 'none';
  }
};

input.addEventListener('click', modalVisible);
window.addEventListener('click', modalInvisible);

const btnPlus = document.querySelectorAll('.guests__modal-btn--plus');
const btnMinus = document.querySelectorAll('.guests__modal-btn--minus');
const valueField = document.querySelectorAll('.guests__modal-value');

const changeType = {
  plus: 'plus',
  minus: 'minus',
};

const changeValue = (currentValue, type, limit) => {
  let result = currentValue;
  if (currentValue === limit) {
    return result;
  }

  if (type === changeType.plus) {
    result = currentValue + 1;
    return result;
  }

  result = currentValue - 1;
  return result;
};

btnPlus.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const value = +valueField[index].textContent;
    valueField[index].textContent = changeValue(value, changeType.plus, +btn.dataset.max);
  });
});

btnMinus.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const value = +valueField[index].textContent;
    valueField[index].textContent = changeValue(value, changeType.minus, 0);
  });
});

const btnAdd = document.querySelector('.guests__modal-btn--add');
const childrenWrap = document.querySelector('.guests__modal-children-info');
const childrenContainer = document.querySelector('.guests__modal-children-box');
const btnDelete = document.querySelector('.guests__modal-btn--delete');
const child = `<select name="select" class="guests__modal-children-select"> 
  <option value="value1">1 year old</option>
  <option value="value2">2 years old</option>
  <option value="value3">3 years old</option>
  <option value="value4">4 years old</option>
  <option value="value5">5 years old</option>
  <option value="value6">6 years old</option>
  <option value="value7">7 years old</option>
  <option value="value8">8 years old</option>
  <option value="value9">9 years old</option>
  <option value="value10">10 years old</option>
  <option value="value11">11 years old</option>
  <option value="value12">12 years old</option>
  <option value="value13">13 years old</option>
  <option value="value14">14 years old</option>
  <option value="value15">15 years old</option>
  <option value="value16">16 years old</option>
  <option value="value17">17 years old</option>  
</select>`;

btnAdd.addEventListener('click', () => {
  const allChildren = document.querySelectorAll('.guests__modal-children-select').length;

  if (allChildren === +btnAdd.dataset.max) {
    return;
  }
  childrenWrap.style.display = 'block';
  childrenContainer.insertAdjacentHTML('afterbegin', child);
});

btnDelete.addEventListener('click', () => {
  const allChildren = document.querySelectorAll('.guests__modal-children-select');

  if (allChildren.length > 0) {
    allChildren[allChildren.length - 1].remove();
  }

  if (allChildren.length === 1) {
    childrenWrap.style.display = 'none';
  }
});

//lesson13

const searchForm = document.getElementById('search__form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = 'https://fe-student-api.herokuapp.com/api/hotels?search';
  const searchDestination = document.getElementById('search__destination');
  const searchDestinationValue = searchDestination.value;
  const availableHotels = document.getElementById('available__hotels');

  fetch(`${url} = ${searchDestinationValue}`)
    .then((response) => response.json())
    .then((hotels) => {
      hotels.forEach((hotel) => {
        availableHotels.innerHTML += `
                    <li id = "${hotel.id}" class="available__hotels-item">
                    <img src="${hotel.imageUrl}" alt="${hotel.name}" class="available__hotels-image" />
                    <h3 class="available__hotels-subtitle">${hotel.name}</h3>
                    <p class="available__hotels-desc">${hotel.city}, ${hotel.country}</p>
                    </li>`;
      });
    })
    .catch((err) => console.log(err));
});
