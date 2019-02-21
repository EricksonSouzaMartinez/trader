// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
$("#sincronizar").click(function () {
    SyncDadosMercadobitcoin();
    console.log("sincronizando");
});


var valor = [];

function SyncDadosMercadobitcoin() {
    setInterval(function () {
        
        var volume = $(".vol").text();
        var total = (volume);
        if (total) {
            valor.push(total);
             var novoarray = [...new Set(valor)];
         }
        
         var placar = [];
        var score = {
           novoarray           
        }

        placar.push(score);
        var dados = {
            placar: placar
        }
        
        $.post("http://192.168.1.45:3000/placar", dados, function () {
           // console.log("Salvou os Usuarios no servidor");
        }).fail(function () {
            $(".dica").text("Falha de conexão");
        });
    },1000);
}