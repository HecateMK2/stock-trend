import React, { useContext } from 'react';
import moment from 'moment';
import { StockContext } from '../context/StockContext';
import './scss/Table.scss';
import { Row, Col, Table } from 'react-bootstrap';

export const StockTable = () => {
    const { data, selected } = useContext(StockContext);
    return (
        <>
            <Row>
                {data && data.length > 0 && selected && (
                    <Col>
                        <div>
                            <h4 className="table-title">{selected.label.toUpperCase()}</h4>
                            <Table striped hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Open</th>
                                        <th>High</th>
                                        <th>Low</th>
                                        <th>Close</th>
                                        <th>Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item: any) => (
                                        <tr key={item.date}>
                                            <td>{moment(item.date).format('YYYY-MM-DD')}</td>
                                            <td>{item.open.toFixed(2)}</td>
                                            <td>{item.high.toFixed(2)}</td>
                                            <td>{item.low.toFixed(2)}</td>
                                            <td>{item.close.toFixed(2)}</td>
                                            <td>{item.volume}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    );

}