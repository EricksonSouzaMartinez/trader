function dados() {
    console.log("Buscando dados");
    $.get("http://192.168.1.45:3000/placar", valorSalvo)
        .fail(function () {
            $(".dica").text("Falha de conexão");
        });
}

function valorSalvo(date) {
    var novo = date[0]['novoarray'];
    var dadoDoArray = [...new Set(novo)];
    var last = dadoDoArray;
    for (let i = 0; i < last.length; i++) {
        alert(last[i]);;
    }
}
