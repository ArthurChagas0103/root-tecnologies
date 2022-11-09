function mudarCor() {
	if (window.scrollY > 0) {
		document.getElementById('navbar').style.backgroundColor = '#1B2029'
	}
	else {
		document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
	}
}
window.addEventListener('scroll', mudarCor)

let ativado = 0;

function clickMudarCor() {
	if (window.scrollY < 1) {
		ativado++;

		if (ativado % 2 == 0) {
			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)';
		}
		else {
			document.getElementById('navbar').style.backgroundColor = '#1B2029';
		}
	}
	else {
		document.getElementById('navbar').style.backgroundColor = '#1B2029';
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