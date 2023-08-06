'use client'

import { useContext } from 'react';
import { money, DataContext } from '../helper';

import LayoutWrapper from "../LayoutWrapper";
import './index.scss';

const Cart = ({ carts }) =>  {
  const values = useContext(DataContext);
  console.log(values, 'values')
  // const { 
  //   productLists,
  //   carts,
  //   setCarts,
  //   handleRemove,
  //   setProductLists
  // } = values;
  // console.log(values)
  return (
    <LayoutWrapper>
      <div className='table-wrapper'>
        <table id="customers">
          <tr>
            <th>Transaction Id</th>
            <th>Loan Balance</th>
            <th>Month Count</th>
            <th>Expected Repayment Amount</th>
            <th>Interest</th>
            <th>Total Repayment Amount</th>
          </tr>
            {
              carts?.data?.map((d, index) => {
                return (
                  <tr key={index}>
                    <td>{d.TRANSACTION_ID}</td>
                    <td>{d.LOAN_BALANCE}</td>
                    <td className="duration">{d.MONTH_COUNT}</td>
                    <td>{d.EXPECTED_REPAYMENT_AMOUNT}</td>
                    <td>₦{money.format(d.INTEREST)}</td>
                    <td>₦{money.format(d.TOTAL_REPAYMENT_AMOUNT)}</td>
                  </tr>
                )
              })
            }
        </table>
      </div>
    </LayoutWrapper>
  )
};

export default Cart;

