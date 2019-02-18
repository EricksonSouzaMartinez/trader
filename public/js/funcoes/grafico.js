function novoX() {
	x = 0;
	return x;
}
$("#ver-grafico").click(function () {
	$("#grafico").toggle();
	//setInterval(function () {
		var novo = $.get("http://localhost:3000/placar", function (date) {
				this.responseText;
			
		})
			.fail(function () {
				$(".dica").text("Falha de conexão");
			});
			console.log(novo);
			console.log(novo.responseJSON['0']['novoarray']);
//	},200000);
});

window.onload = function () {
	var canvas = document.getElementById("grafico");
	if (canvas) {
		var altura = 690; // altura canvas
		var largura = 1900;//largura canvas
		// posicao horizontal grafico
		var y = 14000;
		var valor; //pontos do grafico
		var x = 0;

		//formato canvas
		canvas.setAttribute("width", largura);
		canvas.setAttribute("height", altura);

		//obter o context 2d
		var ctx = canvas.getContext("2d");

		ctx.fillStyle = "lime";
		ctx.fillRect(0, 0, largura, altura);
		ctx.font = "30px Courier";

		setInterval(function () {
			// define o avanço horizontal
			x += (novoX() + 0,1);
			//gera um valor aleatorio
			var valor = parseInt($(".last").text());
			//desenha uma linha ate a posição gerada
			ctx.lineTo(x, y - valor);
			ctx.stroke();

			//define um retangulo onde esta sendo escrito o valor do grafico
			ctx.fillStyle = "lime";
			ctx.fillText(0, 0, largura, 30);
			// desenha o texto na posição indicando o valor do grafico
			ctx.fillRect = "red";
			ctx.fillText(valor, x, 30);
		}, 1000);

	}
}
