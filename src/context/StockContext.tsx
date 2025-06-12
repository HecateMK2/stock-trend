import React, { useState, createContext, useEffect } from 'react';
import moment from 'moment';
import { getTickers, getStock } from '../api/api';

interface Ticker {
  value: string;
  label: string;
}

interface StockData {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface ContextProps {
    tickers: Ticker[];
    data: StockData[];
    selected: Ticker | null;
    start: string;
    end: string;
    loading: boolean;
    setStart: (date: string) => void;
    setEnd:  (date: string) => void;
    setSelected: (ticker: Ticker | null) => void;
    getStockInfo: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const StockContext = createContext<ContextProps>({} as ContextProps);

export const StockContextProvider = (props : any) => {
    const [selected, setSelected] = useState<Ticker | null>(null);
    const [start, setStart] = useState(moment().subtract(3, 'month').format('YYYY-MM-DD'));
    const [end, setEnd] = useState(moment().format('YYYY-MM-DD'));
    const [tickers, setTickers] = useState<Ticker[]>([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<StockData[]>([]);

    useEffect(() => {
        async function fetch() {
            const tickers = await getTickers();
            setTickers(tickers);
        }

        fetch();
    }, []);

    async function getStockInfo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        if (selected) {
            const parameters = {
                ticker: selected.value,
                from: start,
                to: end,
            };
            const stockInfo = await getStock(parameters);
            setData(stockInfo);
        }
        setLoading(false);
    }

    return (
        <StockContext.Provider
            value={{
                tickers,
                data,
                start,
                end,
                loading,
                selected,
                setStart,
                setEnd,
                getStockInfo,
                setSelected,
            }}>
            {props.children}
        </StockContext.Provider>
    )
}