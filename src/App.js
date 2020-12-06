import React from 'react'
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header'
import ExpenseTable from './components/ExpenseTable'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}

export default App;
