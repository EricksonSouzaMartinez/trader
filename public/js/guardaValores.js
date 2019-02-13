function guardandoDados(){
    valor = [];
    preco = parseInt($(".last").text());
    valor.push(preco);
    valor.push(preco);
    valor[valor.length] = parseInt($(".last").text());
    valor.push(preco);
    valor[valor.length] = parseInt($(".last").text());
    return valor;
}