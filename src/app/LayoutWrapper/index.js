import { useState, useContext, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/NavBar';
import ProductLists from '../components/ProductList';
import Cart from '../components/Cart';
import Button from '../components/Button';

import './index.scss';

const Context = createContext();

export function useDataContext() {
  return useContext(Context);
}

const LayoutWrapper = () => {
  const [productLists, setProductLists] = useState([]);
  const [carts, setCarts] = useState([]);
  const [screen, setScreen] = useState('product');
  const [search, setSearch] = useState('');
  const [catchRequest, setCatchRequest] = useState([]);
  const [sortBy, setSortBy] = useState('');
  
  const handleAddCart = (add) => {
    const addUuid = {
      ...add,
      uuid: uuidv4()
    }
    setCarts([addUuid, ...carts])
  };
  console.log(carts, 'carts');

  const handleRemove = (uuidv4) => {
    console.log(uuidv4, 'uuidv4');
    console.log(carts, 'carts carts')
    const remove = carts.filter((cart) => cart.uuid !== uuidv4);
    console.log(remove, 'remove')
    setCarts(remove)
  };

  const values = {
    productLists: productLists,
    setProductLists: setProductLists,
    carts: carts,
    setCarts: setCarts,
    handleRemove: handleRemove,
    handleAddCart: handleAddCart,
    setScreen: setScreen,
    setCatchRequest,
    screen,
  }

  const NoMatch = () => {
    return (
      <div className="section__notfound">
        <h1>No match for your search</h1>
        <Button 
          type="success" 
          onClick={handleClearSearch}
        >
          Clear Search
        </Button>
      </div>
    )
  }

  const setCurrentScreen =  {
    product: <ProductLists />,
    cart: <Cart />
  };

  const handleSearch = () => {
    const value = search.toString().trim();
    if(value.length === 0) return;
    const smallCase = value.toLowerCase();
    const filter = productLists.filter((productList) => productList.title.toLowerCase().includes(smallCase));
    setProductLists(filter);
  };

  const handleClearSearch = async () => {
    setSearch('');
    setProductLists(catchRequest);
  };

  const handleSort = (type) => {
    if(type === 'lowest') {
      setSortBy('lowest');
      const sortByPrice = productLists.sort((a, b) => a.price - b.price);
      setProductLists(sortByPrice)
    }

    if(type === 'highest') {
      setSortBy('highest');
      const sortByPrice = productLists.sort((a, b) => b.price - a.price);
      setProductLists(sortByPrice)
    }
  }

  return (
    <Context.Provider value={values}>
      <Navbar />
      <section className="section">
        {
          screen === 'product'
            ? <section className="section__options">
                <div className="section__sort">
                  <p>Sort by:</p>
                  <button 
                    className={`section__sort-button section__lowest ${sortBy === 'lowest' ? 'section__lowest-active' : ''}`}
                    onClick={() => handleSort('lowest')}
                  >
                  <p>Lowest Price</p>
                  </button>
                  <button 
                    className={`section__sort-button section__highest ${sortBy === 'highest' ? 'section__highest-active' : ''}`}
                    onClick={() => handleSort('highest')}
                  >
                  <p>Highest Price</p>
                </button>
              </div>
              <div className="section__search">
                <input 
                  placeholder="Search"
                  className="section__input"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                {
                  search.length !== 0
                  ? <Button type="success" onClick={handleClearSearch}>
                      X
                      </Button>
                  : null
                }
                <Button 
                  type="success"
                  onClick={handleSearch}
                >
                  Search by name
                </Button>
              </div>
            </section>
          : null
          }
        {
          search.length !== 0 && productLists.length === 0
          ? <NoMatch />
          : setCurrentScreen[screen]}
      </section>
    </Context.Provider>
  )
};

export default LayoutWrapper;

