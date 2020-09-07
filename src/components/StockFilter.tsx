import React, { useContext } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Button, Spinner } from 'react-bootstrap';
import './scss/Stock.scss';

import { StockContext } from '../context/StockContext';
import { optimizeSelect } from './OptimizedSelect';
import { ValueType } from 'react-select/src/types';

export const StockFilter = () => {
    const { loading, selected, setSelected, setStart, setEnd, getStockInfo, tickers, start, end } = useContext(StockContext);

    // function handleSelect(event : ValueType<any>) {
    //     let inputs = [];
    //     if (event && event.length > 0) {
    //         inputs = event.map((item : any) => {
    //             return {
    //                 value: item.value.toUpperCase(),
    //                 label: item.label.toUpperCase(),
    //             }
    //         });
    //     }
    
    //     setSelected(inputs);
    // }

    return (
        <>       
            <form className="form-inline">
                <div className="form-group m-right-10">
                    <label htmlFor="stock" className="label">Stock</label>
                    <CreatableSelect 
                        id="ticker-dropdown"
                        options={tickers} 
                        values={selected}
                        isMulti={true}
                        getOptionLabel={option => option.label.toUpperCase()}
                        getOptionValue={option => option.value.toUpperCase()}
                        onChange={setSelected}
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