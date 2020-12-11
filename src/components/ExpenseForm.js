import React from 'react'

let submitExpense = document.getElementById('submit-expense')

function handleClick() {
    submitExpense.addEventListener((e) => {
    e.preventDefault();
    //let place = document.getElementById('itemPurchased').value;
    })
    console.log('clicked')
}
    
    
function ExpenseForm() {

    return (
        <div>
            <form className = 'expense-form'>
                <select style={{borderRadius: 5}} >
                    <option value='cash'>Cash</option>
                    <option value='credit card'>Credit Card</option>
                    <option value='crypto'>Crypto</option>
                </select>
                <input id='item-bought' style={{width: 200, borderRadius: 5,}} type= 'text' placeholder='What did you buy?' />
                <input id='purchase-location' style={{width: 200, borderRadius: 5}} type='text' placeholder= 'Where did you buy it?'></input>
                <input id='date-purchased' style={{borderRadius: 5}} type='date'></input>
                <input id='submit-expense' style={{width: 100, borderRadius: 5}} type='submit' onClick={handleClick} ></input>
            </form>
        </div>
    )
}

export default ExpenseForm
