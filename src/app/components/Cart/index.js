'use client'
import Image from 'next/image'
import { money } from '../../helper';
import { useDataContext } from "../../LayoutWrapper";
import Button from '../Button';
import './index.scss';

const Cart = () =>  {
  const values = useDataContext();
  const { carts, handleRemove } = values;
  const carTotal = carts.reduce((prev, curr) =>  prev + curr.price, 0);

  return (
    <div className='table'>
      <table className="table__table-list">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Interest</th>
          </tr>
        </thead>
        <tbody>
          {
            carts?.map((cart, index) => {
              return (
                <tr key={index}>
                  <td>{cart.title}</td>
                  <td>{cart.description}</td>
                  <td>₦{money.format(cart.price)}</td>
                  <td>
                    <Image
                      src={cart.thumbnail}
                      width={100}
                      height={100}
                      alt={cart.title}
                    />
                  </td>
                  <tr className="table__button">
                    <Button onClick={() => handleRemove(cart.id)}>
                      Remove Item
                    </Button>
                  </tr>
                </tr>
              )
            })
          }
          <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>
              ₦{money.format(carTotal)}
            </td>
            <td>
              <Button type="success">
                Checkout
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Cart;

