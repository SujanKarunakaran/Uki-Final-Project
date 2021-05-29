import React, { Component } from "react";
import emailjs from 'emailjs-com';


// class ContactUs extends Component {
	export default class ContactUs extends Component {
	constructor(props){
        super(props);}

sendEmail=(e)=> {
	e.preventDefault();

	emailjs.sendForm('service_r0p0cbj', 'template_vj3eeu8', e.target, 'user_lWE8nYp2O5m87iGM4qQaS')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset();
	}
		

    render() {
        return(
            <div>
<section id="contact" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="contact clearfix">
    <div className="col-sm-12 contact_2 clearfix">
    <div className="col-sm-8 contact_2_left clearfix">
	 <h2>GET IN TOUCH</h2>
<form id="contact" method="post" className="contact-form" role="form" onSubmit={this.sendEmail}>
<div className="row">
<div className="col-xs-6 col-md-6 form-group">
<input className="form-control" id="name" name="from_name" placeholder="Name" type="text"/>
</div>
<div className="col-xs-6 col-md-6 form-group">
<input className="form-control" id="email" name="email" placeholder="Email" type="email"/>
</div>
</div>
<textarea className="form-control_4" id="message" name="message" placeholder="Message" rows="5"></textarea>
<br/>
<div className="row">
<div className="col-sm-12 col-sm-12 form-group_inner clearfix">
<button className="btn btn-primary pull-left" type="submit" value="Send">Submit</button>

</div>
</div></form>
	<script type="text/javascript">
	
	</script>


	</div>
	<div className="col-sm-4 clearfix">
	 <div className="center_7_top_right clearfix">
	  {/* <h4>ABOUT US</h4>
	  <p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. ad litora torquent per conubia nostra, per inceptos C .Sed dignissim lacinia nunc.</p> */}
	   <h4>CONTACT INFO</h4>
	   <h5><i className="fa fa-mobile-phone"></i>Phone: 0762329095</h5>
	   <h5><i className="fa fa-envelope-square"></i>Email us:-<a href="#">sujananderson2000@gmail.com</a></h5>
	   <h5><i className="fa fa-map-marker"></i>Address: K.K.S road, Thaddateru, Jaffna.</h5>
	   <ul>
	    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
		<li><a href="#"><i className="fa fa-twitter"></i></a></li>
		<li><a href="#"><i className="fa fa-google"></i></a></li>
		<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
		<li><a href="#"><i className="fa fa-instagram"></i></a></li>
		<li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
		<li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
	   </ul>
	 </div>
	</div>
   </div>
   </div>
  </div>
 </div>
</section>

{/* <section id="footer" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="footer_top clearfix">
  <div className="col-sm-2 footer_top_left left_1 clearfix">
   <div className="footer_top_left_inner clearfix">
    <h4>INCEPTOS</h4>
	<ul>
	 <li><a href="shop.html">consectetur</a></li>
	 <li><a href="about.html">About Us</a></li>
	 <li><a href="contact.html">Contact Us</a></li>
	</ul>
   </div>
  </div>
  <div className="col-sm-2 footer_top_left left_1 clearfix">
   <div className="footer_top_left_inner clearfix">
    <h4>SEM SOCIOSQU</h4>
	<ul>
	 <li><a href="#">Taciti, Praesent & Torquent Libero</a></li>
	 <li><a href="#">FAQs</a></li>
	 <li><a href="#">Terms & Conditions and  Privacy Policy</a></li>
	</ul>
   </div>
  </div>
  <div className="col-sm-2 footer_top_left left_1 clearfix">
   <div className="footer_top_left_inner clearfix">
    <h4>DIGNISSIM INTEGER</h4>
	<ul>
	 <li><a href="#">Ipsum Dolor Sit</a></li>
	 <li><a href="#">Duis Sagittis Ipsum</a></li>
	 <li><a href="#">Nulla quis sem at nibh</a></li>
	 <li><a href="#">SEM Litora</a></li>
	</ul>
   </div>
  </div>
  <div className="col-sm-2 footer_top_left left_1 clearfix">
   <div className="footer_top_left_inner clearfix">
    <h4>IMPERDIET</h4>
	<ul>
	 <li><a href="#">Litora Torquent</a></li>
	 <li><a href="#">Mauris Massa</a></li>
	 <li><a href="#">Duis Sagittis</a></li>
	 <li><a href="#">Sed Dignissim Lacinia</a></li>
	</ul>
   </div>
  </div>
  <div className="col-sm-2 footer_top_left left_1 clearfix">
   <div className="footer_top_left_inner clearfix">
    <h4>ADIPISCING</h4>
	<ul>
	 <li><a href="#">Consectetur</a></li>
	 <li><a href="#">Taciti Sociosqu</a></li>
	 <li><a href="#">Curabitursodales</a></li>
	</ul>
   </div>
  </div>
  <div className="col-sm-2 footer_top_left clearfix">
   <div className="footer_top_left_inner clearfix">
    <h4>GET IN TOUCH</h4>
	<ul>
	 <li><a href="#">9999-626-5353</a></li>
	 <li><a href="#">(11am - 7pm IST, MON - SAT)</a></li>
	 <li><a href="#">info@gmail.com</a></li>
	 <li><a href="#">Conubia Nostra</a></li>
	</ul>
   </div>
  </div>
 </div>
  </div>
 </div>
</section> */}

{/* <section id="footer_last" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="footer_last clearfix">
    <h5>Buy Jewellery Online with www.kpjeweller.com</h5>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odionec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
	<p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos C. Curabitursodales ligula in libero. Sed dignissim lacinia nunc.</p>
	<p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos C. Curabitursodales ligula in libero. </p>
	<h6>. Consectetur Elementum</h6>
	<h6>. Sociosqu Elementum</h6>
	<h6>. Dapibus Elementum</h6>
	<p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos C. Curabitursodales ligula in libero. </p>
	<p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos C. Curabitursodales ligula in libero. Sed dignissim lacinia nunc.</p>
   </div>
  </div>
 </div>
</section> */}

<section id="center_7" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="center_7_top clearfix">
    <div className="center_7_top_inner_1 clearfix">
	 <h2>FOLLOW US</h2>
	 <h5>Join Us & Save more on your favourite products</h5>
	 <hr className="hr_2"/>
	  <ul>
	   <li><a className="family_1" href="www.facebook.com"><i className="fa fa-facebook-f"></i>Facebook</a></li>
	   <li><a className="family_3" href="www.instagram.com"><i className="fa fa-instagram"></i>Instagram</a></li>
	  </ul>
	</div>
   </div>
  </div>
 </div>
</section>

            </div>
           
        )

}
	}


// export default ContactUs;
