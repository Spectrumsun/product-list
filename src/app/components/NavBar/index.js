import { useDataContext } from '../../LayoutWrapper';
import Button from '../Button';
import './index.css';

const Navbar = () => {
  const values = useDataContext();
  const { carts, setScreen } = values;
  return (
    <header className="header">
      <button  onClick={() => setScreen('product')}>
        <h1 className="header-h1">Product App</h1>
      </button>
      <Button 
        onClick={() => setScreen('cart')}
        type="success"
      >
        My cart:  {carts.length}
      </Button>
    </header>
  )
}

export default Navbar;
