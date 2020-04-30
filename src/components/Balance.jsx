import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState';

export default function Balance() {
  const {transaction} = useContext(GlobalContext);
  const amounts = transaction.map(item => (item.amount));
  const total = amounts.reduce((acc, cur) => { return acc + cur}, 0).toFixed(2);
  return (
    <div>
      <>
        <h4>Your Balance</h4>
        <h1>#{total}</h1>
      </>
    </div>
  )
}
