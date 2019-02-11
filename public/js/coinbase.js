var corpo = $(".corpo-coinbase");
$("#comecar-coinbase").click(function(){
	setInterval(function(){
	$.get("https://api.pro.coinbase.com/products/BTC-USD/ticker", pegaDadoscoinbase)
	.fail(function(){
    $(".dica").text("Falha de conexão");
	 });
	valorinputcoinbase();
	pegaDolar();
	analisaCoinbase();
	$(".USD-BRL").text($(".price").text() * $(".dolar").text());
	//SyncDados();
	},3000);	
});

function pegaDadoscoinbase(data) {
	var quantidadeNegociadaCoinbase = $(".volume");
	var precoUnitarioCoinbase = $(".price");
	var timeCoinbase = $(".time");
// console.log(data);
	var volume = (data['volume']);
	var price = (data['price']);
	var date =  (data['time']);
	
	quantidadeNegociadaCoinbase.text(volume);
	precoUnitarioCoinbase.text(price);
	timeCoinbase.text(date);
}
function pegaDolar() {
	$.get("https://economia.awesomeapi.com.br/USD-BRL/", pegaDadosDolar)
	.fail(function(){
	$(".dica").text("Falha de conexão");
});
}

function pegaDadosDolar(data) {
var dolar = (data[0]['bid']);
 $(".dolar").text(dolar);
}

function SyncDados() {
	setInterval(function(){
	var quantidadeNegociadaCoinbase = $(".volume").text();
	var precoUnitarioCoinbase = parseInt($(".price").text());
	var precoCoinbase = (precoUnitarioCoinbase);
	var timeCoinbase = $(".time").text();
    var placar = [];   
    var score = {
	  vol: quantidadeNegociadaCoinbase,
		price: precoCoinbase,
		date: timeCoinbase
        }
       placar.push(score);
  var dados = {
       placar: placar
    }  
   $.post("http://localhost:3000/placar", dados, function () {
   //console.log("Salvou os Usuarios no servidor");
     }).fail(function(){
    $(".dica").text("Falha de conexão");
   });
      },100000); 
}
function valorinputcoinbase(){
	resultadoCoinbase =  (parseInt($(".USD-BRL").text()) - parseInt($(".valor-compra-coinbase").val()));
	return resultadoCoinbase;

};

function analisaCoinbase() {
	var diferencaValorCoinbase = valorinputcoinbase();
	if(diferencaValorCoinbase > 100 && diferencaValorCoinbase < 200){
		$(".dica-coinbase").text("ate "+diferencaValorCoinbase+" reais a mais");
		corpo.addClass("orange");
		corpo.removeClass("yelloW");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("blue");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
		corpo.removeClass("gray")	
	}
	if(diferencaValorCoinbase > 200 && diferencaValorCoinbase < 300){
		$(".dica-coinbase").text("ate "+diferencaValorCoinbase+" reais a mais");
		corpo.addClass("yelloW");
		corpo.removeClass("red");
		corpo.removeClass("orange");
		corpo.removeClass("green");
		corpo.removeClass("blue");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
		corpo.removeClass("gray")
	}else if (diferencaValorCoinbase > 300 && diferencaValorCoinbase < 400){
		$(".dica-coinbase").text("ate "+diferencaValorCoinbase+" reais a mais");
		corpo.addClass("blue");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("orange");
		corpo.removeClass("purple");
		corpo.removeClass("purple");
		corpo.removeClass("gray");
	}else if (diferencaValorCoinbase > 400 && diferencaValorCoinbase < 500){
		$(".dica-coinbase").text("ate "+diferencaValorCoinbase+" reais a mais");
		corpo.addClass("purple");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("orange");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("gray");
	}else if (diferencaValorCoinbase > 500 && diferencaValorCoinbase < 600){
		$(".dica-coinbase").text("Ate "+diferencaValorCoinbase+" reais a mais")
		corpo.addClass("gray");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("orange");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("purple");
	}else if (diferencaValorCoinbase > 600 && diferencaValorCoinbase < 700){
		$(".dica-coinbase").text("Ate "+diferencaValorCoinbase+" reais a mais");
		corpo.addClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("orange");
		corpo.removeClass("purple");
		corpo.removeClass("gray");
	}else if(diferencaValorCoinbase > 700){
		$(".dica-coinbase").text("ate "+diferencaValorCoinbase+" reais");
				corpo.addClass("green");
        corpo.removeClass("red");
				corpo.removeClass("yelloW");
				corpo.removeClass("orange");
        corpo.removeClass("blue");
        corpo.removeClass("purple");
        corpo.removeClass("gray");
	}else if(diferencaValorCoinbase < 0 && diferencaValorCoinbase > -100){
		$(".dica-coinbase").text("esta caindo "+diferencaValorCoinbase);
				corpo.addClass("green");
        corpo.removeClass("red");
				corpo.removeClass("yelloW");
				corpo.removeClass("orange");
        corpo.removeClass("blue");
        corpo.removeClass("purple");
        corpo.removeClass("gray");
	}else if(diferencaValorCoinbase < - 100){
		$(".dica-coinbase").text("o valor esta caindo muito"+diferencaValorCoinbase)
		corpo.addClass("gray");
		corpo.removeClass("red");
		corpo.removeClass("green");
		corpo.removeClass("yelloW");
		corpo.removeClass("blue");
		corpo.removeClass("orange");
		corpo.removeClass("purple");
	}	
};