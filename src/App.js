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
    const json = localStorage.getItem('expenses') || [];
    const expenses = JSON.parse(json);
    if (expenses) {
      this.setState(() => ({ expenses }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expenses.length !== this.state.expenses.length) {
      const json = JSON.stringify(this.state.expenses);
      localStorage.setItem('expenses', json);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      id: Number(Math.floor(new Date().getTime() * Math.random())),
      payType: this.state.payType,
      itemBought: this.state.itemBought,
      payLocation: this.state.payLocation,
      amountSpent: this.state.amountSpent,
      dateOfPurchase: this.state.dateOfPurchase
    };

    this.setState({
      expenses: [...this.state.expenses, newExpense],
      payType: '',
      itemBought: '',
      payLocation: '',
      amountSpent: '',
      dateOfPurchase: ''
    });
    this.setState({ payType: 'payment' });
  }

  handleDelete(id) {
    let filteredExpenses = this.state.expenses.filter(
      (expense) => expense.id !== id
    );

    this.setState({
      expenses: filteredExpenses
    });
  }

  render() {
    return (
      <div className='App'>
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
        <ExpenseTable
          handleDelete={this.handleDelete}
          expenses={this.state.expenses}
        />
      </div>
    );
  }
}

export default App;
