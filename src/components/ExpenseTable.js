import React from 'react'


class ExpenseTable extends React.Component {
    render() {
        const expenses = this.props.expenses
    return (
        <div className='table'>
            <table className='table-data'>
                <thead>
                <tr>
                    <th id='payType'>How did you pay?</th>
                    <th id='itemPurchased'>What did you buy?</th>
                    <th id='placeOfPurchase'>Where did you buy it?</th>
                    <th id='amountSpent' >How much did you spend?</th>
                    <th id='dateOfPurchase' >When was your purchase?</th>
                    <th>Delete Expense</th>
                </tr>
                </thead>
            </table>
            <table className='expense-table-data'>
                <tbody>
                    {expenses.map(expense => {
                        return(
                            <tr>
                                <td> {expense.payType} </td>
                                <td> {expense.itemPurchased} </td>
                                <td> {expense.payLocation} </td>
                                <td> ${expense.amountSpent} </td>
                                <td> {expense.dateOfPurchase} </td>
                                <button>Remove</button>
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
