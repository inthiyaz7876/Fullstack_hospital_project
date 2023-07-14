import React from 'react';
import { Carousel } from 'react-bootstrap';
export default function Carousel({}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src="https://img.etimg.com/thumb/msid-100124349,width-300,height-225,imgsize-34384,,resizemode-75/india-builds-more-hospitals-as-population-surges-but-doctors-in-short-supply.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
