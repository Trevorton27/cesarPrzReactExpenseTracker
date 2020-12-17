import React from 'react'


class ExpenseTable extends React.Component {
    render() {
        const expenses = this.props.expenses
    return (
        <div className='table'>
            <table className='table-data'>
                <thead>
                <tr>
                    <th>Expense Log</th>
                </tr>
                </thead>
            </table>
            <table className='expense-table-data'>
                <tbody>
                    {expenses.map((expense, i) => {
                        return(
                            <tr key={expense.id} >
                                <td> {expense.payType} </td>
                                <td> {expense.itemPurchased} </td>
                                <td> {expense.payLocation} </td>
                                <td> ${expense.amountSpent} </td>
                                <td> {expense.dateOfPurchase} </td>
                                <td><button onClick={i => this.props.handleDelete(i)} >Remove</button></td>
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
