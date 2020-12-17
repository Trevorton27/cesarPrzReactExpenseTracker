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
                    value={this.props.newPayType}
                    onChange={this.props.handleChange} 
                    required
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
                    value={this.props.newItemBought}
                    onChange={this.props.handleChange}
                    required
                    />
                <input 
                    name='payLocation' 
                    style={{width: 200, borderRadius: 5}} 
                    type='text' 
                    placeholder= 'Where did you buy it?' 
                    value={this.props.newPayLocation}
                    onChange={this.props.handleChange}
                    required
                    />
                <input 
                    name='amountSpent' 
                    style={{width: 200, borderRadius: 5}} 
                    type='number' 
                    placeholder='How much did you spend?' 
                    value={this.props.newAmountSpent}
                    onChange={this.props.handleChange} 
                    required
                    />
                <input 
                    name='dateOfPurchase' 
                    style={{borderRadius: 5}} 
                    type='date' 
                    value={this.props.newDateOfPurchase}
                    onChange={this.props.handleChange} 
                    required
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
