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

function preenchimento() {
	document.getElementById("nome").placeholder = "John Doe";
	document.getElementById("celular").placeholder = "(XX) 9 XXXX-XXXX";
	document.getElementById("email").placeholder = "example@email.com";
	document.getElementById("mensagem").placeholder = "Digite aqui sua mensagem...";
}
window.addEventListener("load", preenchimento);

// Modo claro e escuro (teste)

document.getElementById('lua').style.display = 'none';
document.getElementById('sol').style.display = 'flex';

let icone = localStorage.getItem('valorIcone');

function mudarModo() {
	icone++;

	if (icone % 2 == 0) {
		if (window.scrollY < 1) {
			document.getElementById('lua').style.display = 'none';
			document.getElementById('sol').style.display = 'flex';

			if (ativado % 2 == 0) {
				document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
			}
			else {
				document.getElementById('navbar').style.backgroundColor = '#1B2029'
			}

			document.getElementById('corpo').style.backgroundColor = 'white';
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

			if (ativado % 2 == 0) {
				document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
			}
			else {
				document.getElementById('navbar').style.backgroundColor = '#182742'
			}

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

function cellMask() 
{
	let tel = document.getElementById("celular").value;
	tel = tel.slice(0,15);
	document.getElementById("celular").value = tel;

	let email = document.getElementById("email").value;
	email = email.slice(0,30);
	document.getElementById("email").value = email;

	let nome = document.getElementById("nome").value;
	nome = nome.slice(0,25);
	document.getElementById("nome").value = nome;

    if (tel[0] != "(") 
    {
        if (tel[0] != undefined)
        {
            document.getElementById("celular").value = "(" + tel[0];
        }
    }

	if (tel[3] != ")") 
    {
        if (tel[3] != undefined)
        {
            document.getElementById("celular").value = tel.slice(0,3) + ")" + tel[3];
        }
    }


	if (tel[4] != '9') 
    {
        if (tel[5] != undefined)
        {
            document.getElementById("celular").value = tel.slice(0,4) + '9' + tel[4];
        }
    }

	if (tel[5] != ' ') 
    {
        if (tel[5] != undefined)
        {
            document.getElementById("celular").value = tel.slice(0,5) + ' ' + tel[5];
        }
    }

	if (tel[10] != '-') 
    {
        if (tel[10] != undefined)
        {
            document.getElementById("celular").value = tel.slice(0,10) + '-' + tel[10];
        }
    }
}

window.addEventListener("input", cellMask);