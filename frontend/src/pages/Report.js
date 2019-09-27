import React, { Component } from 'react';
import Sidebar from "./Report Components/Sidebar";
import { UserContext } from '../UserContext';
import ReportDetail from './Report Components/ReportDetail';
import Dashboard from './Report Components/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Button } from 'reactstrap';
import "../styles/Report.css";

class Report extends Component {

    constructor(props){
      super(props)
      this.state = {
        activeTab : "dashboard",
        menuClass : ""
      }
      this.handleTabClick = this.handleTabClick.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
      this.showMenu = this.showMenu.bind(this);
      Report.contextType = UserContext;
    }

    
    handleTabClick = (activeTab)=>{
      this.setState({ activeTab, menuClass:"" });
    }

    showMenu(){
      this.setState({ menuClass:"mobile-show" })
    }

    closeMenu(){
      this.setState({ menuClass:"" })
    }

    render() {
        const { activeTab } = this.state;
        const { user } = this.context;

        return (
            <div className="report_container">
                <Sidebar 
                  activeTab = { activeTab } 
                  menuClass = { this.state.menuClass }
                  onCloseMenu = { this.closeMenu }
                  onTabClick = { this.handleTabClick }  
                />
                <main className="report_content">
                  <nav className="mobile_nav">
                    <MenuIcon 
                      onClick = { this.showMenu }
                      width="1.5em" 
                      height="1.5em"  
                      fill="#fff" 
                    />
                    <h3>Dashboard</h3>
                  </nav>
                  <div className="header_nav">
                    <h4>Welcome { user.userData.username },</h4>
                    <Button color="primary">
                      <AddCircleIcon /> New Expense
                    </Button>
                  </div>
                  <div className="view-content" >
                    {
                      activeTab === "dashboard" 
                      ? <Dashboard { ...this.state } />
                      : <ReportDetail { ...this.state } />
                    }
                  </div>
                </main>
            </div>
        );
    }
}

export default Report;