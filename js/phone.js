// Add Item
document
	.getElementById("btn-plus-phone")
	.addEventListener("click", function () {
		addItems("item-display-phone", "add");
		updatePrice("item-display-phone", "phone-price", 1219);
	});

// Remove Item
document
	.getElementById("btn-minus-phone")
	.addEventListener("click", function () {
		addItems("item-display-phone", "remove");
		validation("item-display-phone");
		updatePrice("item-display-phone", "phone-price", 1219);
	});
