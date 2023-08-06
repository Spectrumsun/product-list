'use client'
import Image from 'next/image'
import { money } from '../../helper';
import { useDataContext } from "../../LayoutWrapper";
import Button from '../Button';

import './index.scss';

const Cart = () =>  {
  const values = useDataContext();
  const { 
    carts, 
    handleRemove, 
    setScreen, 
    handleAddCart,
  } = values;

  const currentIds = carts.map((cart) => cart.id);
  const carTotal = carts.reduce((prev, curr) =>  prev + curr.price, 0);
  const showInCard = carts.filter((cart, index) => !currentIds.includes(cart.id, index +1));

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
      <h1>Total item in cart: {carts.length}</h1>
      <table className="table__table-list">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            showInCard?.map((cart, index) => {
              return (
                <tr key={index}>
                  <td>{cart.title}</td>
                  <td>₦{money.format(cart.price)}</td>
                  <td>
                    <Image
                      src={cart.thumbnail}
                      width={100}
                      height={100}
                      alt={cart.title}
                    />
                  </td>
                  <td>
                    <div className="table__quan">
                      <button 
                        className="table__add table__add-icon"
                        onClick={() => handleAddCart(cart)}
                      >
                        &#43;
                      </button>
                        <h1>
                          {carts.filter((ca) => ca.id == cart.id).length}
                        </h1>
                      <button 
                        className="table__add table__remove-icon"
                        onClick={() => handleRemove(cart.uuid, 'uuid')}
                      >
                        &#x2212;
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="table__total">
        <h1>
          Total Price: ₦{money.format(carTotal)}
        </h1>
        <h1>
          Total Item:  {carts.length}
        </h1>
        <Button type="success">
          Checkout {carts.length} Items
        </Button>
      </div>
    </div>
  )
};

export default Cart;
