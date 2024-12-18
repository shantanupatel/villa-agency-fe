import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CarouselComponent.scss";
import banner1 from "../../Images/banner-01.jpg";
import banner2 from "../../Images/banner-02.jpg";
import banner3 from "../../Images/banner-03.jpg";

const CarouselComponent = () => {
  const options = {
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      /* 400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      }, */
    },
    nav: true,
    dots: false,
  };

  return (
    <div className="main-banner">
      <OwlCarousel className="owl-theme section" loop margin={20} {...options}>
        {/* 1 */}
        <div className="review item">
          {/* <h3>24 hour up-time</h3>
          <div
            className="review-img"
            style={{
              "backgroundImage":
                "url(https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}>
          </div> */}
          <div className="header-text">
            <span className="category">
              Toronto, <em>Canada</em>
            </span>
            <h2>
              Hurry!
              <br />
              Get the Best Villa for you
            </h2>
          </div>
          <div
            className="review-img"
            style={{
              backgroundImage: "url(" + banner1 + ")",
            }}></div>
        </div>

        {/* 2 */}
        <div className="review item">
          <div className="header-text">
            <span className="category">
              Melbourne, <em>Australia</em>
            </span>
            <h2>
              Be Quick!
              <br />
              Get the best villa in town
            </h2>
          </div>
          <div
            className="review-img"
            style={{
              backgroundImage: "url(" + banner2 + ")",
            }}></div>
        </div>

        {/* 3 */}
        <div className="review item">
          <div className="header-text">
            <span className="category">
              Miami, <em>South Florida</em>
            </span>
            <h2>
              Act Now!
              <br />
              Get the highest level penthouse
            </h2>
          </div>
          <div
            className="review-img"
            style={{
              backgroundImage: "url(" + banner3 + ")",
            }}></div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CarouselComponent;
