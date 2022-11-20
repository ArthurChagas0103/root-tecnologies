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
			document.getElementById('mercadoDeHardware').style.color = '#212529';
			document.getElementById('aboutUs1').style.display = 'flex';
			document.getElementById('aboutUs2').style.display = 'none';
			document.getElementById('informacoes1').style.display = 'flex';
			document.getElementById('informacoes2').style.display = 'none';
			document.getElementById('qualidadeProdutos').style.color = '#212529';
			document.getElementById('descricao1').style.display = 'flex';
			document.getElementById('descricao2').style.display = 'none';
			document.getElementById('conhecaNossos').style.color = '#212529';
			document.getElementById('fornecedores1').style.display = 'flex';
			document.getElementById('fornecedores2').style.display = 'none';
			document.getElementById('servicos1').style.display = 'flex';
			document.getElementById('servicos2').style.display = 'none';
			document.getElementById('services1').style.display = 'flex';
			document.getElementById('services2').style.display = 'none';
			document.getElementById('services3').style.display = 'flex';
			document.getElementById('services4').style.display = 'none';
			document.getElementById('destaques1').style.display = 'flex';
			document.getElementById('destaques2').style.display = 'none';
			document.getElementById('rodape').style.backgroundColor = '#1B2029';
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
			document.getElementById('mercadoDeHardware').style.color = '#212529';
			document.getElementById('aboutUs1').style.display = 'flex';
			document.getElementById('aboutUs2').style.display = 'none';
			document.getElementById('informacoes1').style.display = 'flex';
			document.getElementById('informacoes2').style.display = 'none';
			document.getElementById('qualidadeProdutos').style.color = '#212529';
			document.getElementById('descricao1').style.display = 'flex';
			document.getElementById('descricao2').style.display = 'none';
			document.getElementById('conhecaNossos').style.color = '#212529';
			document.getElementById('fornecedores1').style.display = 'flex';
			document.getElementById('fornecedores2').style.display = 'none';
			document.getElementById('servicos1').style.display = 'flex';
			document.getElementById('servicos2').style.display = 'none';
			document.getElementById('services1').style.display = 'flex';
			document.getElementById('services2').style.display = 'none';
			document.getElementById('services3').style.display = 'flex';
			document.getElementById('services4').style.display = 'none';
			document.getElementById('destaques1').style.display = 'flex';
			document.getElementById('destaques2').style.display = 'none';
			document.getElementById('rodape').style.backgroundColor = '#1B2029';
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
			document.getElementById('mercadoDeHardware').style.color = 'white';
			document.getElementById('aboutUs1').style.display = 'none';
			document.getElementById('aboutUs2').style.display = 'flex';
			document.getElementById('informacoes1').style.display = 'none';
			document.getElementById('informacoes2').style.display = 'flex';
			document.getElementById('qualidadeProdutos').style.color = 'white';
			document.getElementById('descricao1').style.display = 'none';
			document.getElementById('descricao2').style.display = 'flex';
			document.getElementById('conhecaNossos').style.color = 'white';
			document.getElementById('fornecedores1').style.display = 'none';
			document.getElementById('fornecedores2').style.display = 'flex';
			document.getElementById('servicos1').style.display = 'none';
			document.getElementById('servicos2').style.display = 'flex';
			document.getElementById('services1').style.display = 'none';
			document.getElementById('services2').style.display = 'flex';
			document.getElementById('services3').style.display = 'none';
			document.getElementById('services4').style.display = 'flex';
			document.getElementById('destaques1').style.display = 'none';
			document.getElementById('destaques2').style.display = 'flex';
			document.getElementById('rodape').style.backgroundColor = '#182742';
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
			document.getElementById('mercadoDeHardware').style.color = 'white';
			document.getElementById('aboutUs1').style.display = 'none';
			document.getElementById('aboutUs2').style.display = 'flex';
			document.getElementById('informacoes1').style.display = 'none';
			document.getElementById('informacoes2').style.display = 'flex';
			document.getElementById('qualidadeProdutos').style.color = 'white';
			document.getElementById('descricao1').style.display = 'none';
			document.getElementById('descricao2').style.display = 'flex';
			document.getElementById('conhecaNossos').style.color = 'white';
			document.getElementById('fornecedores1').style.display = 'none';
			document.getElementById('fornecedores2').style.display = 'flex';
			document.getElementById('servicos1').style.display = 'none';
			document.getElementById('servicos2').style.display = 'flex';
			document.getElementById('services1').style.display = 'none';
			document.getElementById('services2').style.display = 'flex';
			document.getElementById('services3').style.display = 'none';
			document.getElementById('services4').style.display = 'flex';
			document.getElementById('destaques1').style.display = 'none';
			document.getElementById('destaques2').style.display = 'flex';
			document.getElementById('rodape').style.backgroundColor = '#182742';
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
			document.getElementById('mercadoDeHardware').style.color = '#212529';
			document.getElementById('aboutUs1').style.display = 'flex';
			document.getElementById('aboutUs2').style.display = 'none';
			document.getElementById('informacoes1').style.display = 'flex';
			document.getElementById('informacoes2').style.display = 'none';
			document.getElementById('qualidadeProdutos').style.color = '#212529';
			document.getElementById('descricao1').style.display = 'flex';
			document.getElementById('descricao2').style.display = 'none';
			document.getElementById('conhecaNossos').style.color = '#212529';
			document.getElementById('fornecedores1').style.display = 'flex';
			document.getElementById('fornecedores2').style.display = 'none';
			document.getElementById('servicos1').style.display = 'flex';
			document.getElementById('servicos2').style.display = 'none';
			document.getElementById('services1').style.display = 'flex';
			document.getElementById('services2').style.display = 'none';
			document.getElementById('services3').style.display = 'flex';
			document.getElementById('services4').style.display = 'none';
			document.getElementById('destaques1').style.display = 'flex';
			document.getElementById('destaques2').style.display = 'none';
			document.getElementById('rodape').style.backgroundColor = '#1B2029';
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
			document.getElementById('mercadoDeHardware').style.color = '#212529';
			document.getElementById('aboutUs1').style.display = 'flex';
			document.getElementById('aboutUs2').style.display = 'none';
			document.getElementById('informacoes1').style.display = 'flex';
			document.getElementById('informacoes2').style.display = 'none';
			document.getElementById('qualidadeProdutos').style.color = '#212529';
			document.getElementById('descricao1').style.display = 'flex';
			document.getElementById('descricao2').style.display = 'none';
			document.getElementById('conhecaNossos').style.color = '#212529';
			document.getElementById('fornecedores1').style.display = 'flex';
			document.getElementById('fornecedores2').style.display = 'none';
			document.getElementById('servicos1').style.display = 'flex';
			document.getElementById('servicos2').style.display = 'none';
			document.getElementById('services1').style.display = 'flex';
			document.getElementById('services2').style.display = 'none';
			document.getElementById('services3').style.display = 'flex';
			document.getElementById('services4').style.display = 'none';
			document.getElementById('destaques1').style.display = 'flex';
			document.getElementById('destaques2').style.display = 'none';
			document.getElementById('rodape').style.backgroundColor = '#1B2029';
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
			document.getElementById('mercadoDeHardware').style.color = 'white';
			document.getElementById('aboutUs1').style.display = 'none';
			document.getElementById('aboutUs2').style.display = 'flex';
			document.getElementById('informacoes1').style.display = 'none';
			document.getElementById('informacoes2').style.display = 'flex';
			document.getElementById('qualidadeProdutos').style.color = 'white';
			document.getElementById('descricao1').style.display = 'none';
			document.getElementById('descricao2').style.display = 'flex';
			document.getElementById('conhecaNossos').style.color = 'white';
			document.getElementById('fornecedores1').style.display = 'none';
			document.getElementById('fornecedores2').style.display = 'flex';
			document.getElementById('servicos1').style.display = 'none';
			document.getElementById('servicos2').style.display = 'flex';
			document.getElementById('services1').style.display = 'none';
			document.getElementById('services2').style.display = 'flex';
			document.getElementById('services3').style.display = 'none';
			document.getElementById('services4').style.display = 'flex';
			document.getElementById('destaques1').style.display = 'none';
			document.getElementById('destaques2').style.display = 'flex';
			document.getElementById('rodape').style.backgroundColor = '#182742';
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
			document.getElementById('mercadoDeHardware').style.color = 'white';
			document.getElementById('aboutUs1').style.display = 'none';
			document.getElementById('aboutUs2').style.display = 'flex';
			document.getElementById('informacoes1').style.display = 'none';
			document.getElementById('informacoes2').style.display = 'flex';
			document.getElementById('qualidadeProdutos').style.color = 'white';
			document.getElementById('descricao1').style.display = 'none';
			document.getElementById('descricao2').style.display = 'flex';
			document.getElementById('conhecaNossos').style.color = 'white';
			document.getElementById('fornecedores1').style.display = 'none';
			document.getElementById('fornecedores2').style.display = 'flex';
			document.getElementById('servicos1').style.display = 'none';
			document.getElementById('servicos2').style.display = 'flex';
			document.getElementById('services1').style.display = 'none';
			document.getElementById('services2').style.display = 'flex';
			document.getElementById('services3').style.display = 'none';
			document.getElementById('services4').style.display = 'flex';
			document.getElementById('destaques1').style.display = 'none';
			document.getElementById('destaques2').style.display = 'flex';
			document.getElementById('rodape').style.backgroundColor = '#182742';
		}
	}
}

