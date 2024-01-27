import Hero  from "./hero/Hero"
import Categorys from './categorys/Categorys'
import Deals from './deals/Deals'
import Collections from './collection/Collection'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './home.scss'


const Home = () => {
  return (
    <div>
      <section className='hero-sec'>
        <Hero />
      </section>

      <section className='category-sec'>
        <Categorys />
      </section>

      <section>
        <Collections />
      </section>

      <section>
        <Deals />
      </section>
      
    </div>
  )
}

export default Home