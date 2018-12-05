const isValidInput = (start, end) => {
	if (
		!isNumeric(start) ||
		!isFinite(start) ||
		!isNumeric(end) ||
		!isFinite(end)
	)
		throw new Error(
			'Invalid input types, please enter numeric values only!'
		);

	if (!isGreaterThanOne(start) || !isGreaterThanOne(end))
		throw new Error(
			'Invalid input types, please enter numeric values greater than one only!'
		);

	if (start > end)
		throw new Error('Start value must be greater than end value!');

	return true;
};

const isNumeric = num => {
	return typeof num === 'number';
};

const isGreaterThanOne = num => {
	return num > 1;
};


export {isValidInput};