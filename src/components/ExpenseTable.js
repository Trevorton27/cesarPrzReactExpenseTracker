import React from 'react'


function ExpenseTable() {

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
                    <tr id='table-data'></tr>
                    <tr>
                        <td>dummy data</td>
                        <td>dummy data</td>
                        <td>dummy data</td>
                        <td>dummy data</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTable
