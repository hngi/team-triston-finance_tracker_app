import React from 'react';
import '../../styles/Dashboard.css';
import Wallet from '../../components/svgs/Wallet';

function Dashboard() {
    return (
        <div className="dashboard_cards" id="dashboard">
            <div className="square_cards">
                <div className="card_square card_left">
                    <Wallet fill={ "#ffffff" } />
                    <p className="amount">₦50,000</p>
                    <p>Total spent in a week</p>
                </div>
                <div className="card_square card_right">
                    <Wallet fill={ "#ffffff" } />
                    <p className="amount">₦100,000</p>
                    <p>Total spent in a month</p>
                </div>
            </div>
            <div className="card_rect">
                <Wallet fill={ "#ffffff" } />
                <p className="amount">₦1,200,000</p>
                <p>Total spent in a year</p>
            </div>
      </div>
    )
}

export default Dashboard
