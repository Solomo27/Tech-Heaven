import { Link } from 'react-router-dom'
import './deals.scss'
import Service from './Service'

const Deals = () => {

  return (
    <div className='deals'>
      <div className='wrapper'>  
        <div className='deal'>
          <h2>Deals of the Month</h2>
          <p className='desc'>
            Get ready for a shopping experince like never before with our Deals of the month! <br />
            Every purchase comes with exclusive peks and offers, making this month a celebration <br />
            of savvy choises and amazing deals. Dont miss out! <i className="fa-solid fa-gift"></i>
          </p>
          <div className='timer'>
            <div className='countdown'>
              <span>7</span>
              <span>Days</span>
            </div>
            <div className='countdown'>
              <span>22</span>
              <span>Hours</span>
            </div>
            <div className='countdown'>
              <span>53</span>
              <span>Minutes</span>
            </div>
          </div>
          <Link to={'/shop'}>
            <button>View Products <i className='fa-solid fa-arrow-right' style={{color: 'white'}}></i></button>
          </Link>
        </div>
        <img src='/images/image-4.svg' alt="New Deal Image"  loading="lazy"/>
      </div>

      <Service />
    </div>
  )
}

export default Deals