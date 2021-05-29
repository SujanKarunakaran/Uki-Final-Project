import React, { Component } from "react";

class Slider extends Component {
    componentDidMount(){
        var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
    }


    render() {
        return(
            <div>
                <div className="slideshow-container">

<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sd240R1sM9pHHMhqKMwBBkPK6QSvtm4WuaLt3dpFUatbATTFlDmuqJFv1PjRGaxxSPA&usqp=CAU" style={{width:"100%"}}/>
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sd240R1sM9pHHMhqKMwBBkPK6QSvtm4WuaLt3dpFUatbATTFlDmuqJFv1PjRGaxxSPA&usqp=CAU" style={{width:"100%"}}/>
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sd240R1sM9pHHMhqKMwBBkPK6QSvtm4WuaLt3dpFUatbATTFlDmuqJFv1PjRGaxxSPA&usqp=CAU" style={{width:"100%"}}/>
  <div className="text">Caption Three</div>
</div>

<a className="prev" onclick="plusSlides(-1)">&#10094;</a>
<a className="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br/>

{/* style="text-align:center" */}
<div>
<span className="dot" onclick="currentSlide(1)"></span>
<span className="dot" onclick="currentSlide(2)"></span>
<span className="dot" onclick="currentSlide(3)"></span>
</div>
            </div>
           
        )
    }
}

export default Slider;