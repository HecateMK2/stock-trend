import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StockContext } from '../context/StockContext';
import { StockFilter } from '../components/StockFilter';

configure({ adapter: new Adapter() });

describe('StockFilter tests', () => {
    let props, wrapper;

    beforeEach(() => {
        props = {
            loading: false,
            setSelected: jest.fn(),
            setStocks: jest.fn(),
            setStart: jest.fn(),
            setEnd: jest.fn(),
            getStockInfo: jest.fn(),
            tickers: [],
            start: "2019-06-05",
            end: "2019-07-01",
        }

        wrapper = mount(<StockFilter />, {
            wrappingComponent: StockContext.Provider,
            wrappingComponentProps: {
              value: props,
            },
        });
    });

    afterAll(() => {
        wrapper.unmount();
    })

    it('should not disabled the stock dropdown when loading is false', () => {
        expect(wrapper.find("Select#ticker-dropdown").props()["isDisabled"]).toBe(false);
    });

    it('should call getStockInfo on form submit', () => {
        wrapper.find("Button#go-btn").simulate('submit');
        expect(props.getStockInfo).toHaveBeenCalled();
    });

    it('should not disable button when loading is false', () => {
        expect(wrapper.find("Button#go-btn")).toHaveLength(1);
        expect(wrapper.find("Button#go-btn").props()["disabled"]).toBe(false);
    });

    it('should show correct start date', () => {
        expect(wrapper.find("#start-date")).toHaveLength(1);
        expect(wrapper.find("#start-date").props()["value"]).toEqual("2019-06-05");
    });

    it('should show correct end date', () => {
        expect(wrapper.find("#end-date")).toHaveLength(1);
        expect(wrapper.find("#end-date").props()["value"]).toEqual("2019-07-01");
    });

    it('should call setEnd on end date change', () => {
        wrapper.find("#end-date").simulate("change", { target: { value: "2019-06-10" }})
        expect(props.setEnd).toHaveBeenCalled();
    });

    it('should call setStart on start date change', () => {
        wrapper.find("#start-date").simulate("change", { target: { value: "2019-06-10" }})
        expect(props.setStart).toHaveBeenCalled();
    });

    it('should disable button when loading is true', () => {
        let wrapper = mount(<StockFilter />, {
                wrappingComponent: StockContext.Provider,
                wrappingComponentProps: {
                  value: { loading: true, },
                },
        });
        expect(wrapper.find("Button#go-btn")).toHaveLength(1);
        expect(wrapper.find("Button#go-btn").props()["disabled"]).toBe(true);
        wrapper.unmount();
    });

    it('should not disable the stock dropdown when loading is false', () => {
        let wrapper = mount(<StockFilter />, {
            wrappingComponent: StockContext.Provider,
            wrappingComponentProps: {
              value: { loading: true, },
            },
        });
        expect(wrapper.find("Select#ticker-dropdown").props()["isDisabled"]).toBe(true);
        wrapper.unmount();
    });
});