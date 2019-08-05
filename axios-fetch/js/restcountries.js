const r = document.querySelector('#resultado');

axios.get('https://restcountries.eu/rest/v2/all')
.then(function (response) {
    return response.data.filter((item) => /South America/gi.exec(item.subregion));
})
.then(function (response) {
    response.map((item) => {
        let bandeira = document.createElement('img');
        bandeira.src = item.flag;
        r.appendChild(bandeira);
    });
});