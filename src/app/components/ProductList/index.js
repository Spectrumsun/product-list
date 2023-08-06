import { useContext } from 'react';
import Carousel from '../Carousel';
import StatSvg from '../Svg/Start';
import { money, DataContext, url } from '../../helper';
import LayoutWrapper from "../../LayoutWrapper";

import './index.scss';
import { useEffect } from 'react';

const ProductList = () => {
  const values = useContext(DataContext);
  const { 
    productLists,
    carts,
    setCarts,
    setProductLists
  } = values;

  console.log(values, 'values')

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await fetch(`${url}/product` );
        const data = await res.json();
        setProductLists(data.products);
        return data;
      }catch(e) {
        console.log(e, 'e')
        throw new Error('Failed to fetch data');
      }
    }
    getData();
  },[]);

  return (
      <div className="cards">
        {
          productLists.map((productList, index) => (
            <div className="cards__content" key={index}>
              <Carousel images={productList.images} /> 
              <div className="cards__wrapper">
                <div className="cards__texts">
                  <span className="cards__name-container">
                    <p 
                      className="cards__title"
                    >
                      {productList.brand}: {productList.title}
                    </p>
                    <span className="cards__name">
                      <StatSvg />
                      <p>{productList.rating}</p>
                    </span>
                  </span>
                  <p className="cards__title">
                    Price: ₦{money.format(productList.price)}
                  </p>
                </div>
                <div className='cards__button-wrapper'>
                  <button 
                    className="cards__button cards__button-add"
                    onClick={() => setCarts([...carts, productList])}
                  >
                    Add to cart
                  </button>
                  {
                    carts.map((cart) => cart.id).includes(productList.id)
                      ? <button 
                          className="cards__button cards__button-remove"
                          onClick={() => handleRemove(productList.id)}
                        >
                          Remove from cart
                        </button>
                      : null
                  }
                </div>
              </div>
            </div>
            )
          )
        }
      </div>
  )
};

export default ProductList;