import React, { useContext } from 'react';
import Select from 'react-select';
import { Button, Spinner } from 'react-bootstrap';
import './scss/Stock.scss';

import { StockContext } from '../context/StockContext';
import { optimizeSelect } from './OptimizedSelect';

export const StockFilter = () => {
    const { stocks, data, loading, setStocks, setStart, setEnd, getStockInfo, tickers, start, end } = useContext(StockContext);

    return (
        <>       
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="stock" className="label">Stock</label>
                    <Select 
                        id="ticker-dropdown"
                        options={tickers} 
                        isMulti={true}
                        components={optimizeSelect.components}
                        onChange={setStocks}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="start-date" className="label">Start Date</label>
                    <input 
                        type="date" 
                        id="start-date" 
                        className="form-control date-input" 
                        onChange={(e) => setStart(e.target.value)} 
                        value={(start)}
                    />
                    <label htmlFor="end-date" className="label">End Date</label>
                    <input 
                        type="date" 
                        id="end-date"
                        className="form-control date-input" 
                        onChange={(e) => setEnd(e.target.value)} 
                        value={end}
                    />
                    <Button variant="primary" 
                        className="blue-outline-btn" 
                        onClick={getStockInfo}
                        disabled={loading}
                    >      
                        {loading ? "" : "Go"}    
                        {loading &&
                            <Spinner 
                                animation="border" 
                                id="spinner-custom" 
                                role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            }
                    </Button>
                   
                </div>
            </form>
        </>
    )
}