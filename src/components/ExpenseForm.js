import React from 'react';

const ExpenseForm = (props) => {
  return (
    <div className='container'>
      <form onSubmit={props.handleSubmit}>
        <div className='form-row'>
          <div className='form-group col'>
            <select
              className='form-control'
              name='payType'
              id='payment-type'
              value={props.newPayType}
              onChange={props.handleChange}
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
              value={props.newDateOfPurchase}
              onChange={props.handleChange}
              required
            />
          </div>
          <div className='form-group col'>
            <input
              className='form-control'
              name='amountSpent'
              type='number'
              placeholder='How much did you spend?'
              value={props.newAmountSpent}
              onChange={props.handleChange}
              required
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col'>
            <input
              className='form-control '
              name='itemBought'
              type='text'
              placeholder='What did you buy?'
              value={props.newItemBought}
              onChange={props.handleChange}
              required
            />
          </div>
          <div className='form-group col'>
            <input
              className='form-control'
              name='payLocation'
              type='text'
              placeholder='Where did you buy it?'
              value={props.newPayLocation}
              onChange={props.handleChange}
              required
            />
          </div>
        </div>
        <div className='form-group col'>
          <div className='text-center'>
            <input type='submit' className='btn btn-primary btn-lg' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
