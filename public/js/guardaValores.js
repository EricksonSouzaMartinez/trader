// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
function getValor() {
    var valor = [];
    return valor;
}

function setPreco() {
    var preco = parseInt($(".last").text());
    return preco;
}
let valor = getValor();
var preco = setPreco();

var existe = valor.indexOf(preco) = preco;

function inserirDados() {
    if (existe) {
        // console.log("igual");
    } else {
        if (preco) {
            valor[valor.length] = preco;
            console.log(valor);
        }
    }
}