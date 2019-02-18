// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
var valor = [];
function inserirDados() {    
    var preco = $(".last").text();

    if (preco) {
       valor.push(preco);
        var novoarray = [...new Set(valor)];
        //console.log(novoarray);
    }
    //console.log(valor);
    //console.log(novoarray);
    return novoarray;
}