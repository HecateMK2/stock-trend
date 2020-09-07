import React from 'react';
import { shallow } from 'enzyme';
import { StockContextProvider } from '../context/StockContext';
import { StockFilter } from '../components/StockFilter';

describe('StockFilter tests', () => {
    let props, wrapper;
//    const { loading, setStocks, setStart, setEnd, getStockInfo, tickers, start, end } = useContext(StockContext);

    beforeEach(() => {
        props = {
            loading: false,
            setStocks: jest.fn(),
            setStart: jest.fn(),
            setEnd: jest.fn(),
            getStockInfo: jest.fn(),
            tickers: [],
            start: "2019-06-05",
            end: "2019-07-01",
        }

        wrapper = shallow(
            <StockContextProvider
                value={props}
            >
                <StockFilter />
            </StockContextProvider>
        )

    })
})