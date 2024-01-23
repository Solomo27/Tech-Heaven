import './productpage.scss'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../Global'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [addedToCart, setAddedToCart] = useState(false)
  const { id } = useParams()
  const i = id + 0
  const { products } = useAppContext()

  const product = products.find(item  => item.id == id)
  const relatedProducts = products.filter(item => item.category === product.category).filter(item => item.id != id)
  console.log(relatedProducts)
  

  const viewCart = (
      <button>
        <Link className='link' to={'/cart'}>
        View Cart <i className="fa-solid fa-check" style={{marginLeft: '10px'}}></i>
        </Link>
      </button>
  )

  return (
    <div className='product'>
      <div className='wrapper'>
        <div className='img-cont'>
          <img src={product.img} alt="" />
        </div>
        <div className='details'>
          <h3>{product.name}</h3>
          <p className='stock'>{product.category} | <span style={{color: 'green'}}>In Stock</span></p>
          <h4>Description</h4>
          <p className='desc'>{product.desc}</p>
          {
            !addedToCart ? <button onClick={() => setAddedToCart(prev => !prev)}>Add To Cart</button> : viewCart
          }
        </div>
      </div>

      <div className='products-wrapper'>
          <h2>Related Products</h2>
        <div className='related-products'>
          {
            relatedProducts.map((item, i) => (
              <Link to={`/product/${item.id}`} key={i}>
                <div className='item'>
                  <div className='img-cont'>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.price} kr</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductPage