import { Link } from 'react-router-dom'
import './navbar.scss'
import { useAppContext } from '../Global'
import { useMemo } from 'react'

const Navbar = () => {

  const {cart} = useAppContext()

  const cartItems = useMemo(() => cart.length, [cart])
  return (
    <nav>
    

        <Link to={'/'}><h1>Tech-Gallery</h1></Link>
        <div className='nav-right'>
            <Link  to={'/'} className='link'>Home</Link>
            <Link to={'/shop'} className='link'>Shop</Link>
            <div className='cartIcon'>
                <Link to={'/cart'}><img src="/icons/cart.svg" alt="" /></Link>
                <span>{`(${cartItems})`}</span>
            </div>
        </div>
      
    </nav>
  )
}

export default Navbar