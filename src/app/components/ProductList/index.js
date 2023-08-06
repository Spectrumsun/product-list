import { useEffect } from 'react';
import Carousel from '../Carousel';
import StatSvg from '../Svg/Start';
import { money, url } from '../../helper';
import { useDataContext } from '@/app/LayoutWrapper';
import Button from '../Button';
import './index.scss';


const ProductList = () => {
  const values = useDataContext();
  const { 
    productLists,
    carts,
    handleAddCart,
    handleRemove,
    setProductLists,
  } = values;
  console.log(values, 'Product');

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
                <Button
                  onClick={() => handleAddCart(productList)}
                  type="success"
                >
                  Add to cart
                </Button>
                {
                  carts.map((cart) => cart.id).includes(productList.id)
                    ? <Button 
                        onClick={() => handleRemove(productList.id)}
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
  )
};

export default ProductList;
