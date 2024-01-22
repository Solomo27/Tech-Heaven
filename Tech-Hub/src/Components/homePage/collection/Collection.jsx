import "./collection.scss";
import { useRef } from "react";
import { useAppContext } from "../../Global";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Collection = () => {
  const { products } = useAppContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const sliderRef = useRef(null)

  return (
    <div className="collection">
      <div className="title">New Collection</div>
     
        <Slider {...settings} className="slider" ref={sliderRef}>
          {products.map((item, i) => (
          
            <Link key={i} to={`/product/${item.id}`}>
              <div className="item">
                <div className="img-cont">
                  <img src={item.img} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <p className="desc">{item.desc}</p>
                <p>{item.price} kr</p>
              </div>
            </Link>
          ))}
        </Slider>
      
      <div className="arrows">
        <div className="arrow arrow-left" onClick={() => sliderRef.current.slickPrev()}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="arrow arrow-right" onClick={() => sliderRef.current.slickNext()}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Collection;
