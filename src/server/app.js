const isValidInput = (start, end) => {
	if (
		!isNumeric(start) ||
		!isFinite(start) ||
		!isNumeric(end) ||
		!isFinite(end)
	)
		throw new Error(
			'Invalid input types, please enter numeric values only'
		);

	if (!isGreaterThanOne(start) || !isGreaterThanOne(end))
		throw new Error(
			'Invalid input types, please enter numeric values greater than one only'
		);

	if (start > end)
		throw new Error('Start value must be greater than end value');

	return true;
};

const isNumeric = num => {
	return typeof num === 'number';
};

const isGreaterThanOne = num => {
	return num > 1;
};

const isPrime = num => {
	let count = 0;
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			count++;
		}
		if (count > 2) {
			return false;
		}
	}

	return true;
};

const getAllPrimeNumbersInRange = (start, end) => {
	try {
		if (isValidInput(start, end)) {
			let result = [];
			for (let i = start; i <= end; i++) {
				if (isPrime(i)) {
					result.push(i);
				}
			}
			return result;
		}
	} catch (e) {
		return e.message;
	}
};

export default getAllPrimeNumbersInRange;
