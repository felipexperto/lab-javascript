const BASE_URL = 'http://viacep.com.br/ws/';

const getCEP = (adress) => {
  fetch(uri+'SP/Sao Paulo/Flores/json/')
  .then(function(response) {
    response.json() // transforma a resposta em JSON
    .then(function (resp) {
      console.log(resp); // exibe 50 resultados
      return resp.filter((p) => /viela/gi.exec(p.logradouro)); // faz um filtro por endereços que tenham "Viela" no logradouro
    }).then(function(resp) {
      console.log(resp); // exibe 5 resuldos
      return resp.filter((p) => /jardim/gi.exec(p.bairro)); // aplica um filtro por bairros que tenham "Jardim" no nome
    }).then(function(resp) {
      console.log(resp); // exibe 2 resultados
    });
  })
  .catch(function(err) {
    console.error(err);
  });
}

document.addEventListener('DOMContentLoaded', event => getCEP(`${BASE_URL}SP/Sao Paulo/Avenida Paulista/json/`));
