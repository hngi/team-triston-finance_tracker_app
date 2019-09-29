import React from 'react';
import { Table } from 'reactstrap';
import style from '../../styles/Table.module.css';

export default function CustomPaginationActionsTable() {

    return (
        <>                
            <div className = { style.topCtrl }>
                <h6> Item List </h6>
            </div>
            <Table borderless>
            <thead>
                <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr className={ style.row }>
                <th scope="row">1</th>
                <td>Bounty</td>
                <td>₦1,000</td>
                <td>bounty for issue #2234</td>
                </tr>
                <tr className={ style.row }>
                <th scope="row">2</th>
                <td>Bisciut</td>
                <td>₦700</td>
                <td>gain weight</td>
                </tr>
                <tr className={ style.row }>
                <th scope="row">3</th>
                <td>bounty</td>
                <td>₦1,000</td>
                <td>Isuess #1567</td>
                </tr>
            </tbody>
            </Table>
        </>
    );
}