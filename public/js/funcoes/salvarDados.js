$("#sincronizar").click(function () {
    SyncDadosMercadobitcoin()
});

function SyncDadosMercadobitcoin() {
    setInterval(function () {
        var placar = [];
        var score = {
            valores: inserirDados()
        }

        placar.push(score);
        var dados = {
            placar: placar
        }
        
        $.post("http://localhost:3000/placar", dados, function () {
            //console.log("Salvou os Usuarios no servidor");
        }).fail(function () {
            $(".dica").text("Falha de conexão");
        });
    }, 1000);
}