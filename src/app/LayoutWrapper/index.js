import { useState } from "react";
import Navbar from '../components/NavBar';
import { url, DataContext } from '../helper';

const LayoutWrapper = ({ component }) => {
  const [productLists, setProductLists] = useState([]);
  const [carts, setCarts] = useState([]);
  const handleRemove = (id) => {
    const remove = carts.filter((cart) => cart.id !== id);
    setCarts(remove);
  };

  const values = {
    productLists: productLists,
    setProductLists: setProductLists,
    carts: carts,
    setCarts: setCarts,
    handleRemove: handleRemove
  }

  return (
    <DataContext.Provider value={values}>
      <Navbar />
      {component}
    </DataContext.Provider>
  )
};

export default LayoutWrapper;
