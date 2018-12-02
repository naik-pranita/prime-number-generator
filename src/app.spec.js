import getAllPrimeNumbersInRange from './app'; 

describe('App', () => {
	it('should throw excaption when invalid input is passed', () => {
        try {
            getAllPrimeNumbersInRange(null,null);
        } catch(e) {
            expect(e.message).toEqual('Invalid input types, please enter numeric values greater than one only');
        }
	});
});
