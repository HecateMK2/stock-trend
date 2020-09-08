import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StockContext } from '../context/StockContext';
import { StockTable } from '../components/StockTable';

configure({ adapter: new Adapter() });

describe("StockTable tests", () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            data: { 
                FB: [{
                    Day: "Monday",
                    Green: 2,
                    Red: 4,
                }],
                CHWY: [{
                    Day: "Monday",
                    Green: 3,
                    Red: 4,
                }] 
            },
        }

        wrapper = mount(<StockTable />, {
            wrappingComponent: StockContext.Provider,
            wrappingComponentProps: {
              value: props,
            },
        });
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('should show correct table title for FB', () => {
        let table = wrapper.find("#FB");
        expect(table.find(".table-title").text()).toEqual("FB");
    });

    it('should show correct table title for CHWY', () => {
        let table = wrapper.find("#CHWY");
        expect(table.find(".table-title").text()).toEqual("CHWY");
    });

    it('should show correct table title', () => {
        let table = wrapper.find("#FB");
        expect(table.find("td")).toHaveLength(4);
    });

    it('should have correct number of table titles', () => {
        expect(wrapper.find(".table-title")).toHaveLength(2);
    });
})