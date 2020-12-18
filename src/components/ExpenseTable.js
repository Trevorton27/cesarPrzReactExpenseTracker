import React from 'react'


class ExpenseTable extends React.Component {
    render() {
        const expenses = this.props.expenses
    return (
        <div className='list-group'>
            <table className='table'>
                <thead>
                <tr>
                    <th scope='col'>Payment</th>
                    <th scope='col'>Item</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Cost</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Remove</th>
                </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => {
                        return(
                            <tr key={expense.id} >
                                <td> {expense.payType} </td>
                                <td> {expense.itemPurchased} </td>
                                <td> {expense.payLocation} </td>
                                <td> ${expense.amountSpent} </td>
                                <td> {expense.dateOfPurchase} </td>
                                <td><button 
                                        className='btn btn-danger btn-sm'
                                        onClick={i => this.props.handleDelete(i)} >X</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
}
export default ExpenseTable
