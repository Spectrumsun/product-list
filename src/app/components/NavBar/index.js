import Link from 'next/link'
import './index.css';

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="header-h1">Product App</h1>
      <ul className="header-ul">
        <Link 
          className="header-li header-active"
          href="/cart"
        >
          My cart
        </Link>
      </ul>
    </header>
  )
}

export default Navbar;
