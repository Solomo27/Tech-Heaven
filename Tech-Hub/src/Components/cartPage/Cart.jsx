import "./cart.scss";
import { useAppContext } from "../Global";
import { useMemo } from "react";
import {Link} from 'react-router-dom'
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const { cart, setCart} = useAppContext()
  const totalPrice = useMemo(() => {
    return cart.reduce((accum,item) => {
    return accum + item.priceId * item.quantity
  },0)}, [cart])

  function addQuan(id) {
    const updatedCart = cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1}: item)
    setCart(updatedCart)
  }
  function removeQuan(id) {
    const updatedCart = cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1}: item).filter(item => item.quantity > 0)
    setCart(updatedCart)
  }

  function remove(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="wraper">
        {/*<div className="title">
          <h4>Product</h4>
          <h4>Quantity</h4>
          <h4>Subtotal</h4>
        </div>*/}

        <div className="cart-items">
          <div className="item-cont">
            {cart.map((item,i) => (
              <div className="item" key={i}>
                <div className="desc">
                  <img src={item.img} alt="device" />
                  <h3>{item.name}</h3>
                </div>
                <div className="quantity">
                  <i onClick={() => removeQuan(item.id)} className="fa-solid fa-minus"></i>
                  <span>{item.quantity}</span>
                  <i onClick={() => addQuan(item.id)} className="fa-solid fa-plus"></i>
                </div>

                <p>{item.priceId * item.quantity} kr</p>
                <img
                onClick={() => remove(item.id)}
                  className="delete"
                  src="/images/delete.svg"
                  alt="remove-icon"
                />
              </div>
            ))}
          </div>

          <div className="checkout">
            <h4 className="heading">Summary</h4>
            <div className="delivary">
              <p>Delivery</p>
              <p>0 kr</p>
            </div>
            <div className="total">
              <h4>Grand Total</h4>
              <h4>{totalPrice} kr</h4>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
      <div className="shop">
        <div>
          <h3>Continue Shopping</h3>
          <p>Discover more products that are perfect for gift, fot your wardrobe, or a unique addition to your collection.</p>
        </div>
        <Link to={'/shop'}>
              <button>
                Continue Shopping
              </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
