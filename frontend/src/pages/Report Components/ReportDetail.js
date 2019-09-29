import React from 'react';
import '../../styles/details.css';
import Table from './Table';
import Loader from '../../components/Loader';

function ReportDetail(props) {

    const { activeTab, dashboard, dashboardLoading } = props;

    return (
        <div className="report_detail_container">
            <div className="user_details">
                <p>Total spent in { activeTab === "Year" ? new Date().getFullYear() : `this ${activeTab}` }:</p>
                <p className="amount">₦{ dashboardLoading ? <Loader width="25px" /> : dashboard[`${activeTab.toLowerCase()}ly`] }</p>
            </div>
            <div className="table_container">
                <Table />
            </div>
      </div>
    )
}

export default ReportDetail
