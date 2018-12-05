import { isValidInput } from './validations';

const isPrime = num => {
	if (num === 2) {
		return true;
	}

	if (num % 2 === 0) {
		return false;
	}

	for (let i = 3; i <= Math.round(Math.sqrt(num)); i++) {
		if (num % i === 0) return false;
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
