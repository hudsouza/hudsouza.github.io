function selectItem() {
	const item = [
		"Brigadeiro",
		"Coxinha",
		"Lasanha",
		"Macarrão",
		"Churrasco",
		"Pastel",
		"Hamburger",
		"Salada",
		"Pão",
		"Sanduíche",
		"Bolo",
		"Torta doce",
		"Torta salgada",
		"Arroz",
		"Feijão",
		"Pizza",
		"Cachorro quente",
		"Purê de batata",
		"Batata frita",
		"Fígado",
		"Frango",
		"Farofa",
		"Queijo",
		"Sorvete",
		"Beijinho",
		"Paçoca",
		"Feijoada",
		"Brócolis",
		"Pamonha",
		"Kibe",
		"Bolinha de queijo",
		"Goiabada",
		"Pudim",
		"Biscoito de polvilho",
		"Bolacha recheada",
		"Pão de queijo",
		"Sushi",
		"Pavê",
		"Sonho",
		"Panqueca salgada",
		"Chocolate",
		"Abóbora",
		"Abobrinha",
		"Beterraba",
		"Berinjela",
		"Mousse",
		"Jiló",
		"Quiabo",
		"Canjica",
		"Sopa",
		"Fruta",
	]
	let i = Math.floor(item.length*Math.random());
	if 
		(
			item[i] == document.getElementById('top1').innerHTML || 
			item[i] == document.getElementById('top2').innerHTML || 
			item[i] == document.getElementById('top3').innerHTML ||
			item[i] == document.getElementById('top4').innerHTML ||
			item[i] == document.getElementById('top5').innerHTML
		)
	{
		selectItem();
	} else {
		document.getElementById('item').innerHTML = item[i];
	};
};

var count = 0;

function pickOrder(top){
	const picked =  document.getElementById('item').innerHTML;
	document.getElementById('top'+top).innerHTML = picked;
	document.getElementById('btn'+top).style.display = 'none';
	if (count == 0) {
		count = 1;
		selectItem();
	} else if (count == 1) {
		count = 2;
		selectItem();
	} else if (count == 2) {
		count = 3;
		selectItem();
	} else if (count == 3) {
		count = 4;
		selectItem();
	}else if (count == 4) {
		count = 0;
		document.getElementById('startHead').innerHTML = "Seu Top 5 é:";
		document.getElementById('startTitle').innerHTML = 'Parabéns!';
	}
};
