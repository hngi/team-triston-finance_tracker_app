import React from 'react';
import '../../styles/details.css';
import { Button } from "reactstrap";
import Table from './Table';
// import Loader from '../../components/Loader';

// const 
class CalculatedExpenses extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          startDate: '',
          endDate: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange = ({ target: {name, value}}) => {
          this.setState(previousState => ({
          ...previousState,
          [name]: value,
        }))
    }
    
    handleClick = () => {
        console.log(this.state)
    }
    
    
    render() {
        const { expenseList } = this.props;
        console.log(expenseList);
        return (
            <div className="report_detail_container">
                <div className="user_details">
                    <p>Total spent in this period of time:</p>
                </div>
                <div>
                    <input type="date" name="startDate" onChange={this.handleChange} />  
                    <input type="date" name="endDate" onChange={this.handleChange}  />  
                    <Button
                        color="primary"
                        className="add-expense"
                        onClick={this.handleClick}
                    >
                        Calculate
                    </Button>
                </div>
                <div className="table_container">
                    <Table 
                        data={ expenseList['Year']["data"] } 
                    />
                </div>
          </div>
        )
    }
}

export default CalculatedExpenses
