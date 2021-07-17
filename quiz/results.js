function setValues() {
	localStorage.setItem('pergunta1', 0);
	localStorage.setItem('pergunta2', 0);
	localStorage.setItem('pergunta3', 0);
	localStorage.setItem('pergunta4', 0);
	localStorage.setItem('pergunta5', 0);
	localStorage.setItem('resultado', 0);
}

function saveOption(numPergunta, opSelecionada) {
	var pergunta = "pergunta"+numPergunta;
	localStorage.setItem(pergunta, opSelecionada);
	// console.log(pergunta, opSelecionada);
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
				calculateResults();
			}
		}
	}
}

function calculateResults() {
	var op1 = localStorage.getItem('pergunta1');
	var op2 = localStorage.getItem('pergunta2');
	var op3 = localStorage.getItem('pergunta3');
	var op4 = localStorage.getItem('pergunta4');
	var op5 = localStorage.getItem('pergunta5');
	var options = [
		op1,
		op2,
		op3,
		op4,
		op5
	];
	moda(options);
}

function moda(A){
	return A.reduce((acc,element) => {
		acc.elements[element] = acc.elements[element] + 1 || 1;
		if (acc.elements[element] > acc.max){
			acc.max = acc.elements[element];
			acc.winner = [element];
			localStorage.setItem('resultado', acc.winner)
			showResults(acc.winner);
		} else if (acc.elements[element] == acc.max){
			acc.winner.push(element);
			localStorage.setItem('resultado', acc.winner)
			showResults(acc.winner);
		}
		return acc;
	}, {elements:{}, max:0, winner:[]});
}

function showResults(winner) {
	console.log(winner);
	if (winner == 1) {
		window.location.href = "paiestiloso.html"
	}
	if (winner == 2) {
		window.location.href = "paiaventureiro.html"
	}
	if (winner == 3) {
		window.location.href = "paichef.html"
	}
	if (winner == 4) {
		window.location.href = "paicaseiro.html"
	}
	if (winner == 5) {
		window.location.href = "painerd.html"
	}
}

function scrollHeight() {
	var height = window.screen.height;
	window.scrollBy(0,height);
}