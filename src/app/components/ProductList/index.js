import { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import StatSvg from '../Svg/Start';
import { money, url } from '../../helper';
import { useDataContext } from '@/app/LayoutWrapper';
import Button from '../Button';
import Loading from '../../loading';

import './index.scss';

const ProductList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const values = useDataContext();
  const { 
    productLists,
    carts,
    handleAddCart,
    handleRemove,
    setProductLists,
    setCatchRequest,
    setScreen,
  } = values;

  useEffect(() => {
    setIsLoaded(true);
    const getData = async() => {
      try {
        const res = await fetch(`${url}/product` );
        const data = await res.json();
        setProductLists(data.products);
        setCatchRequest(data.products);
        setIsLoaded(false);
        return data;
      }catch(e) {
        setIsLoaded(false);
        throw new Error('Failed to fetch data');
      }
    }
    getData();
  },[]);

  return (
    <>
    <div className="floating">
      <Button 
        type="success"
        onClick={() => setScreen('cart')}
      >
        Cart items: {carts.length}
      </Button>
    </div>
      {
        isLoaded 
          ? <div className="cards__loading-wrapper"><Loading /></div>
          : <div className="cards">
            {
            productLists?.map((productList, index) => (
              <div className="cards__content" key={index}>
                <Carousel images={productList.images} /> 
                <div className="cards__wrapper">
                <div className="cards__texts">
                  <span className="cards__name-container">
                    <p className="cards__title">
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
                  {
                    !carts.map((cart) => cart.id).includes(productList.id)
                    ? <Button
                        onClick={() => handleAddCart(productList)}
                        type="success"
                      >
                        Add to cart
                      </Button>
                  : null
                  }
                  {
                    carts.map((cart) => cart.id).includes(productList.id)
                      ? <Button 
                          onClick={() => handleRemove(productList.id, 'id')}
                            type="remove"
                        > 
                            Remove from cart
                        </Button>
                        : null
                      }
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      }
    </>
  )
};

export default ProductList;
