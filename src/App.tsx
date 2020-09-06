import React, { useEffect } from 'react';
import { StockContextProvider } from './context/StockContext';
import { StockFilter } from './components/StockFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSocks } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StockTable } from './components/StockTable';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <StockContextProvider>
      <div className="header">
        <FontAwesomeIcon icon={faSocks} className="white"/>
        <h5 className="title inline pad-10">Stock Trends</h5>
      </div>
      <div className="App">
          <br/>
          <Card className="filter">
            <Card.Header>
              <StockFilter />   
            </Card.Header>
            <Card.Body>
              <StockTable />
            </Card.Body>
            <Card.Footer>
              <p className="footer-text">
                <span className="italic">Green: </span>{"Open price - previous close price > 0 total days"}</p>
              <p className="footer-text">
                <span className="italic">Red: </span>{"Open price - previous close price < 0 total days"}</p>
              <p className="footer-text">
                <span className="italic">Overnight Green %: </span>{"Green days/total days"}</p>
            </Card.Footer>
          </Card>
      </div>
    </StockContextProvider>
  );
}

export default App;
