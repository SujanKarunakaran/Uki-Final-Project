import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
// import '../public/css/style.css'
class Footer extends React.Component {
    render(){
        return(
<footer id="footer" className="bg-one">
  <div className="top-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-3">
          <h3>about</h3>
          <p>K.T Gold Covering, is an initiative. which is a versatile K.T gold plated jewelry manufacturer and retailer with over 5 years of experience.</p>
        </div>
        {/* <!-- End of .col-sm-3 --> */}
        <div className="col-sm-3 col-md-3 col-lg-3">
          <ul>
            <li><h3>Our Services</h3></li>
            <li><a href="/itemcards" style={{textDecoration:"none",color:"#000"}}>Product</a></li>
            <li><a href="/login" style={{textDecoration:"none",color:"#000"}}>Login</a></li>
            <li><a href="/register" style={{textDecoration:"none",color:"#000"}}>Sign Up</a></li>
            <li><a href="/contactUs" style={{textDecoration:"none",color:"#000"}}>Contact</a></li>
          </ul>
        </div>
        {/* <!-- End of .col-sm-3 --> */}
        <div className="col-sm-3 col-md-3 col-lg-3">
          <ul>
            <li><h3>Quick Links</h3></li>
            <li><a href="#" style={{textDecoration:"none",color:"#000"}}>Partners</a></li>
            <li><a href="#" style={{textDecoration:"none",color:"#000"}}>About</a></li>
            <li><a href="#" style={{textDecoration:"none",color:"#000"}}>FAQ’s</a></li>
            <li><a href="#" style={{textDecoration:"none",color:"#000"}}>Badges</a></li>
          </ul>
        </div>
        {/* <!-- End of .col-sm-3 --> */}
        <div className="col-sm-3 col-md-3 col-lg-3">
          <ul>
            <li><h3>Connect with us Socially</h3></li>
            <li><a href="https://www.facebook.com/" style={{textDecoration:"none",color:"#000"}}>Facebook</a></li>
            <li><a href="#" style={{textDecoration:"none",color:"#000"}}>Twitter</a></li>
            <li><a href="#" style={{textDecoration:"none",color:"#000"}}>Youtube</a></li>
            <li><a href="#" style={{textDecoration:"none",color:"#000"}}>Pinterest</a></li>
          </ul>
        </div>
        {/* <!-- End of .col-sm-3 --> */}
      </div>
    </div>
    {/* <!-- end container --> */}
  </div>
  <br/>
  <br/>
  <br/>
  <div className="footer-bottom">
    <h4><center><b>© 2021 K.T GOLD COVERING. All rights reserved</b></center></h4>
    
  </div>
</footer>
//  <!-- end footer -->
          )
        }
    }
    export default Footer;