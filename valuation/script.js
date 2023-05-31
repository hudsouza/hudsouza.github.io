function calcValuation() {

	const percentage = parseFloat(document.getElementById('percentage').value);
	const ask = parseFloat(document.getElementById('ask').value);

	const result = (100/percentage*ask).toLocaleString("pt-BR");

	console.log((100/percentage));

	document.getElementById('result').innerHTML = result;

};


// toLocaleString("en-US")