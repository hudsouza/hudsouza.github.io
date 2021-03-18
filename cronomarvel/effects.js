function Watched() {

	tempo = localStorage.getItem('tempo');
	if (tempo == null) {
		localStorage.setItem('tempo', 2884);
	} else {
		Converter(tempo);
	}

	function Converter(tempoRestante) {
		console.log("func", tempoRestante)
		hours = Math.floor(tempoRestante / 60);
		minutes = tempoRestante % 60;
		tempoRestante = hours + " horas e " + minutes + " minutos";
		document.getElementById('tempo').innerHTML = tempoRestante;
	}

	function Tempo(i, watched) {
		tempoFilme = document.getElementById(i).getAttribute('data-time');
		tempoRestante = localStorage.getItem('tempo');
		if (watched == true) {
			tempoRestante = tempoRestante - tempoFilme;
		} else {
			tempoRestante = +tempoRestante + +tempoFilme;
		}
		console.log(tempoFilme);
		Converter(tempoRestante);
		localStorage.setItem('tempo', tempoRestante);
	}
	
	qtdFilmes = document.getElementsByClassName('movie').length;
	for (var i = 1; i <= qtdFilmes; i++) {
		valida = 'filme'+i;
		valida = localStorage.getItem(valida);
		if (valida == "movie watched") {
			document.getElementById(i).classList.add('watched');
		}
	}

	document.querySelectorAll('.movie').forEach(function(el){
	  el.addEventListener('click', function() {
	    this.classList.toggle('watched');
	    item = 'filme'+this.id;
	    status = this.className;
	    localStorage.setItem(item, status);
	    i = this.id;
	    if (this.classList == "movie watched") {
	    	watched = true;
	    	Tempo(i, watched);
	    }
	    else {
	    	watched = false;
	    	Tempo(i, watched);
	    }
	  });
	});
}