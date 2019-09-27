import React, { useState } from 'react';
import '../../styles/details.css';

function ReportDetail(props) {

const { type } = props;

const [state, set] = useState({
    type: type|| "year",
    date: new Date().getFullYear()
})


    return (
        <div className="report_detail_container">
            <div className="user_details">
                <p>Total spent in { state.date }:</p>
                <p className="amount">₦1,000,000</p>
            </div>
            <div className="table">

            </div>
      </div>
    )
}

export default ReportDetail
