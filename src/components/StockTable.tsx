import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';
import './scss/Table.scss';
import { Row, Col, Table } from 'react-bootstrap';

export const StockTable = () => {
    const { data } = useContext(StockContext);
    return (
        <>
            <Row>
                {
                    Object.keys(data).map((key: string, index: number) => {
                        return (
                            <Col>
                                <div>
                                    <h4 className="table-title">{key}</h4>
                                        <Table striped hover variant="dark">
                                            <thead>
                                                <th></th>
                                                <th className="green" title="Days where open price - previous close price > 0">Green</th>
                                                <th className="red" title="Days where open price - previous close price < 0">Red</th>
                                                <th title="% of green days overall">Overnight Green %</th>
                                            </thead>                                  
                                                {
                                                    data[key].map((item : any) => (
                                                        <tbody>
                                                            <td>{item.Day}</td>
                                                            <td>{item.Green}</td>
                                                            <td>{item.Red}</td>
                                                            <td>{((item.Green) / (item.Green + item.Red) * 100).toFixed(0)}%</td>
                                                        </tbody>
                                                        )
                                                    )
                                                }            
                                        </Table>
                                </div>
                            </Col>
                        );
            
                })
                }
            </Row>
        </>
    )

}