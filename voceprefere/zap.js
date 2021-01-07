function zap() {
	var op1 = document.getElementById('card1_txt').textContent;
	var op2 = document.getElementById('card2_txt').textContent;
	var msg = "Você prefere " + op1 + " ou " + op2 + "?";
	console.log(msg);

	if (window.innerWidth <= 800 && window.innerHeight <= 600) {
		window.location.href = "whatsapp://send?text=" + msg;
	} else {
		window.location.href = "https://wa.me/?text=" + msg;
	};
	// window.location.href = "https://wa.me/?text=" + msg;
	// whatsapp://send?text=GFG
}