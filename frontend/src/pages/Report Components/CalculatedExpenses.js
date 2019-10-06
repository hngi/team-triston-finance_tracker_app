import React from 'react';
import '../../styles/details.css';
import { Button } from "reactstrap";
import Table from './Table';
import {getWithAuth} from "../../utils/APIRequest";
// import Loader from '../../components/Loader';
// const 
class CalculatedExpenses extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        startDate: '',
        endDate: '',
        expenseList: [],
        totalExpense: 0,
        expenseArray: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        const response = await getWithAuth(`/expense`);
        const data =  await response.json();
        console.log(data);
        this.setState(previousState => ({
            ...previousState,
            expenseList: data,
        }))
    }
    handleChange = ({ target: {name, value}}) => {
    this.setState(previousState => ({
        ...previousState,
        [name]: value,
    }))
    };
    
    handleClick = () => {
        const { endDate, startDate, expenseList } = this.state;
        const dateRangeStart = startDate.split('-');
        const dateRangeEnd = endDate.split('-');
        const from = new Date(dateRangeStart[2], parseInt(dateRangeStart[1])-1, dateRangeStart[0]);
        const to   = new Date(dateRangeEnd[2], parseInt(dateRangeEnd[1])-1, dateRangeEnd[0]);
        const expenseArray = [];
        for (let item in expenseList) {
            let checkDate = expenseList[item].purchase_date.split('-');
            checkDate = new Date(checkDate[2], parseInt(checkDate[1])-1, checkDate[0])
            if (checkDate > from && checkDate < to) {
                expenseArray.push(expenseList[item])
            }
        }
        console.log(expenseArray)
        this.setState(previousState => ({
            ...previousState,
            totalExpense: expenseArray.map(expense => expense.Amount).reduce((a,b) => a + b, 0),
            expenseArray,
        }));
    };
    
    
    render() {
        const { expenseList, totalExpense, } = this.state;
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
                {totalExpense && (
                    <h2>The total expense for this period of time is {totalExpense}</h2>
                )}
                <div className="table_container">
                    <Table 
                        data={ expenseList }
                    />
                </div>
        </div>
        )
    }
}

export default CalculatedExpenses