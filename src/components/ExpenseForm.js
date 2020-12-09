import React from 'react'

function ExpenseForm() {
    return (
        <div>
            <form className = 'expense-form'>
                <select style={{borderRadius: 5}} >
                    <option value='cash'>Cash</option>
                    <option value='credit card'>Credit Card</option>
                    <option value='crypto'>Crypto</option>
                </select>
                <input style={{width: 200, borderRadius: 5,}} type= 'text' placeholder='What did you buy?' />
                <input style={{width: 200, borderRadius: 5}} type='text' placeholder= 'Where did you buy it?'></input>
                <input style={{borderRadius: 5}} type='date'></input>
                <input style={{width: 100, borderRadius: 5}} type='submit'></input>
            </form>
        </div>
    )
}

export default ExpenseForm
