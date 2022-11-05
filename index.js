function mudarCor() {
	if (window.scrollY > 0) {
		document.getElementById('navbar').style.backgroundColor = '#1B2029'
	}
	else {
		document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)'
	}
}
window.addEventListener('scroll', mudarCor)