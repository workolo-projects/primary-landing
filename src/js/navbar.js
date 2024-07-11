document.addEventListener('DOMContentLoaded', function() {
	const menuToggleButton = document.querySelector('[data-collapse-toggle="menu"]');
	const menuLinks = document.getElementById('menu-links');
	const navbar = document.getElementById('sticky-nav');
	const logedIn = document.getElementById('logedIn');
	const signedIn = document.getElementById('signIn')
	const checkLogedIn = false;


	function toggleMenu() {
		menuLinks.classList.toggle('hidden');
	}
	menuToggleButton.addEventListener('click', toggleMenu);
	localStorage.setItem('menu-state', menuLinks.classList.add('hidden'));


	window.addEventListener('scroll', function() {
		if (window.innerWidth >= 1024) {
			if (window.scrollY > 90) {
				navbar.classList.remove('lg:bg-[#FAFAFA]');
				navbar.classList.add('bg-white', 'border-b', 'border-[#E4E3E5]');
			} else {
				navbar.classList.remove('bg-white', 'border-b', 'border-[#E4E3E5]');
			}
		}
	})


	if (checkLogedIn === true) {
		logedIn.classList.remove('hidden')
		signedIn.classList.add('hidden')

	} else if (signedIn.classList.contains('hidden')) {
		signedIn.classList.remove('hidden')
		logedIn.classList.add('hidden')
	}



});
