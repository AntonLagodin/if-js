const formEl = document.getElementById('downloadForm');
const url = 'https://fe-student-api.herokuapp.com/api/file';

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fetchOptions = {
    method: 'POST',
    enctype: 'multipart/form-data',
    body: new FormData(formEl),
  };

  try {
    const response = await fetch(url, fetchOptions);
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});
