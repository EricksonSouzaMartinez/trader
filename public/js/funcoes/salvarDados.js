$("#sincronizar").click(function () {
    SyncDadosMercadobitcoin()
});
var valor = [];
function SyncDadosMercadobitcoin() {
    setInterval(function () {
        var valor = [];
        var preco = $(".last").text();
        function inserirDados() {            
            if (preco) {
                valor.push(preco);               
                var novoarray = [...new Set(valor)];               
            }
            return novoarray;
        }

        var placar = [];
        var score = {
            valore: inserirDados()
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