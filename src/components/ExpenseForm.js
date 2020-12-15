import React from 'react'

class ExpenseForm extends React.Component {
    render() {
        return (
            <div>
            <form className = 'expense-form' onSubmit={this.props.handleSubmit}>
                <select 
                    name='payType' 
                    id='payment-type' 
                    style={{borderRadius: 5}} 
                    onChange={this.props.handleChange} 
                    >
                        <option value=''>Select Payment Type</option>
                        <option value='cash'>Cash</option>
                        <option value='credit card'>Credit Card</option>
                        <option value='crypto'>Crypto</option>
                </select>
                <input 
                    name='itemBought' 
                    style={{width: 200, borderRadius: 5,}} 
                    type= 'text' 
                    placeholder='What did you buy?' 
                    onChange={this.props.handleChange}
                    />
                <input 
                    name='payLocation' 
                    style={{width: 200, borderRadius: 5}} 
                    type='text' 
                    placeholder= 'Where did you buy it?' 
                    onChange={this.props.handleChange} ></input>
                <input 
                    name='amountSpent' 
                    style={{width: 200, borderRadius: 5}} 
                    type='number' 
                    placeholder='How much did you spend?' 
                    onChange={this.props.handleChange} ></input>
                <input 
                    name='dateOfPurchase' 
                    style={{borderRadius: 5}} 
                    type='date' 
                    onChange={this.props.handleChange} 
                    />
                <input 
                    style={{width: 100, borderRadius: 5}} 
                    type='submit'></input>
            </form>
        </div>
        )
    }
}

export default ExpenseForm
