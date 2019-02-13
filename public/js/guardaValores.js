// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
var valor = [];

function setPreco(){
var preco = parseInt($(".last").text());
return preco;
}


valor.unshift(setPreco()); // seta no inicio do array

valor.push(setPreco()); // seta no final do array