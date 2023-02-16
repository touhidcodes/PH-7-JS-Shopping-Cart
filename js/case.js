// Add Item
document.getElementById("btn-plus-case").addEventListener("click", function () {
	addItems("item-display-case", "add");
	updatePrice("item-display-case", "case-price", 59);
});

// Remove Item
document
	.getElementById("btn-minus-case")
	.addEventListener("click", function () {
		addItems("item-display-case", "remove");
		validation("item-display-case");
		updatePrice("item-display-case", "case-price", 59);
	});
