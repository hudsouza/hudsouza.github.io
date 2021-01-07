function chooseOption() {
	var option = [
	'Chamar uma estranha de "mãe" uma vez por dia',
	'Não conseguir respirar pelo nariz',
	'Só pode ficar parado ou correr a toda velocidade',
	'Peidar toda vez que beijar alguém',
	'Mandar mensagem de "AJUDA" pra sua mãe e sumir por um mês',
	'Lutar com um avestruz até a morte',
	'Sempre ter voz de quem inalou gás hélio',
	'Sempre sentir que você não dormiu na última noite',
	'Ter toda sua comida mastigada por outra pessoa antes de comer',
	'Usar aparelho com freio de burro pro resto da vida',
	'Divulgar seu contato e endereço pra todos os Testemunhas de Jeová do mundo',
	'Sempre tomar suco de laranja imediatamente depois de escovar os dentes',
	'Toda vez que apertar a mão de alguém, tentar forçar por pelo menos 30 segundos',
	'Responder sempre honestamente quando te perguntarem "tudo bem?"',
	'Ter todas as suas doenças tratadas por um médico do século XII',
	'Perder um dente por ano até ficar sem nada',
	'Nunca mais falar com a última pessoa que você mandou mensagem',
	'Ser mortalmente alérgico a todo tipo de açúcar ou adoçante artificial',
	'Usar caixa de areia sempre que precisar ir no banheiro',
	'Hibernar por 4 meses do ano',
	'Viver sem nunca mais ouvir música',
	'Sentir que gota de chuva é uma bola de baseball',
	'Eterna sensação de querer espirrar mas não conseguir',
	'Deixar todo mundo aqui mexer no seu quarto por 10 minutos',
	'Morar no 20º andar de um prédio. Mas não tem elevador',
	'Perder seus dois dedões das mãos',
	'Ser alérgico a luz direta do sol',
	'Ser alérgico a luz direta do sol',
	'Começar a falar com a pessoa do seu lado toda vez que for usar o banheiro'
	];
	var op1 = Math.floor(option.length*Math.random());
	var op2 = Math.floor(option.length*Math.random());
	document.getElementById('card1_base').classList.add('rotation');
	document.getElementById('card2_base').classList.add('rotation');
	setTimeout(function() {
		document.getElementById('card1_txt').innerHTML = option[op1];
		document.getElementById('card2_txt').innerHTML = option[op2];
		document.getElementById('card1_base').classList.remove('rotation');
		document.getElementById('card2_base').classList.remove('rotation');
	}, 1000);
}