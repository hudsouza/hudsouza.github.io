function setValues() {
	localStorage.setItem('pergunta1', 0);
	localStorage.setItem('pergunta2', 0);
	localStorage.setItem('pergunta3', 0);
	localStorage.setItem('pergunta4', 0);
	localStorage.setItem('pergunta5', 0);
	console.log('setados');
}

function saveOption(numPergunta, opSelecionada) {
	var pergunta = "pergunta"+numPergunta;
	localStorage.setItem(pergunta, opSelecionada);
	console.log(pergunta, opSelecionada);
	var proxPergunta = numPergunta + 1;
	if (proxPergunta <= 5) {
		window.location.href = "#pergunta"+proxPergunta;
		scrollHeight();
	}
	valida();
}

function valida() {
	var cont = 0;
	for (var i = 0; i <= 5; i++) {
		numPergunta = "pergunta"+i;
		pergunta = localStorage.getItem(numPergunta);
		pergunta = parseFloat(pergunta);
		if (pergunta > 0) {
			cont = cont + 1;
			if (cont >= 5) {
				showResults();
			}
		}
	}
}

function showResults() {
	alert("yo");
}

function scrollHeight() {
	var height = window.screen.height;
	window.scrollBy(0,height);
}