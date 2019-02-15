var mercadobitcoin = $(".corpo-mercadobitcoin");
$("#comecar-mercadobitcoin").click(function () {
	setInterval(function () {
		$.get("https://www.mercadobitcoin.net/api/BTC/ticker/", pegaDadosmercadobitcoin)
			.fail(function () {
				$(".dica").text("Falha de conexão");
			});
		valorinputMercadobitcoin();
		analisaMercadobitcoin();
		inserirDados();
	}, 2000);

});
//https://www.mercadobitcoin.net/api-doc/

function pegaDadosmercadobitcoin(data) {
	var maiorpreco = $(".high");
	var menorPreco = $(".low");
	var quantidadeNegociada = $(".vol");
	var precoUnitario = $(".last");
	var maiorPrecodeOferta = $(".buy");
	var menorPrecodeOferta = $(".sell");
	var time = $(".date");

	var high = (data.ticker['high']);
	var low = (data.ticker['low']);
	var vol = (data.ticker['vol']);
	var last = (data.ticker['last']);
	var buy = (data.ticker['buy']);
	var sell = (data.ticker['sell']);
	var date = obterHora();

	maiorpreco.text(high);
	menorPreco.text(low);
	quantidadeNegociada.text(vol);
	precoUnitario.text(last);
	maiorPrecodeOferta.text(buy);
	menorPrecodeOferta.text(sell);
	time.text(date);

	var convert = $(".date").text();
	var timestampIn = convert * 1000;
}

function obterHora() {
	var data = new Date();
	var dia = data.getDate();
	var mes = data.getMonth() + 1;
	var ano = data.getFullYear();
	var hora = data.getHours();
	var minuto = data.getMinutes();
	var informacoes = (dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto);
	return informacoes;
}

function valorinputMercadobitcoin() {
	resultado = parseInt($(".last").text()) - parseInt($(".valor-compra-mercadobitcoin").val());
	//console.log(resultado);
	return resultado;
};

function analisaMercadobitcoin() {
	var diferencaValormercadobitcoin = valorinputMercadobitcoin();
	if (diferencaValormercadobitcoin > 0 && diferencaValormercadobitcoin < 200) {
		$(".dica-mercadobitcoin").text("ate " + diferencaValormercadobitcoin + " reais a mais");

		mercadobitcoin.addClass("orange");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("green");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("purple");
		mercadobitcoin.removeClass("gray")
	}
	if (diferencaValormercadobitcoin > 200 && diferencaValormercadobitcoin < 300) {
		$(".dica-mercadobitcoin").text("ate " + diferencaValormercadobitcoin + " reais a mais");
		mercadobitcoin.addClass("yelloW");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("green");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("purple");
		mercadobitcoin.removeClass("gray")
	} else if (diferencaValormercadobitcoin > 300 && diferencaValormercadobitcoin < 400) {
		$(".dica-mercadobitcoin").text("ate " + diferencaValormercadobitcoin + " reais a mais");
		mercadobitcoin.addClass("blue");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("green");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("purple");
		mercadobitcoin.removeClass("purple");
		mercadobitcoin.removeClass("gray");
	} else if (diferencaValormercadobitcoin > 400 && diferencaValormercadobitcoin < 500) {
		$(".dica-mercadobitcoin").text("ate " + diferencaValormercadobitcoin + " reais a mais");
		mercadobitcoin.addClass("purple");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("green");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("gray");
	} else if (diferencaValormercadobitcoin > 500 && diferencaValormercadobitcoin < 600) {
		$(".dica-mercadobitcoin").text("Ate " + diferencaValormercadobitcoin + " reais a mais")
		mercadobitcoin.addClass("gray");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("green");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("purple");
	} else if (diferencaValormercadobitcoin > 600 && diferencaValormercadobitcoin < 700) {
		//console.log(precoDaCompra);
		$(".dica-mercadobitcoin").text("Ate " + diferencaValormercadobitcoin + " reais a mais");
		mercadobitcoin.addClass("red");
		mercadobitcoin.removeClass("green");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("purple");
		mercadobitcoin.removeClass("gray");
	} else if (diferencaValormercadobitcoin > 700) {
		$(".dica-mercadobitcoin").text("ate " + diferencaValormercadobitcoin + " reais");
		mercadobitcoin.addClass("Violet");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("purple");
		mercadobitcoin.removeClass("gray");
	} else if (diferencaValormercadobitcoin < 0 && diferencaValormercadobitcoin > -100) {
		$(".dica-mercadobitcoin").text("esta caindo " + diferencaValormercadobitcoin);
		alert("Passou");
		mercadobitcoin.addClass("green");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("purple");
		mercadobitcoin.removeClass("gray");
	} else if (diferencaValormercadobitcoin < -200) {
		$(".dica-mercadobitcoin").text("o valor esta caindo muito" + diferencaValormercadobitcoin);
		alert("Caiu" + diferencaValormercadobitcoin);
		mercadobitcoin.addClass("gray");
		mercadobitcoin.removeClass("red");
		mercadobitcoin.removeClass("green");
		mercadobitcoin.removeClass("yelloW");
		mercadobitcoin.removeClass("blue");
		mercadobitcoin.removeClass("orange");
		mercadobitcoin.removeClass("purple");
	}
};
