import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'

import './Header.css'

function Header() {
  return (
    <header className="a-header">
      <a className="a-header__logo" href="/">
        <img src={logo}></img>
        <p>Earthgames</p>
      </a>
      <div className="a-header__links">
        <a href="/discover">Discover</a>
        <a className="a-header__links__cart" href="/cart">
          <img src={cart}></img>
        </a>
      </div>
    </header>
  )
}

export default Header
