'use client'
import Image from 'next/image'
import { money } from '../../helper';
import { useDataContext } from "../../LayoutWrapper";
import Button from '../Button';
import './index.scss';

const Cart = () =>  {
  const values = useDataContext();
  const { carts, handleRemove, setScreen } = values;
  const carTotal = carts.reduce((prev, curr) =>  prev + curr.price, 0);
  const EmptyState = () => {
    return (
      <div className="table__empty">
        <Image 
          src="/cat.gif"
          alt="Empty cart"
          width={500}
          height={500}
        />
        <h1>Your cart is Empty</h1>
        <p>Looks like you have not added anything to your cart. Go ahead & explore the product</p>
        <Button 
          type="success" 
          onClick={() => setScreen('product')}
        >
          Go to Product
        </Button>
      </div>
    )
  }
  return (
    carts.length === 0
    ? <EmptyState />
    : <div className='table'>
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
            <td>Total Price</td>
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

