import React from 'react'


class ExpenseTable extends React.Component {
    render() {
        const expenses = this.props.expenses
    return (
        <div className='table'>
            <table className='table-data'>
                <thead>
                <tr>
                    <th id='itemPurchased'>What did you buy?</th>
                    <th id='placeOfPurchase'>Where did you buy it?</th>
                    <th id='amountSpent' >How much did you spend?</th>
                    <th id='dateOfPurchase' >When was your purchase?</th>
                    <th>Delete Expense</th>
                </tr>
                </thead>
                <tbody>
                    {expenses.map(expense => {
                        return(
                            <tr>
                                <td>{expense.payType}</td>
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
