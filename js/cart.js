// Empty bag

document.querySelector(".cart-empty").addEventListener("click", clearBag);

function clearBag(){
	document.querySelector(".cart-products").innerHTML = "<p>Your shopping bag is empty. Use <a href=\"\">Catalog<\/a> to add new items.<\/p>"
	setToZero();
}

// Buy button

document.querySelector(".cart-buy-btn").addEventListener("click", buyCart);

function buyCart(){
	document.querySelector(".cart-products").innerHTML = "<p>Thank you for your purchase</p>";
	setToZero();
}

// Set to zero total price

function setToZero(){
	document.getElementById("headerCart").innerHTML = "&pound;0.00 (0)";
	document.querySelector(".cart-total-amount").innerHTML = "&pound;0.00";
}