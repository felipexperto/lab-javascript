
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

const uri = 'http://viacep.com.br/ws/';

// axios.get(uri+'SP/Sao Paulo/Antonio+Faria/json/')
// .then(function (resp) {
//     return resp.data.filter((p) => /rua/gi.exec(p.logradouro));
// }).then(function(resp) {
//     return resp.filter((p) => /jardim/gi.exec(p.bairro));
// }).then(function(resp) {
//     console.log(resp);
// });


// fetch(uri+'SP/Sao Paulo/Antonio+Faria/json/')
// .then(function(response) {
//     response.json()
//     .then(function (resp) {
//         return resp.filter((p) => /rua/gi.exec(p.logradouro));
//     }).then(function(resp) {
//         return resp.filter((p) => /jardim/gi.exec(p.bairro));
//     }).then(function(resp) {
//         console.log(resp);
//     });
// })
// .catch(function(err) {
//     console.error(err);
// });