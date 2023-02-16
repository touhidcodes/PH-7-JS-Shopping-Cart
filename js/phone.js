// Add Item
document
	.getElementById("btn-plus-phone")
	.addEventListener("click", function () {
		addItems("item-display-phone", "add");
		updatePrice();
	});

// Remove Item
document
	.getElementById("btn-minus-phone")
	.addEventListener("click", function () {
		addItems("item-display-phone", "remove");
		validation();
		updatePrice();
	});
