import React from 'react'
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header'
import ExpenseTable from './components/ExpenseTable'

import './App.css';

class App extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
          expenses: [],
          payType: '',
          itemBought: '',
          payLocation: '',
          amountSpent: '',
          dateOfPurchase: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      }
      handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value,
        })
      }

      handleSubmit(e) {
        e.preventDefault();
        console.log('submit')
        // let newExpenseRow = {
        //   payType: e.taret.paytype.value,
        //   payLocation: e.target.payLocation.value,
        //   amountSpent: e.target.amountSpent.value,
        //   dateOfPurchase: e.target.dateOfPurchase.value,
        //   delete: 'X'
        // }
      }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <ExpenseForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} expenses={this.state.expenses} />
        <ExpenseTable />
      </div>
    );
  }
}

export default App;
