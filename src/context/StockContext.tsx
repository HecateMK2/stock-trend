import React, { useState, createContext, useEffect } from 'react';
import moment from 'moment'
import { getTickers, getStock } from '../api/api';

export const StockContext = createContext<ContextProps>({} as ContextProps);

interface ContextProps {
    stocks: string[],
    tickers: any[],
    data: any,
    selected: any[],
    setStocks: (event: any) => void,
    start: string,
    end: string,
    setStart: (event: any) => void,
    setEnd:  (event: any) => void,
    setSelected: (event: any) => void,
    getStockInfo: () => void,
    loading: boolean,
}

export const StockContextProvider = (props : any) => {
    let d = new Date();
    d.setMonth(d.getMonth() - 3);

    const [stocks, setStocks] = useState([]);
    const [selected, setSelected] = useState([]);
    const [start, setStart] = useState(moment().subtract(3, 'month').format('YYYY-MM-DD'));
    const [end, setEnd] = useState(moment().format('YYYY-MM-DD'));
    const [tickers, setTickers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetch() {
            const tickers = await getTickers();
            let formattedTickers = getFormattedTickers(tickers);
            setTickers(formattedTickers);
        }

        fetch();
    }, []);

    async function getStockInfo() {
        setLoading(true);
        let stocksParam = selected.map((x : any) => x.value);
        let parameters = {
            id: stocksParam.join(" "),
            start: start,
            end: end,
        };
        let stockInfo = await getStock(parameters);
        let tickers = await getTickers();
        let formattedTickers = getFormattedTickers(tickers);

        console.log(selected)
        setTickers(formattedTickers)
        setData(stockInfo);
        setLoading(false);
    }

    function getFormattedTickers(options: any) {
        let tickerSelect = options.map((x : string) => {
            return {
                value: x,
                label: x,
            }
        });
        return tickerSelect;
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
                selected,
                setStocks, 
                setStart, 
                setEnd,
                getStockInfo,
                setSelected,
            }}>
            {props.children}
        </StockContext.Provider>
    )
}