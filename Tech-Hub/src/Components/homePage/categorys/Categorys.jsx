import './category.scss'
import { Link } from 'react-router-dom'
import { useAppContext } from './../../Global'

const Categorys = () => {
  
  const categorys = [
    {
      img: '/images/watches-category.png', 
      value: 'watches'
    }, 
    {
      img: '/images/tv-home-category.png',
      value: 'tv and home'
    },
    {
      img: '/images/ipads-category.png',
      value: 'ipads'
    }, {
      img: '/images/accessories-category1.png',
      value: 'accessories'
    }, 
    {
      img: '/images/laptops-category.png',
      value: 'laptops'
    },
    {
      img: '/images/phones-category.png',
      value: 'phones'
    }
  ]

  const { setCurrentCategory, currentCategory } = useAppContext()

  return (
    <div className='categories'>
      <div className='title'>
        <h2>Shop by Categories</h2>
        <Link className='link' to={'/shop'}>Show All</Link>
      </div>
      <div className='grid-container'>
        {categorys.map((item, i) => (
          <div key={i} className='item'>
          <img src={item.img} /> 
          <Link to={'/shop'} onClick={() => setCurrentCategory(item.value) } className='link-btn'>{item.value}</Link>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Categorys