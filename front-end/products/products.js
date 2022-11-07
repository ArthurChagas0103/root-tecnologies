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
			document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
		}
		else {
			document.getElementById('navbar').style.backgroundColor = '#1B2029'
		}
	}
	else {
		document.getElementById('navbar').style.backgroundColor = '#1B2029'
	}
}

function filtrar() {
	checkPlacaVideo = document.getElementById('placaVideo');
	checkProcessador = document.getElementById('processador');
	checkMonitor = document.getElementById('monitor');
	checkRam = document.getElementById('ram');
	checkPlacaMae = document.getElementById('placaMae');
	checkFonte = document.getElementById('fonte');
	checkCooler = document.getElementById('cooler');
	checkArmazenamento = document.getElementById('armazenamento');
	checkNvidia = document.getElementById('nvidia');
	checkGigabyte = document.getElementById('gigabyte');
	checkIntel = document.getElementById('intel');
	checkHusky = document.getElementById('husky');
	checkCorsair = document.getElementById('corsair');
	checkSamsung = document.getElementById('samsung');
	checkRise = document.getElementById('rise');
	checkBarracuda = document.getElementById('barracuda');
	checkKingston = document.getElementById('kingston');

	placaMae = document.getElementById('placaMaeContainer');
	processador = document.getElementById('processadorContainer');
	ram = document.getElementById('ramContainer');
	fonte = document.getElementById('fonteContainer');
	monitor = document.getElementById('monitorContainer');
	cooler = document.getElementById('coolerContainer');
	hd = document.getElementById('hdContainer');
	ssd = document.getElementById('ssdContainer');
	gabinete = document.getElementById('gabineteContainer');

	range = document.getElementById('range').value;

	if (checkPlacaVideo.checked == true && checkNvidia.checked == true && (range == 3)) {
		// placaVideo.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
	}
	else if (checkProcessador.checked == true && checkIntel.checked == true && range == 3) {
		processador.style.display = 'flex';

		placaMae.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkMonitor.checked == true && checkSamsung.checked == true && range == 3) {
		monitor.style.display = 'flex';

		processador.style.display = 'none';
		placaMae.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkRam.checked == true && checkHusky.checked == true && (range == 1 || range == 2 || range == 3)) {
		ram.style.display = 'flex';

		processador.style.display = 'none';
		placaMae.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaMae.checked == true && checkGigabyte.checked == true && (range == 2 || range == 3)) {
		placaMae.style.display = 'flex';

		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkFonte.checked == true && checkCorsair.checked == true && (range == 2 || range == 3)) {
		fonte.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkCooler.checked == true && checkRise.checked == true && (range == 2 || range == 3)) {
		cooler.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkArmazenamento.checked == true && checkBarracuda.checked == true && (range == 1 || range == 2 || range == 3)) {
		hd.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkArmazenamento.checked == true && checkKingston.checked == true && (range == 1 || range == 2 || range == 3)) {
		ssd.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && range == 3) {

		// placaVideo.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
	}
	else if (checkProcessador.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && range == 3) {

		processador.style.display = 'flex';

		placaMae.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkMonitor.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && range == 3) {

		monitor.style.display = 'flex';

		processador.style.display = 'none';
		placaMae.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkRam.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && (range == 1 || range == 2 || range == 3)) {

		ram.style.display = 'flex';

		processador.style.display = 'none';
		placaMae.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaMae.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && (range == 2 || range == 3)) {

		placaMae.style.display = 'flex';

		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkFonte.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && (range == 2 || range == 3)) {

		fonte.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkCooler.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && (range == 2 || range == 3)) {

		cooler.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkArmazenamento.checked == true && checkNvidia.checked == false && checkGigabyte.checked == false && checkIntel.checked == false &&
		checkHusky.checked == false && checkCorsair.checked == false && checkSamsung.checked == false && checkRise.checked == false &&
		checkBarracuda.checked == false && checkKingston.checked == false && (range == 1 || range == 2 || range == 3)) {

		ssd.style.display = 'flex';
		hd.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkNvidia.checked == true && range == 3) {

		// placaVideo.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkGigabyte.checked == true && (range == 2 || range == 3)) {

		placaMae.style.display = 'flex';

		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkIntel.checked == true && range == 3) {

		processador.style.display = 'flex';

		placaMae.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkHusky.checked == true && (range == 1 || range == 2 || range == 3)) {

		ram.style.display = 'flex';

		processador.style.display = 'none';
		placaMae.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkCorsair.checked == true && (range == 2 || range == 3)) {

		fonte.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkSamsung.checked == true && range == 3) {

		monitor.style.display = 'flex';

		processador.style.display = 'none';
		placaMae.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkRise.checked == true && (range == 2 || range == 3)) {

		cooler.style.display = 'flex';

		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		hd.style.display = 'none';
		ssd.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkBarracuda.checked == true && (range == 1 || range == 2 || range == 3)) {

		hd.style.display = 'flex';

		ssd.style.display = 'none';
		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (checkPlacaVideo.checked == false && checkProcessador.checked == false && checkMonitor.checked == false &&
		checkRam.checked == false && checkPlacaMae.checked == false && checkFonte.checked == false && checkCooler.checked == false &&
		checkArmazenamento.checked == false && checkKingston.checked == true && (range == 1 || range == 2 || range == 3)) {

		ssd.style.display = 'flex';

		hd.style.display = 'none';
		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'none';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (range == 1) {
		placaMae.style.display = 'none';
		processador.style.display = 'none';
		ram.style.display = 'flex';
		fonte.style.display = 'none';
		monitor.style.display = 'none';
		cooler.style.display = 'none';
		hd.style.display = 'flex';
		ssd.style.display = 'flex';
		gabinete.style.display = 'none';
		// placaVideo.style.display = 'none';
	}
	else if (range == 2) {
		placaMae.style.display = 'flex';
		processador.style.display = 'none';
		ram.style.display = 'flex';
		fonte.style.display = 'flex';
		monitor.style.display = 'none';
		cooler.style.display = 'flex';
		hd.style.display = 'flex';
		ssd.style.display = 'flex';
		gabinete.style.display = 'flex';
		// placaVideo.style.display = 'none';
	}
	else {
		processador.style.display = 'flex';
		placaMae.style.display = 'flex';
		ram.style.display = 'flex';
		fonte.style.display = 'flex';
		monitor.style.display = 'flex';
		cooler.style.display = 'flex';
		hd.style.display = 'flex';
		ssd.style.display = 'flex';
		gabinete.style.display = 'flex';
		// placaVideo.style.display = 'flex';
	}
}

function desfiltrar() {
	checkPlacaVideo = document.getElementById('placaVideo');
	checkProcessador = document.getElementById('processador');
	checkMonitor = document.getElementById('monitor');
	checkRam = document.getElementById('ram');
	checkPlacaMae = document.getElementById('placaMae');
	checkFonte = document.getElementById('fonte');
	checkCooler = document.getElementById('cooler');
	checkArmazenamento = document.getElementById('armazenamento');
	checkNvidia = document.getElementById('nvidia');
	checkGigabyte = document.getElementById('gigabyte');
	checkIntel = document.getElementById('intel');
	checkHusky = document.getElementById('husky');
	checkCorsair = document.getElementById('corsair');
	checkSamsung = document.getElementById('samsung');
	checkRise = document.getElementById('rise');
	checkBarracuda = document.getElementById('barracuda');
	checkKingston = document.getElementById('kingston');

	placaMae = document.getElementById('placaMaeContainer');
	processador = document.getElementById('processadorContainer');
	ram = document.getElementById('ramContainer');
	fonte = document.getElementById('fonteContainer');
	monitor = document.getElementById('monitorContainer');
	cooler = document.getElementById('coolerContainer');
	hd = document.getElementById('hdContainer');
	ssd = document.getElementById('ssdContainer');
	gabinete = document.getElementById('gabineteContainer');

	range = document.getElementById('range').value;

	placaMae.style.display = 'flex';
	processador.style.display = 'flex';
	ram.style.display = 'flex';
	fonte.style.display = 'flex';
	monitor.style.display = 'flex';
	cooler.style.display = 'flex';
	hd.style.display = 'flex';
	ssd.style.display = 'flex';
	gabinete.style.display = 'flex';

	checkPlacaVideo.checked = false;
	checkProcessador.checked = false;
	checkMonitor.checked = false;
	checkRam.checked = false;
	checkPlacaMae.checked = false;
	checkFonte.checked = false;
	checkCooler.checked = false;
	checkArmazenamento.checked = false;
	checkNvidia.checked = false;
	checkGigabyte.checked = false;
	checkIntel.checked = false;
	checkHusky.checked = false;
	checkCorsair.checked = false;
	checkSamsung.checked = false;
	checkRise.checked = false;
	checkBarracuda.checked = false;
	checkKingston.checked = false;
}