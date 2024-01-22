import { useState } from 'react'
import './shop.scss'

const Shop = () => {
  const items = ['all','iphones', 'tv and home', 'ipads','accessories', 'laptops', 'watches']
  const [checkedCategory, setCheckedCategory] = useState('all') 

  function handleChange(e) {
    setCheckedCategory(e.target.value)
  }

  return (
    <div className='shop'>
      <div className='wrapper'>
      <h3>Product Categories</h3>
      
      <form  className='form' onChange={(e) => handleChange(e)}>
        {items.map((item, i) => (
          <div className='label' key={i}>
            <input id={item} type="checkbox" value={item} checked={item === checkedCategory}/>
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
        <hr />
      </form>
      
      <form>
        <h3>Sort order</h3>
        <label><input type="radio" />Latest</label>
        <label><input type="radio" />Oldest</label>
      </form>
      </div>

      <div className='products'></div>
    </div>
  )
}

export default Shop