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
                                    <h4 className="table-title">{key.toUpperCase()}</h4>
                                        <Table striped hover variant="dark">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="green">Green</th>
                                                    <th className="red">Red</th>
                                                    <th>Overnight Green %</th>
                                                </tr>
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