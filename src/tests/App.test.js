import App from '../App';
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StockContext } from '../context/StockContext';

configure({ adapter: new Adapter() });

describe("App tests", () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(<App />, {
            wrappingComponent: StockContext.Provider,
        });
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it("should render filter", () => {
        expect(wrapper.find("StockFilter")).toHaveLength(1);
    });

    it("should render table", () => {
      expect(wrapper.find("StockTable")).toHaveLength(1);
    });

    it("should render 3 footer lines", () => {
      expect(wrapper.find(".footer-text")).toHaveLength(3);
    });
})