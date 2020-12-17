import React from 'react'
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header'
import ExpenseTable from './components/ExpenseTable'

import './App.css';

class App extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        payType: '',
        itemBought: '',
        payLocation: '',
        amountSpent: '',
        dateOfPurchase: '',
        expenses: [],
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);

      }
      handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value,
        })
      }

      handleSubmit(e) {
        e.preventDefault();
        console.log('submit')
        let expenses = [...this.state.expenses];

        expenses.push({
          payType: this.state.payType,
          itemBought: this.state.itemBought,
          payLocation: this.state.payLocation,
          amountSpent: this.state.amountSpent,
          dateOfPurchase: this.state.dateOfPurchase,
          delete: 'Remove'
        })
        
        this.setState({
        payType: '',
        itemBought: '',
        payLocation: '',
        amountSpent: '',
        dateOfPurchase: '',
        expenses
        })
      }

      handleDelete(i) {
        let expenseRows = [...this.state.expenses]
          expenseRows.splice(i,1) 
          this.setState({
            expenses: expenseRows
          })
        }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <ExpenseForm 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          newPayType={this.state.payType}
          newItemBought={this.state.itemBought}
          newPayLocation={this.state.payLocation}
          newAmountSpent={this.state.amountSpent}
          newDateOfPurchase={this.state.dateOfPurchase}
          removeExpense={this.state.delete}
        />
        <ExpenseTable handleDelete={this.handleDelete} expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
