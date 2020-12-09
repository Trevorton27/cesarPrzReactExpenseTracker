import React from 'react'


function ExpenseTable() {

    return (
        <div className='table'>
            <table className='tableHeader'>
                <thead>
                <tr>
                    <th>What did you buy?</th>
                    <th>Where did you buy it?</th>
                    <th>How much did you spend?</th>
                    <th>When was your purchase?</th>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default ExpenseTable
