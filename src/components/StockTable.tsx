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
                            <Col key={key} id={key}>
                                <div>
                                    <h4 className="table-title">{key.toUpperCase()}</h4>
                                        <Table striped hover responsive variant="dark">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Intraday Change</th>
                                                    <th className="green">Overnight Green</th>
                                                    <th className="red">Overnight Red</th>
                                                    <th>Overnight Green %</th>
                                                    <th>Overnight Change %</th>
                                                </tr>
                                            </thead>    
                                            <tbody>                              
                                                {
                                                    data[key].map((item : any) => (
                                                        <tr key={item.Day}>
                                                            <td>{item.Day}</td>
                                                            <td>{(((item.IntradayChange.reduce((a : number, b: number) => a + b)) / item.IntradayChange.length)).toFixed(2)} %</td>
                                                            <td>{item.Green}</td>
                                                            <td>{item.Red}</td>
                                                            <td>{((item.Green) / (item.Green + item.Red) * 100).toFixed(0)}%</td>
                                                            <td>{(((item.OvernightChange.reduce((a : number, b: number) => a + b)) / item.OvernightChange.length)).toFixed(2)} %</td>
                                                        </tr>
                                                        )
                                                    )
                                                
                                                }     
                                                 </tbody>       
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