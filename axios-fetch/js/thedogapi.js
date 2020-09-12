const list = document.querySelector('[data-cardlist]');

function createCard(elem) {
  let item = document.createElement('div');
  item.classList.add('card');
  item.innerHTML = `
  <img class="card__image" src="${elem.url}">
  <h2 class="card__name">${elem.name}</h2>
  <h3 class="card__bredfor">${elem.bredfor}</h3>
  <div class="card__lifespan">${elem.lifespan}</div>
  <div class="card__temperament">${elem.temperament}</div>
  `;
  return item;
}

/*  You can get your 'x-api-key' here:
    https://thedogapi.com/

*/

axiosObj = {
  method: 'get',
  url: 'https://api.thedogapi.com/v1/images/search',
  headers: {
    'x-api-key': '<YOUR_API_KEY_GOES_HERE>'
  }
};

axios(axiosObj)
.then(function (resp) {
  return resp.data[0];
})
.then(function(resp) {
  console.log(resp);
  
  if(resp.breeds[0] == undefined) return;
  
  list.appendChild(createCard({
    url: resp.url,
    name: resp.breeds[0].name,
    bredfor: resp.breeds[0].bred_for,
    lifespan: resp.breeds[0].life_span,
    temperament: resp.breeds[0].temperament
  }));
})
.catch(function(err) {
  console.log(err);
});