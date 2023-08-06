import { useDataContext } from '../../LayoutWrapper';
import Button from '../Button';
import './index.scss';

const Navbar = () => {
  const values = useDataContext();
  const { carts, setScreen, screen } = values;
  console.log( screen === 'product', 'screen', screen)
  return (
    <header className="header">
      <button  onClick={() => setScreen('product')} className="header__button">
        <h1 className="header__h1">Product App</h1>
      </button>
      {
        screen === 'product'
          ?  <Button 
                onClick={() => setScreen('cart')}
                type="success"
              >
                My cart:  {carts.length}
              </Button>
          : 
          <Button 
            onClick={() => setScreen('product')}
            type="success"
          >
            Back to Product
          </Button>
      }
    </header>
  )
}

export default Navbar;
