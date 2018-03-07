import { add } from './calculator';

describe('calculator', () => {
    let num1;
    let num2;
    let result;

    it('should add two numbers - happy flow', () => {
        // given
        num1 = 3;
        num2 = 5;

        // when 
        result = add(num1, num2);

        // then
        expect(result).toBe(8);
    });


    it('should return null when one of the values is not a number', () => {
        // given
        num1 = null;
        num2 = 5;

        // when 
        result = add(num1, num2);

        // then
        expect(result).toBe(null);
    });

    it('should return null when one of the values is not a number - string', () => {
        // given
        num1 = 'asd';
        num2 = 5;

        // when 
        result = add(num1, num2);

        // then
        expect(result).toBe(null);
    });
});