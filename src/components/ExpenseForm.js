import React from 'react'

class ExpenseForm extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='column'>
                    <form onSubmit={this.props.handleSubmit}>
                        <select 
                            className='form-control col-6'
                            name='payType' 
                            id='payment-type'
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
                            className='form-control col-6'
                            name='itemBought'
                            type= 'text' 
                            placeholder='What did you buy?' 
                            value={this.props.newItemBought}
                            onChange={this.props.handleChange}
                            required
                            />
                        <input 
                            className='form-control col-6'
                            name='payLocation'
                            type='text' 
                            placeholder= 'Where did you buy it?' 
                            value={this.props.newPayLocation}
                            onChange={this.props.handleChange}
                            required
                            />
                        <input 
                            className='form-control col-6'
                            name='amountSpent' 
                            type='number' 
                            placeholder='How much did you spend?' 
                            value={this.props.newAmountSpent}
                            onChange={this.props.handleChange} 
                            required
                            />
                        <input 
                            className='form-control col-6'
                            name='dateOfPurchase' 
                            type='date' 
                            value={this.props.newDateOfPurchase}
                            onChange={this.props.handleChange} 
                            required
                            />
                        <input
                            type='submit' className='btn btn-primary form-control col-6'></input>  
                </form>
            </div>
        </div>
        )
    }
}

export default ExpenseForm
