import React from 'react';
import Card from '../../UI/Card/Card';
import TransactionDate from '../TransactionDate/TransactionDate';
import './TransactionItem.css'

const TransactionItem = ({ trans }) => {

  return (
		<Card className="trans-item">
      <TransactionDate date={ trans.date } />
      <div className='desc'>
        <h2>{ trans.title }</h2>
        <div className='price'>$ { trans.amount} </div>
      </div>
		</Card>
	);
};

export default TransactionItem;

