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
function validation() {
	const validationId = getElementByID("item-display-phone");
	const validationItem = getElementValue("item-display-phone");
	if (validationItem < 0) {
		alert("Please add at least one item");
		validationId.value = 1;
	}
}

// update price
function updatePrice() {
	const totalItem = getElementValue("item-display-phone");
	const itemPriceId = getElementByID("phone-price");
	const newPrice = totalItem * 1219;
	itemPriceId.innerText = newPrice;
}
