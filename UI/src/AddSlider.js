import React, {Component}from'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import g1 from './images/g1.jpg'
import g2 from './images/g2.jpg'
import g3 from './images/g3.jpg'
class AddSlider extends React.Component{
    render(){
        return(
            <div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={g1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"#fff" , fontSize:"40px"}}>Choose the right path for your dreams!!!!!!!!!!</h3>
      <p>We will be 100% supportive in choosing the right path for your dreams.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={g2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"#fff" , fontSize:"40px"}}>Also get vehicles on our site</h3>
      <p>Get the vehicles you want from us to fit your need</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fzUnSklQHBxMjKqiUnVuQ50WiHxG9pt1dQ&usqp=CAU"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"#fff" , fontSize:"40px"}}>Work Force!!!</h3>
      <p>We will be anywhere anytime.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            )}}
            export default AddSlider;