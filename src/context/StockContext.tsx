import React, { useState, createContext, useEffect } from 'react';
import moment from 'moment'
import { getTickers, getStock } from '../api/api';

export const StockContext = createContext<ContextProps>({
    stocks: [],
    data: {},
    tickers: [],
    start: moment().subtract(3, 'month').format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD'),
    setStocks: (value: any) => null,
    setStart: (value: any) => null,
    setEnd: (value: any) => null,
    getStockInfo: () => null,
    loading: false,
});

interface ContextProps {
    stocks: string[],
    tickers: any[],
    data: any,
    setStocks: (event: any) => void,
    start: string,
    end: string,
    setStart: (event: any) => void,
    setEnd:  (event: any) => void,
    getStockInfo: () => void,
    loading: boolean,
}

export const StockContextProvider = (props : any) => {
    let d = new Date();
    d.setMonth(d.getMonth() - 3);

    const [stocks, setStocks] = useState([]);
    const [start, setStart] = useState(moment().subtract(3, 'month').format('YYYY-MM-DD'));
    const [end, setEnd] = useState(moment().format('YYYY-MM-DD'));
    const [tickers, setTickers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetch() {
            const tickers = await getTickers();
            let tickerSelect = tickers.map((x : string) => {
                return {
                    value: x,
                    label: x,
                }
            })
            setTickers(tickerSelect);
        }

        fetch();
    }, []);

    async function getStockInfo() {
        setLoading(true);
        let stocksParam = stocks.map((x : any) => x.value);
        let parameters = {
            id: stocksParam.join(" "),
            start: start,
            end: end,
        };
        let stockInfo = await getStock(parameters);
        setData(stockInfo);
        setLoading(false);
    }

    return (
        <StockContext.Provider 
            value={{ 
                stocks, 
                tickers, 
                data, 
                start, 
                end, 
                loading,
                setStocks, 
                setStart, 
                setEnd,
                getStockInfo,
            }}>
            {props.children}
        </StockContext.Provider>
    )
}