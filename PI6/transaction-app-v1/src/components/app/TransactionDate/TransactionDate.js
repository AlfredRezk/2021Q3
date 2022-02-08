import React from 'react';
import './TransactionDate.css'

const TransactionDate = (props) => {

  const { date } = props;
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', {day: '2-digit'})

  return (
		<time className="icon">
      <em>{ month}</em>
      <strong>{ year}</strong>
      <span>{ day}</span>
		</time>
	);
};

export default TransactionDate;