window.addEventListener("load", verificaTema);

// function changeImage() {
// 	var largura = window.screen.width;

// 	if (largura <= 425) {
// 		document.getElementById("services").style.display = "none";
// 		document.getElementById("servico").style.display = "flex";
// 	}
// 	else {
// 		document.getElementById("services").style.display = "flex";
// 		document.getElementById("servico").style.display = "none";
// 	}

// }
// window.addEventListener("load", changeImage);

function cellMask() {
	let tel = document.getElementById("celular").value;
	tel = tel.slice(0, 15);
	document.getElementById("celular").value = tel;

	// let celular = document.getElementById("celular").value;
	// celular = celular.replace(/[^0-9()]/g,'');
	// document.getElementById("celular").value = celular;

	let email = document.getElementById("email").value;
	email = email.slice(0, 30);
	document.getElementById("email").value = email;

	let nome = document.getElementById("nome").value;
	nome = nome.slice(0, 100);
	document.getElementById("nome").value = nome;

	let name = document.getElementById("nome").value;
	name = name.replace(/[^a-zA-Z^záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,'');
	document.getElementById("nome").value = name;

	// if (tel[0] != "(") 
	// {
	//     if (tel[0] != undefined)
	//     {
	//         document.getElementById("celular").value = "(" + tel[0];
	//     }
	// }

	// if (tel[3] != ")") 
	// {
	//     if (tel[3] != undefined)
	//     {
	//         document.getElementById("celular").value = tel.slice(0,3) + ")" + tel[3];
	//     }
	// }


	// if (tel[4] != '9') 
	// {
	//     if (tel[5] != undefined)
	//     {
	//         document.getElementById("celular").value = tel.slice(0,4) + '9' + tel[4];
	//     }
	// }

	// if (tel[5] != ' ') 
	// {
	//     if (tel[5] != undefined)
	//     {
	//         document.getElementById("celular").value = tel.slice(0,5) + ' ' + tel[5];
	//     }
	// }

	// if (tel[10] != '-') 
	// {
	//     if (tel[10] != undefined)
	//     {
	//         document.getElementById("celular").value = tel.slice(0,10) + '-' + tel[10];
	//     }
	// }
}

window.addEventListener("input", cellMask);

function mask(o, f) {
	setTimeout(function () {
		var v = mphone(o.value);
		if (v != o.value) {
			o.value = v;
		}
	}, 1);
}

function mphone(v) {
	var r = v.replace(/\D/g, "");
	r = r.replace(/^0/, "");

	if (r.length > 10) {
		r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
	} else if (r.length > 5) {
		r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
	} else if (r.length > 2) {
		r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
	} else {
		r = r.replace(/^(\d*)/, "($1");
	}
	
	return r;
}