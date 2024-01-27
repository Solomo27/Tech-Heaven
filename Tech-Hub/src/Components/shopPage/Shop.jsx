import { useState, useEffect } from 'react'
import './shop.scss'
import { useAppContext } from '../Global'
import { Link } from 'react-router-dom'


const Shop = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const { currentCategory, setCurrentCategory, products} = useAppContext()



  const items = ['all','phones', 'tv and home', 'ipads','accessories', 'laptops', 'watches']
  const orderItems = ['latest', 'oldest']
  const [checkedCategory, setCheckedCategory] = useState(currentCategory) 
  const [order, setOrder] = useState('latest')

  function handleChange(e) {
    const value = e.target.value
    setCurrentCategory(prev => prev === value ? 'all': value)
  }

  useEffect(() => {
    // Sync local state with global state when the component mounts
    setCheckedCategory(currentCategory);
  }, [currentCategory]);

  const filteredProducts = checkedCategory === 'all' ? products: products.filter(item => item.category === checkedCategory)


  return (
    <div className='shop'>
      <div className='wrapper'>
        <h3>Product Categories</h3>
        
        <form  className='form'>
          {items.map((item, i) => (
            <div className='label' key={i}>
              <input id={item} type="checkbox" value={item} checked={item === checkedCategory} onChange={(e) => handleChange(e)} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
          <hr />
        </form>
        
        <div className='sort'>
          <h3>Sort order</h3>
          {orderItems.map((item, i) => (
            <div className='label' key={i}>
              <input type="radio" id={item} value={item} checked={order === item} onChange={(e) => setOrder(e.target.value)}/>
              <label htmlFor={item}>{item}</label>
          </div>
          ))}
        
        </div>
      </div>
    
          
        <div className='products'>
          {filteredProducts.map((item, i) => (
              <Link key={i} to={`/product/${item.id}`}>
                <div className="item">
                  <div className="img-cont">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.price} kr</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
   
  )
}

export default Shop