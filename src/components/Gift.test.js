import React, { Component } from 'react';
import { shallow } from 'enzyme';

import Gift from './Gift';


describe('Testing Gift Module', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id }, removeGift: mockRemove }
    const gift = shallow(<Gift {...props} />);

    it('should render `Gift` correctly', () => {
        expect(Gift).toMatchSnapshot();
    })

    it('should initialize the state of person=`` and present=`` ', () => {
        expect(gift.state()).toMatchObject({ person: '', present: '' })
    })

    it('should find a control input-person control', () => {
        expect(gift.find('.input-person').length).toEqual(1);
    })

    it('should find a control input-present control', () => {
        expect(gift.find('.input-present').exists()).toBe(true);
    });

    describe('when trying into person input control', () => {
        const Person = 'Uncle';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: Person }});
        })
    
        it('should have the state person value of `Teddy` on text change event', () => {
            expect(gift.state().person).toEqual(Person);
        });
    })

    describe('when trying into present input control', () => {
        const Present = 'Golf Club';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: Present }})
        });

        it('should have the state present value `Golf Club` on text change event', () => {
            expect(gift.state().present).toEqual(Present);
        })
    })

    describe('while trying to click remove gift button', () => {

        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        })

        it('should call the removeGift method from its parent', () => {
            expect(mockRemove).toBeCalledWith(id);
        })

    })
    
    

})