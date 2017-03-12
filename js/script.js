
document.querySelector('.sandwich-menu').addEventListener('click', openMenuFunction, false);

function openMenuFunction(){
	var elem = this;

	if(elem.classList.contains('change')){
		elem.classList.remove('change');
	}else{
		elem.classList.add('change');
	};

	var menu = document.querySelector('.header-navigation__menu');
	if(menu.classList.contains('header-navigation__menu-show')){
		menu.classList.remove('header-navigation__menu-show');
	}else{
		menu.classList.add('header-navigation__menu-show');
	}
};