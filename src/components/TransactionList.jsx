import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';
import Transaction from './Transaction';


export default function TransactionList() {
  const {transaction} = useContext(GlobalContext);
  return (
    <>
      <h3>History
      <ul className="list">
        {transaction.map(transaction => ( <Transaction key={transaction.id}  transaction={transaction}/>))}
        
      </ul>
      </h3>
    </>
  )
}
