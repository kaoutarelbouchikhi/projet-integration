import React from "react";

import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://image.tmdb.org/t/p/original/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>
              <b>Orphan: First Kill</b>
            </h3>
            <p>2022-07-27</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://image.tmdb.org/t/p/original/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              <b>Hocus Pocus 2</b>
            </h3>
            <p>2022-09-27</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid "
            src="https://image.tmdb.org/t/p/original/hT3OqvzMqCQuJsUjZnQwA5NuxgK.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              <b>Fall</b>
            </h3>
            <p>2022-08-11</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://image.tmdb.org/t/p/original/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              <b>Fullmetal Alchemist: The Final Alchemy</b>
            </h3>
            <p>2022-06-24</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://image.tmdb.org/t/p/original/83oeqwN64WtafGoITvsOzjKIQaM.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              <b>Bullet Train</b>
            </h3>
            <p>2022-07-03</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://image.tmdb.org/t/p/original/rgZ3hdzgMgYgzvBfwNEVW01bpK1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>
              <b>Lou</b>
            </h3>
            <p>2022-09-23</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
