import React from 'react'

class ExpenseForm extends React.Component {
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.props.handleSubmit}>
                    <div className='form-row'>
                        <div className='form-group col'>
                            <select className='form-control'
                                name='payType' 
                                id='payment-type'
                                value={this.props.newPayType}
                                onChange={this.props.handleChange} 
                                required
                                >
                                    <option value=''>Payment</option>
                                    <option value='Cash'>Cash</option>
                                    <option value='Credit Card'>Credit Card</option>
                                    <option value='Crypto'>Crypto</option>
                                    <option value='Other'>Other</option>
                            </select>
                        </div>
                        <div className='form-group col'>
                            <input 
                                className='form-control'
                                name='dateOfPurchase' 
                                type='date' 
                                value={this.props.newDateOfPurchase}
                                onChange={this.props.handleChange} 
                                required
                            />
                        </div>
                        <div className='form-group col'>
                            <input 
                                className='form-control'
                                name='amountSpent' 
                                type='number' 
                                placeholder='How much did you spend?' 
                                value={this.props.newAmountSpent}
                                onChange={this.props.handleChange} 
                                required
                            />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col'>
                            <input 
                                className='form-control '
                                name='itemBought'
                                type= 'text' 
                                placeholder='What did you buy?' 
                                value={this.props.newItemBought}
                                onChange={this.props.handleChange}
                                required
                                />
                        </div>
                        <div className='form-group col'>
                            <input 
                                className='form-control'
                                name='payLocation'
                                type='text' 
                                placeholder= 'Where did you buy it?' 
                                value={this.props.newPayLocation}
                                onChange={this.props.handleChange}
                                required
                                />
                        </div>
                    </div>
                    <div className='form-group col'>
                        <div className='text-center'>
                            <input
                                type='submit' className='btn btn-primary btn-lg' />
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExpenseForm
