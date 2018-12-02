import getAllPrimeNumbersInRange from './app'; 

describe('App', () => {
	it('should throw exception when non integer input is passed', () => {
        try {
            getAllPrimeNumbersInRange(null,null);
        } catch(e) {
            expect(e.message).toEqual('Invalid input types, please enter numeric values only');
        }
    });
    
    it('should throw exception when integer less than one is passed', () => {
        try {
            getAllPrimeNumbersInRange(0,1);
        } catch(e) {
            expect(e.message).toEqual('Invalid input types, please enter numeric values greater than one only');
        }
    });
    
    it('should throw exception when negative input is passed', () => {
        try {
            getAllPrimeNumbersInRange(-5,0);
        } catch(e) {
            expect(e.message).toEqual('Invalid input types, please enter numeric values greater than one only');
        }
    });
     
    it('should throw exception when start in greater than end', () => {
        try {
            getAllPrimeNumbersInRange(10,4);
        } catch(e) {
            expect(e.message).toEqual('Start value must be greater than end value');
        }
    });
     
    it('should throw exception when input is not finite', () => {
        try {
            getAllPrimeNumbersInRange(3,Infinity);
        } catch(e) {
            expect(e.message).toEqual('nvalid input types, please enter numeric values only');
        }
    });
    
    it('should return array of prime numbers when valid start and end range is provided' ,() => {
        expect(getAllPrimeNumbersInRange(2,9)).toEqual([2,3,5,7]);
    });

    it('should return an empty array when no prime numbers are found in the given range' ,() => {
        expect(getAllPrimeNumbersInRange(8,10)).toEqual([]);
    });

    it('should return array with single element if start and end range is same and value is prime', () => {
        expect(getAllPrimeNumbersInRange(2,2)).toEqual([2]);
    });
});
