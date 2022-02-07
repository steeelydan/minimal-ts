import { testFunction } from './testFunction';

test('testFunction adds two numbers', () => {
    expect(testFunction(2, 3)).toStrictEqual(5);
});