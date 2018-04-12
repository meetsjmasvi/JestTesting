import { max_number } from './index';

describe('verify max_number function', () => {

    it('given an empty array', () => {
        expect(max_number([])).toEqual(0);
    });

    it('given an array of object with id\'s', () => {
        expect(max_number([ {id: 1}, {id: 2}, {id: 3} ])).toEqual(3);
    });

})