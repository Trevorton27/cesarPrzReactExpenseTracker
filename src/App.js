import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header';
import ExpenseTable from './components/ExpenseTable';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payType: '',
      itemBought: '',
      payLocation: '',
      amountSpent: '',
      dateOfPurchase: '',
      expenses: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('expenses');
      const expenses = JSON.parse(json);
      if (expenses) {
        this.setState(() => ({ expenses }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenses.length !== this.state.expenses.length) {
      const json = JSON.stringify(this.state.expenses);
      localStorage.setItem('expenses', json);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      payType: this.state.payType,
      itemBought: this.state.itemBought,
      payLocation: this.state.payLocation,
      amountSpent: this.state.amountSpent,
      dateOfPurchase: this.state.dateOfPurchase
    };

    this.setState({
      expenses: [...this.state.expenses, newExpense]
    });
  }

  handleDelete(i) {
    let expenseRows = [...this.state.expenses];
    expenseRows.splice(i, 1);
    this.setState({
      expenses: expenseRows
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <Header />
        <ExpenseForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ExpenseTable
          handleDelete={this.handleDelete}
          expenses={this.state.expenses}
        />
      </div>
    );
  }
}

export default App;
