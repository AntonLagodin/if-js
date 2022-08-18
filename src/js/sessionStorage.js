//lesson14
const fetchArray = async () => {
  try {
    const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels/popular`);
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

const hotelsArray = sessionStorage.getItem('hotelsArray');

function addHotels(hotelInfo) {
  const homesList = document.getElementById('homes__list');
  hotelInfo.forEach((item) => {
    homesList.innerHTML += `
            <li id = "${item.id}" class="homes__item">
            <img src="${item.imageUrl}" alt="${item.name}" class="homes__image" />
            <h3 class="homes__subtitle">${item.name}</h3>
            <p class="homes__desc">${item.city}, ${item.country}</p>
          </li>`;
  });
}

async function checkSessionStorage() {
  if (hotelsArray === null) {
    const info = await fetchArray();
    sessionStorage.setItem('hotelsArray', JSON.stringify(info));
    addHotels(info);
    return;
  }
  addHotels(JSON.parse(hotelsArray));
}

checkSessionStorage().catch((error) => console.log(error.message));
