function Watched() {

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
	  });
	});
}