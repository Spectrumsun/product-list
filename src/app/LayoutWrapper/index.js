import { useState, useContext, createContext } from "react";
import Navbar from '../components/NavBar';
import ProductLists from '../components/ProductList';
import Cart from '../components/Cart';

const Context = createContext();

export function useDataContext() {
  return useContext(Context);
}

const LayoutWrapper = () => {
  const [productLists, setProductLists] = useState([]);
  const [carts, setCarts] = useState([]);
  const [screen, setScreen] = useState('product');
  
  const handleAddCart = (add) => {
    setCarts([add, ...carts])
  };

  const handleRemove = (id) => {
    const remove = carts.filter((cart) => cart.id !== id);
    setCarts(remove);
  };

  const values = {
    productLists: productLists,
    setProductLists: setProductLists,
    carts: carts,
    setCarts: setCarts,
    handleRemove: handleRemove,
    handleAddCart: handleAddCart,
    setScreen: setScreen,
  }

  const setCurrentScreen =  {
    product: <ProductLists />,
    cart: <Cart />
  };

  return (
    <Context.Provider value={values}>
      <Navbar />
      <section className="section-wrapper">
        {setCurrentScreen[screen]}
      </section>
    </Context.Provider>
  )
};



export default LayoutWrapper;
