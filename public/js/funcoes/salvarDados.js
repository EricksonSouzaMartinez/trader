$("#sincronizar").click(function () {
    SyncDadosMercadobitcoin()
});


var valor = [];

function SyncDadosMercadobitcoin() {
    setInterval(function () {
        var preco = $(".last").text();
        if (preco) {
            valor.push(preco);
             var novoarray = [...new Set(valor)];
         }

         //console.log(novoarray)

        var placar = [];
        var score = {
            novoarray
        }

        placar.push(score);
        var dados = {
            placar: placar
        }
        
        $.post("http://localhost:3000/placar", dados, function () {
           // console.log("Salvou os Usuarios no servidor");
        }).fail(function () {
            $(".dica").text("Falha de conexão");
        });
    }, 1000);
}