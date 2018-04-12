import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App Module', () => {
    const id = 1;

    it('rendres correctly', () => {
        expect(app).toMatchSnapshot();
    })
    
    it('initialize `state` object with a empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe('when clicking the `add-gift` button',() => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        })

        afterEach(() => {
            app.setState({ gifts: [] });
        })
        
        it('it should have a `state.gift` value of [{ id: 1}] when user clicks the button', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        })
        
        it('add a new gift rendered to the list', () => {
            expect(app.find('.gifts-list').children().length).toEqual(1);
        })

        it('create a gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        })
    });

    describe('when clicking the `remove-gift` button', () => {
        beforeEach(() => {
            app.instance().removeGift(id);
        })

        it('should have an empty gift array ', () => {
            expect(app.state().gifts).toEqual([]);
        })
    })
    
    

})
