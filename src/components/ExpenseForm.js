import React from 'react'

// let submitExpense = document.getElementById('submit-expense')

// function handleClick() {
//     submitExpense.addEventListener((e) => {
//     e.preventDefault();
//     //let place = document.getElementById('itemPurchased').value;
//     })
//     console.log('clicked')
// }

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        type: 'cash',
        expense: '',
        location: '',
        cost: '',
        date: '',
    }
    this.handleChange = this.handleChange.bind(this);

}
handleChange(e) {
    const paymentType = document.getElementById('payment-type').value;
    const itemBought = document.getElementById('item-bought').value;
    const purchaseLocation = document.getElementById('purchase-location').value;
    const amountSpent = document.getElementById('amount-spent').value;
    const datePurchased = document.getElementById('date-purchased').value;
    e.preventDefault()
    console.log(paymentType, itemBought, purchaseLocation, amountSpent, datePurchased)
}

    render() {
        return (
            <div>
            <form className = 'expense-form'>
                <select id='payment-type' style={{borderRadius: 5}} >
                    <option value='cash'>Cash</option>
                    <option value='credit card'>Credit Card</option>
                    <option value='crypto'>Crypto</option>
                </select>
                <input id='item-bought' style={{width: 200, borderRadius: 5,}} type= 'text' placeholder='What did you buy?' />
                <input id='purchase-location' style={{width: 200, borderRadius: 5}} type='text' placeholder= 'Where did you buy it?'></input>
                <input id='amount-spent' style={{width: 200, borderRadius: 5}} type='number' placeholder='How much did you spend?'></input>
                <input id='date-purchased' style={{borderRadius: 5}} type='date'></input>
                <input id='submit-button' style={{width: 100, borderRadius: 5}} type='submit' onClick={this.handleChange} ></input>
            </form>
        </div>
        )
    }
}

export default ExpenseForm
