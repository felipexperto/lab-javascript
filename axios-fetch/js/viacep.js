const uri = 'http://viacep.com.br/ws/';

axios.get(uri+'SP/Sao Paulo/Antonio+Faria/json/')
.then(function (resp) {
    return resp.data.filter((p) => /rua/gi.exec(p.logradouro));
}).then(function(resp) {
    return resp.filter((p) => /jardim/gi.exec(p.bairro));
}).then(function(resp) {
    console.log(resp);
});


fetch(uri+'SP/Sao Paulo/Antonio+Faria/json/')
.then(function(response) {
    response.json()
    .then(function (resp) {
        return resp.filter((p) => /rua/gi.exec(p.logradouro));
    }).then(function(resp) {
        return resp.filter((p) => /jardim/gi.exec(p.bairro));
    }).then(function(resp) {
        console.log(resp);
    });
})
.catch(function(err) {
    console.error(err);
});