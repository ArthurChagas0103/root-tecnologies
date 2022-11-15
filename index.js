function mudarCor() {
	if (icone % 2 == 0) {
		if (window.scrollY < 1 && ativado % 2 == 0) {
			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
		}
		else {
			document.getElementById('navbar').style.backgroundColor = '#1B2029'
		}
	}
	else {
		if (window.scrollY < 1 && ativado % 2 == 0) {
			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
		}
		else {
			document.getElementById('navbar').style.backgroundColor = '#182742'
		}
	}
}
window.addEventListener('scroll', mudarCor)

let ativado = 2;

function clickMudarCor() {
	if (window.scrollY < 1) {
		ativado++;

		if (ativado % 2 == 0) {
			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
		}
		else {
			if (icone % 2 == 0) {
				document.getElementById('navbar').style.backgroundColor = '#1B2029'
			}
			else {
				document.getElementById('navbar').style.backgroundColor = '#182742'
			}
		}
	}
	else {
		ativado++;

		if (icone % 2 == 0) {
			document.getElementById('navbar').style.backgroundColor = '#1B2029'
		}
		else {
			document.getElementById('navbar').style.backgroundColor = '#182742'
		}
	}
}

function preenchimento() 
{
	document.getElementById("nome").placeholder = "John Doe";
	document.getElementById("celular").placeholder = "+55 (XX) 9 XXXX-XXXX";
	document.getElementById("email").placeholder = "example@email.com";
	document.getElementById("mensagem").placeholder = "Digite aqui sua mensagem...";
}
window.addEventListener("load", preenchimento);





// Modo claro e escuro (teste)

document.getElementById('lua').style.display = 'none';
document.getElementById('sol').style.display = 'flex';

let icone = 0;

function mudarModo() {
	icone++;

	if (icone % 2 == 0) {
		if (window.scrollY < 1) {
			document.getElementById('lua').style.display = 'none';
			document.getElementById('sol').style.display = 'flex';

			document.getElementById('corpo').style.backgroundColor = 'white';
			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
			document.getElementById('barras').style.color = '#A69256';
			document.getElementById('home').style.setProperty("color", "#DAC072", "important");
			document.getElementById('produtos').style.setProperty("color", "#DAC072", "important");
			document.getElementById('contato').style.setProperty("color", "#DAC072", "important");
		}
		else {
			document.getElementById('lua').style.display = 'none';
			document.getElementById('sol').style.display = 'flex';

			document.getElementById('corpo').style.backgroundColor = 'white';
			document.getElementById('navbar').style.backgroundColor = '#1B2029';
			document.getElementById('barras').style.color = '#A69256';
			document.getElementById('home').style.setProperty("color", "#DAC072", "important");
			document.getElementById('produtos').style.setProperty("color", "#DAC072", "important");
			document.getElementById('contato').style.setProperty("color", "#DAC072", "important");
		}
	}
	else {
		if (window.scrollY < 1) {
			document.getElementById('lua').style.display = 'flex';
			document.getElementById('sol').style.display = 'none';

			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
			document.getElementById('corpo').style.backgroundColor = '#1B2029';
			document.getElementById('barras').style.color = 'white';
			document.getElementById('home').style.setProperty("color", "white", "important");
			document.getElementById('produtos').style.setProperty("color", "white", "important");
			document.getElementById('contato').style.setProperty("color", "white", "important");
			document.getElementById('lua').style.setProperty("color", "white", "important");
		}
		else {
			document.getElementById('lua').style.display = 'flex';
			document.getElementById('sol').style.display = 'none';

			document.getElementById('navbar').style.backgroundColor = '#182742';
			document.getElementById('corpo').style.backgroundColor = '#1B2029';
			document.getElementById('barras').style.color = 'white';
			document.getElementById('home').style.setProperty("color", "white", "important");
			document.getElementById('produtos').style.setProperty("color", "white", "important");
			document.getElementById('contato').style.setProperty("color", "white", "important");
			document.getElementById('lua').style.setProperty("color", "white", "important");
		}
	}
	localStorage.setItem('valorIcone', icone)
}

let icone2 = localStorage.getItem('valorIcone')

function verificaTema() {
	console.log(icone2)
	if (icone2 % 2 == 0) {
		if (window.scrollY < 1) {
			document.getElementById('lua').style.display = 'none';
			document.getElementById('sol').style.display = 'flex';

			document.getElementById('corpo').style.backgroundColor = 'white';
			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
			document.getElementById('barras').style.color = '#A69256';
			document.getElementById('home').style.setProperty("color", "#DAC072", "important");
			document.getElementById('produtos').style.setProperty("color", "#DAC072", "important");
			document.getElementById('contato').style.setProperty("color", "#DAC072", "important");
		}
		else {
			document.getElementById('lua').style.display = 'none';
			document.getElementById('sol').style.display = 'flex';

			document.getElementById('corpo').style.backgroundColor = 'white';
			document.getElementById('navbar').style.backgroundColor = '#1B2029';
			document.getElementById('barras').style.color = '#A69256';
			document.getElementById('home').style.setProperty("color", "#DAC072", "important");
			document.getElementById('produtos').style.setProperty("color", "#DAC072", "important");
			document.getElementById('contato').style.setProperty("color", "#DAC072", "important");
		}
	}
	else {
		if (window.scrollY < 1) {
			document.getElementById('lua').style.display = 'flex';
			document.getElementById('sol').style.display = 'none';

			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
			document.getElementById('corpo').style.backgroundColor = '#1B2029';
			document.getElementById('barras').style.color = 'white';
			document.getElementById('home').style.setProperty("color", "white", "important");
			document.getElementById('produtos').style.setProperty("color", "white", "important");
			document.getElementById('contato').style.setProperty("color", "white", "important");
			document.getElementById('lua').style.setProperty("color", "white", "important");
		}
		else {
			document.getElementById('lua').style.display = 'flex';
			document.getElementById('sol').style.display = 'none';

			document.getElementById('navbar').style.backgroundColor = '#182742';
			document.getElementById('corpo').style.backgroundColor = '#1B2029';
			document.getElementById('barras').style.color = 'white';
			document.getElementById('home').style.setProperty("color", "white", "important");
			document.getElementById('produtos').style.setProperty("color", "white", "important");
			document.getElementById('contato').style.setProperty("color", "white", "important");
			document.getElementById('lua').style.setProperty("color", "white", "important");
		}
	}
}

window.addEventListener("load", verificaTema);

// let icone = localStorage.getItem('valorIcone')

// console.log(icone)

// function verificaTema(){
// 	if (icone % 2 == 0) {
// 		if (window.scrollY < 1) {
// 			document.getElementById('lua').style.display = 'none';
// 			document.getElementById('sol').style.display = 'flex';
// 		}
// 		else {
// 			document.getElementById('lua').style.display = 'none';
// 			document.getElementById('sol').style.display = 'flex';
// 		}
// 	}
// 	else {
// 		if (window.scrollY < 1) {
// 			document.getElementById('lua').style.display = 'flex';
// 			document.getElementById('sol').style.display = 'none';
// 		}
// 		else {
// 			document.getElementById('lua').style.display = 'flex';
// 			document.getElementById('sol').style.display = 'none';
// 		}
// 	}
// }

// window.addEventListener("load", verificaTema);