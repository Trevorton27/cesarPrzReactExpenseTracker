import React from 'react'

function ExpenseForm() {
    return (
        <div>
            <form className = 'expense-form'>
                <input type= 'text' placeholder='What did you buy?' />
                
                <select>
                    <option value='credit card'>Credit Card</option>
                    <option value='cash'>Cash</option>
                    <option value='crypto'>Crypto</option>
                </select>
                <input type='date'></input>
                <input type='text' placeholder= 'Where did you buy it?'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default ExpenseForm
