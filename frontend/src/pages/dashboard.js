import React, { Component } from 'react';
import '../styles/dashboard.css';

function dashboard() {

        return (
            <div>
              <div className="content_container">
      <main>
        {/*Dashboard Sidenav*/}
        <div className="side_bar">
        <i className="material-icons"id="close_nav">ic_clear</i>
          <ul className="side_nav" id="nav_tab">
            <li clasNames="active">
              <a href="#dashboard" id="nav_link"> <i className="material-icons">dashboard</i> Dashboard</a>
            </li>

            <li>
              <a href="#table_year" id="nav_link">
                <i className="material-icons">money</i> Total Per Year</a
              >
            </li>

            <li>
              <a href="#table_month" id="nav_link">
                <i className="material-icons">money</i>Total Per Month
              </a>
            </li>

            <li>
              <a href="#table_week" id="nav_link">
                <i className="material-icons">money</i> Total Per Week</a
              >
            </li>
          </ul>

          <a className="btn sidebar_btn">Log Out</a>
        </div>

        {/*dashboard main content*/}
        <section className="dashboard">
          <nav className="mobile_nav">
            <i className="material-icons burger">menu</i>
            <h1>Dashboard</h1>
          </nav>

          <header>
            <div className="header_nav">
              <h1>Welcome User,</h1>
              <button class="btn">
                <i className="material-icons">add_circle</i> Add New Item
              </button>
            </div>
          </header>

          <p clasNames="response">Successfully Updated <i className="material-icons">ic_clear</i></p>

          <div className="dashboard_cards active tab_pane" id="dashboard">
            <div className="square_cards">
              <div className="card_square card_left">
                <i className="material-icons">money</i>
                <p className="amount">$50,000</p>
                <p>total spent in a week</p>
              </div>
              <div class="card_square card_right">
                <i class="material-icons">money</i>
                <p class="amount">$100,000</p>
                <p>total spent in a month</p>
              </div>
            </div>

            <div className="card_rect">
              <i className="material-icons">money</i>
              <p className="amount">$1,200,000</p>
              <p>total spent in a year</p>
            </div>
          </div>

          <div className="table  tab_pane" id="table_year">
            <div className="user_details">
              <p>Total spent in a year:</p>
              <p className="amount">$1,000,000</p>
            </div>
            <input type="text" className="search_box" placeholder="search" />
            {/*YEARLY EXPENDITURE*/}
            <table className="user_data" >
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Transportation</td>
                  <td>$3,000</td>
                  <td>Taxify</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Birthdays</td>
                  <td>$1600</td>
                  <td>Family & Friends </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>Entertainment</td>
                  <td>$3,400</td>
                  <td>Netflix</td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>Food</td>
                  <td>$1,000</td>
                  <td>Bread and Egg</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>Data Sub</td>
                  <td>$600</td>
                  <td>MTN</td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>Clothing</td>
                  <td>$3,400</td>
                  <td>Pepper Dem</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table  tab_pane" id="table_month">
            <div className="user_details">
              <p>Total spent in a month:</p>
              <p className="amount">$100,000</p>
            </div>
            <input type="text" className="search_box" placeholder="search" />
            {/*MONTHLY EXPENDITURE*/}
            <table className="user_data" >
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Food</td>
                      <td>$1,000</td>
                      <td>Bread and Egg</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Data Sub</td>
                      <td>$600</td>
                      <td>MTN</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Clothing</td>
                      <td>$3,400</td>
                      <td>Pepper Dem</td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Food</td>
                      <td>$1,000</td>
                      <td>Bread and Egg</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>Data Sub</td>
                      <td>$600</td>
                      <td>MTN</td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>Clothing</td>
                      <td>$3,400</td>
                      <td>Pepper Dem</td>
                    </tr>
                  </tbody>
            </table>
          </div>

          <div className="table  tab_pane" id="table_week">
            <div className="user_details">
              <p>Total spent in a week:</p>
              <p className="amount">$10,000</p>
            </div>
            <input type="text" class="search_box" placeholder="search" />
            {/*WEEKLY EXPENDITURE*/}
            <table className="user_data" >
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Something</td>
                  <td>$2,000</td>
                  <td>A Company</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Something</td>
                  <td>$2,000</td>
                  <td>A Company</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Something</td>
                  <td>$2,000</td>
                  <td>A Company</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Something</td>
                  <td>$2,000</td>
                  <td>A Company</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Something</td>
                  <td>$2,000</td>
                  <td>A Company</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Something</td>
                  <td>$2,000</td>
                  <td>A Company</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>

            </div>
        );
    }

export default dashboard;