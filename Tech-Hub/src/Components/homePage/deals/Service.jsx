import React from 'react'

const Service = () => {
  return (
    <div className='service'> 

        <div>
          <i className="fa-solid fa-truck-fast"></i>
          <h4>Free Shipping</h4>
          <p>Free shipping for orders over 1500 kr</p>
        </div>

        <div>
            <i className="fa-solid fa-money-bill"></i>      
            <h4>Money Guarantee</h4>
            <p>Within 30 days for an exchange</p>
        </div>

        <div>
          <i className="fa-solid fa-headphones"></i>
          <h4>Online Support</h4>
          <p>24 hours a day, 7 days a week</p>
        </div>

        <div>
            <i className="fa-regular fa-credit-card"></i>
          <h4>Flexible Payment</h4>
          <p>Pay with multiple credit cards</p>
        </div>

    </div>
  )
}

export default Service