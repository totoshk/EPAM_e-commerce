var myIndex = 0;
var w;


sliderCarousel();

function sliderCarousel(){
	var images = document.getElementsByClassName("slider-item");
	var dot = document.querySelectorAll(".slider-nav span");
	var tempDot;
	for(var i = 0;  i < images.length; i++){
		images[i].style.display = "none";
	}
	myIndex++;

	if(myIndex > images.length){
		myIndex = 1;
	}
	images[myIndex-1].style.display = "block";

	setTimeout(sliderCarousel, 3000);
};

