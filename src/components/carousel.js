import Carousel from 'react-bootstrap/Carousel';
import foto from '../assets/banner.jpg';
import produk1 from '../assets/product1.jpg';
import produk2 from '../assets/product2.jpg';
import '../assets/css/carousel.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="slider-img d-block w-100"
          src={produk1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img d-block w-100"
          src={produk2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img d-block w-100"
          src={foto}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;