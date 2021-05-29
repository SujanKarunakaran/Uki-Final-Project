import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-bootstrap/Carousel'
import image1 from './images/g1.jpg'
import image2 from './images/g2.jpg'
import image3 from './images/g3.jpg'

// const style = {
//     root: {
//       minWidth: 275,
//       backgroundColor:'#006064',
//       marginTop: 20,
//       height: 200,
//       color: '#e0f7fa'
//     },
//     title: {
//       fontSize: 24,
//       textAlign:'center'
//     },
// }

function CarouselContainer(props) {
    return (
      <React.Fragment>
        <div style={{backgroundColor:"#000"}}>

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
              </ol>

              <div className="carousel-inner" role="listbox">

                <div className="item active">
                  <img style={{width:"1450px", height:"500px"}} src={image1} alt="Chania"/>
                  <div classNameName="carousel-caption">

                  </div>
                </div>

                <div className="item">
                  <img style={{width:"1450px", height:"500px"}} src={image3} alt="Chania"/>
                  <div className="carousel-caption">
                    
                  </div>
                </div>
              
                <div className="item">
                  <img style={{width:"1450px", height:"500px"}} src={image1} alt="Flower"/>
                  <div className="carousel-caption">
                   
                  </div>
                </div>

                <div className="item">
                  <img style={{width:"1450px", height:"500px"}} src={image2} alt="Flower"/>
                  <div className="carousel-caption">
                   
                  </div>
                </div>
            
              </div>

              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            </div>

      </React.Fragment>
    )
}

export default CarouselContainer
