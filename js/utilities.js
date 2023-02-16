// get element by id
function getElementByID(elementId) {
	const element = document.getElementById(elementId);
	return element;
}

// get element value by id
function getElementValue(valueId) {
	const elementId = document.getElementById(valueId);
	const elementValueString = elementId.value;
	const elementValue = parseInt(elementValueString);
	return elementValue;
}

// get element text by id
function getElementText(textId) {
	const elementId = document.getElementById(textId);
	const elementTextString = elementId.innerText;
	const elementText = parseInt(elementTextString);
	return elementText;
}

// Add and Remove Items
function addItems(displayItemId, isIncreased) {
	const oldValue = getElementValue(displayItemId);

	let newValue;

	if (isIncreased === "add") {
		newValue = oldValue + 1;
	} else {
		newValue = oldValue - 1;
	}

	const itemId = getElementByID(displayItemId);
	itemId.value = newValue;
}

// validation
function validation(itemId) {
	const validationId = getElementByID(itemId);
	const validationItem = getElementValue(itemId);
	if (validationItem < 0) {
		alert("Please add at least one item");
		validationId.value = 1;
	}
}

// update price
function updatePrice(itemId, price, value) {
	const totalItem = getElementValue(itemId);
	const itemPriceId = getElementByID(price);
	const newPrice = totalItem * value;
	itemPriceId.innerText = newPrice;
}

// Total Price Count and tax
function countTotal() {
	const phoneValue = getElementText("phone-price");
	const caseValue = getElementText("case-price");
	const totalValue = phoneValue + caseValue;

	const oldTotalValueId = getElementByID("total-value");
	oldTotalValueId.innerText = totalValue;

	const taxValueFloat = totalValue * 0.1;

	const taxValueFixed = taxValueFloat.toFixed(2);
	const taxValue = parseFloat(taxValueFixed);
	const taxId = getElementByID("tax");
	taxId.innerText = taxValue;

	const finalTotal = totalValue + taxValue;
	const finalTotalValueId = getElementByID("final-total");
	finalTotalValueId.innerText = finalTotal;
}
