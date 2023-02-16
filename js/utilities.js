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
	const elementTextString = elementId.valueId;
	const elementText = elementTextString.value;
	return elementText;
}

// Add Items
function addItems(displayItemId) {
	const oldValue = getElementValue(displayItemId);
	const newValue = oldValue + 1;
	const itemId = getElementByID(displayItemId);
	itemId.value = newValue;
}
