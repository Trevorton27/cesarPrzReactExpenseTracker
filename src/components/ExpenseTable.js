import React from 'react'


function ExpenseTable() {

    return (
        <div className='table'>
            <table className='table-data'>
                <thead>
                <tr>
                    <th>What did you buy?</th>
                    <th>Where did you buy it?</th>
                    <th>How much did you spend?</th>
                    <th>When was your purchase?</th>
                    <th>Delete Expense</th>
                </tr>
                </thead>
                <tbody>
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
