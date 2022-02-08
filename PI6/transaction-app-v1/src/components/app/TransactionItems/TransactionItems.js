import React from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import Card from '../../UI/Card/Card';
import './TransactionItem.css'

const TransactionItems = ({ transactions}) => {
  return (
    <Card className="trans-items">
      { transactions.map(t => <TransactionItem trans={ t } key={ t.id}/>)}
    </Card>
  );
};

export default TransactionItems;

