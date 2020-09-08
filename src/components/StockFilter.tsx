import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import './scss/Stock.scss';
import Select from 'react-select';

import { StockContext } from '../context/StockContext';

export const StockFilter = () => {
    const { loading, selected, tickers, start, end, setSelected, setStart, setEnd, getStockInfo } = useContext(StockContext);

    return (
        <>       
            <form className="form-inline" onSubmit={getStockInfo}>
                <div className="form-group m-right-10">
                    <label htmlFor="stock" className="label">Stock</label>
                    <Select 
                        id="ticker-dropdown"
                        options={tickers} 
                        values={selected}
                        isMulti={true}
                        getOptionLabel={option => option.label.toUpperCase()}
                        getOptionValue={option => option.value.toUpperCase()}
                        onChange={setSelected}
                        isDisabled={loading}
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
                        type="submit"
                        id="go-btn"
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