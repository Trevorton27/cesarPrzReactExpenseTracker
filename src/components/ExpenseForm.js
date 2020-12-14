import React from 'react'

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        payType: '',
        itemBought: '',
        payLocation: '',
        amountSpent: '',
        date: '',
    }
    this.handleChange = this.handleChange.bind(this);

}
handleChange(e) {
    this.setState({
        itemBought: e.target.value,
        payLocation: e.target.value
    })
}


    render() {
        console.log(this.state);
        return (
            <div>
            <form className = 'expense-form'>
                <select name='payType' id='payment-type' style={{borderRadius: 5}} onChange={this.handleChange} >
                    <option value=''>Select Payment Type</option>
                    <option value='cash'>Cash</option>
                    <option value='credit card'>Credit Card</option>
                    <option value='crypto'>Crypto</option>
                </select>
                <input name={this.itemBought} style={{width: 200, borderRadius: 5,}} type= 'text' placeholder='What did you buy?' onChange={this.handleChange}/>
                <input name={this.props.payLocation} style={{width: 200, borderRadius: 5}} type='text' placeholder= 'Where did you buy it?' onChange={this.handleChange} ></input>
                <input name='amountSpent' style={{width: 200, borderRadius: 5}} type='number' placeholder='How much did you spend?' onChange={this.handleChange} ></input>
                <input name='dateOfPurchase' style={{borderRadius: 5}} type='date' onChange={this.handleChange} />
                <input style={{width: 100, borderRadius: 5}} type='submit'></input>
            </form>
        </div>
        )
    }
}

export default ExpenseForm
