import Slider from "react-slick";
import card1 from "../assests/images/card1.png"
import card2 from "../assests/images/card2.png";
import card3 from "../assests/images/card3.png";

export default function ScrollingCarousel() {
  
  

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
    };


    return (
      <Slider
        {...settings}
        slidesToShow={2.9}
        swipeToSlide={true}
        focusOnSelect={true}
        className="scroll"
      >
        <div className="product first">
          <img src={card1} alt="" />
          <p className="hidden lg:inline-block">365 Signature Hoodie</p>
          <p className="lg:hidden">Organic Skinny High Waist Jeans</p>
          <div className="price">
            <p>
              <b>€33,95</b>
            </p>
            <div className="checkboxes">
              <input type="radio" name="color" id="green" value={"green"} />
              <input type="radio" name="color" id="red" value={"red"} />
              <input type="radio" name="color" id="yellow" value={"yellow"} />
              <input type="radio" name="color" id="blue" value={"blue"} />
            </div>
          </div>
        </div>
        <div className="product second">
          <img src={card2} alt="" />
          <p>Organic Skinny High Waist Jeans</p>
          <div className="price">
            <p>
              <b> €33,95</b>
            </p>
            <div className="checkboxes">
              <input type="radio" name="color" id="green" value={"green"} />
              <input type="radio" name="color" id="red" value={"red"} />
              <input type="radio" name="color" id="yellow" value={"yellow"} />
              <input type="radio" name="color" id="blue" value={"blue"} />
            </div>
          </div>
        </div>
        <div className="product third">
          <img src={card3} alt="" />
          <p>Organic Skinny High Waist Jeans</p>
          <div className="price">
            <p>
              <b> €33,95</b>
            </p>
            <div className="checkboxes">
              <input type="radio" name="color" id="green" value={"green"} />
              <input type="radio" name="color" id="red" value={"red"} />
              <input type="radio" name="color" id="yellow" value={"yellow"} />
              <input type="radio" name="color" id="blue" value={"blue"} />
            </div>
          </div>
        </div>
      </Slider>
      // </div>
    );

}