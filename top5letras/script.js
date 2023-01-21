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
		document.getElementById('item').dataset.rank = i;
	};
};

var count = 0;

function pickOrder(top){
	const picked =  document.getElementById('item').innerHTML;
	document.getElementById('top'+top).innerHTML = picked;
	document.getElementById('top'+top).dataset.rank = document.getElementById('item').dataset.rank;
	document.getElementById('btn'+top).style.display = 'none';
	selectItem();
	count++;
	if (count == 5) {

		var top1 = parseInt(document.getElementById("top1").dataset.rank);
		var top2 = parseInt(document.getElementById("top2").dataset.rank);
		var top3 = parseInt(document.getElementById("top3").dataset.rank);
		var top4 = parseInt(document.getElementById("top4").dataset.rank);
		var top5 = parseInt(document.getElementById("top5").dataset.rank);

		if (top1 < top2 && top2 < top3 && top3 < top4 && top4 < top5) {
			document.getElementById('startHead').innerHTML = "Você conseguiu! 🎉";
			document.getElementById('startTitle').innerHTML = 'Parabéns!';
		} else {
			document.getElementById('startHead').innerHTML = "Tente de novo";
			document.getElementById('startTitle').innerHTML = 'Ah, que pena 😭';
		}

	}
};
