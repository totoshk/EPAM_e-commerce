var upper = document.querySelector(".upper");
var lower = document.querySelector(".lower");
var w;

function changePosition(){
	w = screen.width;

	if(upper.children.length < 4 && w >=1024){
		while(upper.children.length < 4){
			upper.appendChild(document.querySelector(".lower .product-item:first-child"));
		}
	}else if(upper.children.length > 3 && w >= 768 && w < 1024){
		while(upper.children.length > 3){
			lower.insertBefore(document.querySelector(".upper .product-item:first-child"), lower.childNodes[0]);
		}
	}else if(upper.children.length < 3 && w >= 768 && w < 1024){
		while(upper.children.length < 3){
			upper.appendChild(document.querySelector(".lower .product-item:first-child"));
		}
	}else if(upper.children.length > 2 && w >= 375 && w < 768){
		while(upper.children.length > 2){
			lower.insertBefore(document.querySelector(".upper .product-item:last-child"), lower.childNodes[0]);
		}
	}
};
changePosition();
window.addEventListener('resize', changePosition);


