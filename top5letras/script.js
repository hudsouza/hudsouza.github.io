function selectItem() {
	const item = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z"
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
		document.getElementById('startHead').innerHTML = "Resultado Final:";
		document.getElementById('startTitle').innerHTML = 'Parabéns!';
	}
};
