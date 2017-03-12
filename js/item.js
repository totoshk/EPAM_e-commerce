// Update count and price in header because of click 'add to cart'


document.querySelector(".product-order-btn").addEventListener("click", updateHeaderBag);
var count = 0;
var sum = 0;
var price;

function updateHeaderBag(e){
	e.preventDefault();

	var temp = document.querySelector(".product-details-price");
	price = parseFloat(temp.innerHTML.slice(1));

	count++;
	sum += price;

	headerCart.innerHTML = "&pound;" + sum.toFixed(2) + " (" + count + ")";
}
