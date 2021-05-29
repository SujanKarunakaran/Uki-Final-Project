import React, { Component } from "react";
import image1 from './img/1.png'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.png'
import image5 from './img/5.png'
import image6 from './img/6.png'
import image7 from './img/7.png'
import image8 from './img/8.png'
import image9 from './img/9.png'
import image10 from './img/10.png'
import image11 from './img/11.png'
import image12 from './img/12.png'
import image13 from './img/13.png'
import image14 from './img/14.jpg'
import image15 from './img/15.png'
import image16 from './img/16.jpg'
import image17 from './img/17.jpg'
import image18 from './img/18.jpg'
import image19 from './img/19.jpg'
import image20 from './img/20.jpg'
import image21 from './img/21.png'
import image22 from './img/22.jpg'
import image23 from './img/23.png'
import image24 from './img/24.png'
import image25 from './img/25.png'
import image26 from './img/26.png'
import image27 from './img/27.jpg'
import image28 from './img/28.jpg'
import image29 from './img/29.jpg'
import image30 from './img/30.jpg'
import image31 from './img/31.jpg'
import image32 from './img/32.jpg'
import image33 from './img/33.jpg'
import image34 from './img/34.jpg'
import image35 from './img/35.jpg'
import image36 from './img/36.jpg'
import image37 from './img/37.png'
import image38 from './img/38.png'
import image39 from './img/39.png'
import image40 from './img/40.jpg'
import image41 from './img/41.jpg'
import image42 from './img/42.jpg'
import image43 from './img/43.jpg'
import image44 from './img/44.jpg'
import image45 from './img/45.jpg'
import image46 from './img/46.jpg'
import image47 from './img/47.png'
import image48 from './img/48.jpg'
import image49 from './img/49.jpg'
import image50 from './img/50.jpg'
import image51 from './img/51.jpg'
import image52 from './img/52.jpg'
import image53 from './img/53.jpg'
import image54 from './img/54.jpg'
import image55 from './img/55.jpg'
import image56 from './img/56.jpg'
import image57 from './img/57.jpg'
import image58 from './img/58.jpg'
import image59 from './img/59.jpg'
import image60 from './img/60.jpg'
import image61 from './img/61.jpg'
import image62 from './img/62.jpg'
import image63 from './img/63.jpg'
import image64 from './img/64.jpg'
import image65 from './img/65.jpg'
import image66 from './img/66.jpg'
import image67 from './img/67.jpg'
import image68 from './img/68.jpg'
import image69 from './img/69.jpg'
import image70 from './img/70.jpg'
import image71 from './img/71.jpg'
import image72 from './img/72.jpg'
import image73 from './img/73.jpg'
import image74 from './img/74.jpg'
import image75 from './img/75.jpg'
import image76 from './img/76.jpg'
import image77 from './img/77.jpg'
import image78 from './img/78.jpg'

class Products extends Component {


    render() {
        return(
            <div>
                <section id="header" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="header_top clearfix">
    <div className="col-sm-4 header_top_left clearfix">
	 <div className="header_top_left_inner clearfix">
	  <p><i className="fa fa-mobile"></i>9999-524-5525 <span className="tolling_1">(TOLL FREE)</span></p>
	 </div>
	</div>
	<div className="col-sm-8 header_top_right clearfix">
	 <div className="header_top_right_inner clearfix">
	  <ul>
	   <li><a href="#">Dignissim Lacinia</a></li>
	   <li><a href="#"><i className="fa fa-gift"></i>Eget Nulla</a></li>
	   <li><a href="#"><i className="fa fa-dollar"></i> SEM Dapibus</a></li>
	   <li><a href="#"><i className="fa fa-map-signs"></i>  Fusce Conubia</a></li>
	   <li><a href="#"><i className="fa fa-briefcase"></i>  Lacinia</a></li>
	   <li><a href="#"><i className="fa fa-bug"></i>  Imperdiet</a></li>
	  </ul>
	 </div>
	</div>
   </div>
  </div>
 </div>
</section>

<section id="header_2" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="header_2_top clearfix">
    <div className="col-sm-3 header_2_top_left clearfix">
	 <div className="header_2_top_left_inner clearfix">
	  <p><a href="#"><img src={image1}/></a></p>
	 </div>
	</div>
	<div className="col-sm-5 header_2_top_middle clearfix">
	 <div className="header_2_top_middle_inner clearfix">
	  <div className="input-group col-sm-12 header_2_top_middle_inner_2 clearfix">
                                <input type="text" className="  search-query form-control form-control_new" placeholder="Search product"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-danger" type="button">
                                        <span className="glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                            </div>
	 </div>
	</div>
	<div className="col-sm-4 header_2_top_right clearfix">
	 <div className="header_2_top_right_inner clearfix">
	  <ul>
	   <li>
		<a href="#" data-toggle="modal" data-target="#login-modal">Login</a>

        <div className="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
    	  <div className="modal-dialog">
				<div className="loginmodal-container">
					<h1>Login to Your Account</h1><br/>
				  <form>
					<input type="text" name="user" placeholder="Username"/>
					<input type="password" name="pass" placeholder="Password"/>
					<input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
				  </form>
					
				  <div className="login-help">
					<a href="#">Register</a> - <a href="#">Forgot Password</a>
				  </div>
				</div>
			</div>
		  </div>
	</li>
	   <li><a href="#">Register</a></li>
	   <li><a href="#"><i className="fa fa-heart-o"></i></a></li>
	  </ul>
	 </div>
	</div>
   </div>
  </div>
 </div>
</section>

<section id="header_3"  className="cd-secondary-nav sec_n">
	<nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html"><img src={image1}/></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a className="tag_menu" href="index.html">HOME</a>
                    </li>
					 
					 <li className="dropdown">
					  <a className="tag_menu active_tab" href="#" data-toggle="dropdown" role="button" aria-expanded="false">PRODUCT<span className="caret"></span></a>
					  <ul className="dropdown-menu drop_1" role="menu">
						<li><a className="hvr-forward" href="shop.html">Product</a></li>
						<li><a className="border_none hvr-forward" href="shop_detail.html">Product Detail</a></li>
					  </ul>
                    </li>
					
					 <li className="dropdown">
					  <a className="tag_menu" href="#" data-toggle="dropdown" role="button" aria-expanded="false">BLOG<span className="caret"></span></a>
					  <ul className="dropdown-menu drop_1" role="menu">
						<li><a className="hvr-forward" href="blog.html">Blog</a></li>
						<li><a className="border_none hvr-forward" href="detail.html">Blog Detail</a></li>
					  </ul>
                    </li>
          
					
					<li>
                        <a className="tag_menu" href="about.html">ABOUT</a>
                    </li>
					
					<li>
                        <a className="tag_menu" href="contact.html">CONTACT</a>
                    </li>
					
					<li className="dropdown dropdown-large">
				<a href="#" className="dropdown-toggle tag_menu" data-toggle="dropdown">DROPDOWN<b className="caret"></b></a>
				
				<ul className="dropdown-menu dropdown-menu-large row">
					<li className="col-sm-2 space_all">
						<ul>
							<li><a href="#"><img src={image5} className="iw" alt="abc"/></a></li>
							<li><a href="#">Minim Veniam – An Exc...</a></li>
                            <li><a className="col_2" href="#"><i className="fa fa-calendar col_1"></i> March 29, 2019</a></li>
						</ul>
					</li>
					<li className="col-sm-2 space_all">
						<ul>
							<li><a href="#"><img src={image6} className="iw" alt="abc"/></a></li>
							<li><a href="#">Lorem world – An Exc...</a></li>
                            <li><a className="col_2" href="#"><i className="fa fa-calendar col_1"></i> March 29, 2019</a></li>
						</ul>
					</li>
					<li className="col-sm-2 space_all">
						<ul>
							<li><a href="#"><img src={image7} className="iw" alt="abc"/></a></li>
							<li><a href="#">Eget Nulla – An Exc...</a></li>
                            <li><a className="col_2" href="#"><i className="fa fa-calendar col_1"></i> March 29, 2019</a></li>
						</ul>
					</li>
					<li className="col-sm-2 space_all">
						<ul>
							<li><a href="#"><img src={image8} className="iw" alt="abc"/></a></li>
							<li><a href="#">Dabibus Diam – An Exc...</a></li>
                            <li><a className="col_2" href="#"><i className="fa fa-calendar col_1"></i> March 29, 2019</a></li>
						</ul>
					</li>
					
					<li className="col-sm-2 space_all">
						<ul>
							<li><a href="#"><img src={image9} className="iw" alt="abc"/></a></li>
							<li><a href="#">Imperdi Board – An Exc...</a></li>
                            <li><a className="col_2" href="#"><i className="fa fa-calendar col_1"></i> March 29, 2019</a></li>
						</ul>
					</li>
					
					<li className="col-sm-2 space_all">
						<ul>
							<li><a href="#"><img src={image10} className="iw" alt="abc"/></a></li>
							<li><a href="#">Semper Board – An Exc...</a></li>
                            <li><a className="col_2" href="#"><i className="fa fa-calendar col_1"></i> March 29, 2019</a></li>
						</ul>
					</li>
					
				</ul>
				
				
			</li>
					
					<li className="dropdown">
					  <a className="tag_menu" href="blog.html" data-toggle="dropdown" role="button" aria-expanded="false">PAGES<span className="caret"></span></a>
					  <ul className="dropdown-menu drop_1" role="menu">
						<li><a href="cart.html">Shopping Cart</a></li>
						<li><a href="checkout.html">Checkout</a></li>
					  </ul>
                    </li>
					
					<li className="dropdown">
					  <a className="tag_menu" href="#" data-toggle="dropdown" role="button" aria-expanded="false"><i className="glyphicon glyphicon-shopping-cart"></i></a>
					  <ul className="dropdown-menu drop_1o" role="menu">
						<li>
						 <div className="drop_1i clearfix">
						  <div className="col-sm-6">
						   <div className="drop_1il clearfix"><h5 className="mgt">2 ITEMS</h5></div>
						  </div>
						  <div className="col-sm-6">
						   <div className="drop_1il text-right clearfix"><h5 className="mgt"><a href="#">VIEW CART</a></h5></div>
						  </div>
						 </div>
						 <div className="drop_1i1 clearfix">
						  <div className="col-sm-8">
						   <div className="drop_1i1l clearfix"><h6 className="mgt bold"><a href="#">Nulla Quis</a> <br/> <span className="normal col_2">1x - $89.00</span> <br/> <span><i className="fa fa-remove"></i></span></h6></div>
						  </div>
						  <div className="col-sm-4">
						   <div className="drop_1i1r text-right clearfix"><a href="#"><img src={image14} height="60" className="iw" alt="abc"/></a></div>
						  </div>
						 </div>
						 <div className="drop_1i1 clearfix">
						  <div className="col-sm-8">
						   <div className="drop_1i1l clearfix"><h6 className="mgt bold"><a href="#">Eget Nulla</a> <br/> <span className="normal col_2">1x - $49.00</span> <br/> <span><i className="fa fa-remove"></i></span></h6></div>
						  </div>
						  <div className="col-sm-4">
						   <div className="drop_1i1r text-right clearfix"><a href="#"><img src={image15} height="60" className="iw" alt="abc"/></a></div>
						  </div>
						 </div>
						 <div className="drop_1i2 clearfix">
						  <div className="col-sm-6">
						   <div className="drop_1il clearfix"><h5 className="mgt">TOTAL</h5></div>
						  </div>
						  <div className="col-sm-6">
						   <div className="drop_1il text-right clearfix"><h5 className="mgt">$138.00</h5></div>
						  </div>
						 </div>
						 <div className="drop_1i3 text-center clearfix">
						  <div className="col-sm-12">
						   <h5><a className="button_1 block" href="#">CHECKOUT</a></h5>
						   <h5><a className="button block" href="#">VIEW CART</a></h5>
						  </div>
						 </div>
						</li>
					  </ul>
                    </li>
					
                </ul>
            </div>
        </div>
    </nav>
</section>


<section id="shop_1" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="shop_1_top clearfix">
    <ul>
	 <li><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></li>
	 <li><a href="#">Jewellery <i className="fa fa-chevron-right"></i></a></li>
	 <li><p>Rings</p></li>
	</ul>
   </div>
  </div>
 </div>
</section>

<section id="shop_2" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="shop_2_top clearfix">
    <div className="col-sm-6"></div>
	<div className="col-sm-6 shop_2_top_right clearfix">
	 <div className="shop_2_top_right_inner clearfix">
	  <h2>Amet</h2>
	  <p>Sed dignissim lacinia nunc lacinia</p>
	 </div>
	</div>
   </div>
  </div>
 </div>
</section>

<section id="shop_3" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="shop_3_top clearfix">
    <div className="well well-sm">
        <strong className="ring_top_1">VIEW ALL FUSCE  <span className="ring_top_2">( 4827 Lacinia  )</span></strong>
        <div className="btn-group">
            <a href="#" id="list" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th-list">
            </span></a> <a href="#" id="grid" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th"></span></a>
        </div>
    </div>
    <div id="products" className="row list-group">
        <div className="item  col-sm-4">
            <div className="thumbnail">
                <div className="grid clearfix">
					<figure className="effect-julia">
						<img src={image47} alt="img21"/>
						<figcaption>
							<div>							</div>
							<a href="shop_detail.html">View more</a>						</figcaption>			
		  </figure>
					
	  </div>
                <div className="caption shop_3_bottom clearfix">
                   <div className="col-sm-4 shop_3_bottom_left clearfix">
				    <div className="shop_3_bottom_left_inner clearfix">
					 <p><i className="fa fa-rupee"></i>6,097</p>
					</div>
				   </div>
				   <div className="col-sm-8 shop_3_bottom_right clearfix">
				    <div className="shop_3_bottom_right_inner clearfix">
					 <p><a href="shop_detail.html">Vestibulum lacinia arcu</a></p>
					 <h5>Fusce 22KT Yellow Gold</h5>
					 <h6><a href="#">Sed cursus ante dapibus</a></h6>
					</div>
				   </div>
                </div>
            </div>
        </div>
        <div className="item  col-sm-4">
            <div className="thumbnail">
                <div className="grid clearfix">
					<figure className="effect-julia">
						<img src={image48} alt="img21"/>
						<figcaption>
							<div>							</div>
							<a href="shop_detail.html">View more</a>						</figcaption>			
		  </figure>
					
	  </div>
                <div className="caption shop_3_bottom clearfix">
                   <div className="col-sm-4 shop_3_bottom_left clearfix">
				    <div className="shop_3_bottom_left_inner clearfix">
					 <p><i className="fa fa-rupee"></i>5,902</p>
					</div>
				   </div>
				   <div className="col-sm-8 shop_3_bottom_right clearfix">
				    <div className="shop_3_bottom_right_inner clearfix">
					 <p><a href="shop_detail.html">Lorem ipsum dolor sit</a></p>
					 <h5>Porta 22KT Yellow Gold</h5>
					 <h6><a href="#">Duis sagittis ipsum</a></h6>
					</div>
				   </div>
                </div>
            </div>
        </div>
        <div className="item  col-sm-4">
            <div className="thumbnail">
                <div className="grid clearfix">
					<figure className="effect-julia">
						<img src={image49} alt="img21"/>
						<figcaption>
							<div>							</div>
							<a href="#">View more</a>						</figcaption>			
		  </figure>
					
	  </div>
                <div className="caption shop_3_bottom clearfix">
                   <div className="col-sm-4 shop_3_bottom_left clearfix">
				    <div className="shop_3_bottom_left_inner clearfix">
					 <p><i className="fa fa-rupee"></i>7,927</p>
					</div>
				   </div>
				   <div className="col-sm-8 shop_3_bottom_right clearfix">
				    <div className="shop_3_bottom_right_inner clearfix">
					 <p><a href="#">Sed dignissim lacinia</a></p>
					 <h5>Metal 22KT Yellow Gold</h5>
					 <h6><a href="#">More options available</a></h6>
					</div>
				   </div>
                </div>
            </div>
        </div>
        <div className="item  col-sm-4">
            <div className="thumbnail">
                <div className="grid clearfix">
					<figure className="effect-julia">
						<img src={image50} alt="img21"/>
						<figcaption>
							<div>							</div>
							<a href="shop_detail.html">View more</a>						</figcaption>			
		  </figure>
					
	  </div>
                <div className="caption shop_3_bottom clearfix">
                   <div className="col-sm-4 shop_3_bottom_left clearfix">
				    <div className="shop_3_bottom_left_inner clearfix">
					 <p><i className="fa fa-rupee"></i>4,O98</p>
					</div>
				   </div>
				   <div className="col-sm-8 shop_3_bottom_right clearfix">
				    <div className="shop_3_bottom_right_inner clearfix">
					 <p><a href="shop_detail.html">Ad litora torquent per</a></p>
					 <h5>Mauris 22KT Yellow Gold</h5>
					 <h6><a href="#">Dignissim lacinia nunc</a></h6>
					</div>
				   </div>
                </div>
            </div>
        </div>
        <div className="item  col-sm-4">
            <div className="thumbnail">
               <div className="grid clearfix">
					<figure className="effect-julia">
						<img src={image51} alt="img21"/>
						<figcaption>
							<div>							</div>
							<a href="shop_detail.html">View more</a>						</figcaption>			
		  </figure>
					
	  </div>
                <div className="caption shop_3_bottom clearfix">
                   <div className="col-sm-4 shop_3_bottom_left clearfix">
				    <div className="shop_3_bottom_left_inner clearfix">
					 <p><i className="fa fa-rupee"></i>6,222</p>
					</div>
				   </div>
				   <div className="col-sm-8 shop_3_bottom_right clearfix">
				    <div className="shop_3_bottom_right_inner clearfix">
					 <p><a href="#">Nulla quis sem at nibh</a></p>
					 <h5>Metal 22KT Yellow Gold</h5>
					 <h6><a href="#">Sed augue semper porta</a></h6>
					</div>
				   </div>
                </div>
            </div>
        </div>
        <div className="item  col-sm-4">
            <div className="thumbnail">
                <div className="grid clearfix">
					<figure className="effect-julia">
						<img src={image52} alt="img21"/>
						<figcaption>
							<div>							</div>
							<a href="shop_detail.html">View more</a>						</figcaption>			
		  </figure>
					
	  </div>
                <div className="caption shop_3_bottom clearfix">
                   <div className="col-sm-4 shop_3_bottom_left clearfix">
				    <div className="shop_3_bottom_left_inner clearfix">
					 <p><i className="fa fa-rupee"></i>8,826</p>
					</div>
				   </div>
				   <div className="col-sm-8 shop_3_bottom_right clearfix">
				    <div className="shop_3_bottom_right_inner clearfix">
					 <p><a href="shop_detail.html">Duis sagittis ipsum</a></p>
					 <h5>Metal 22KT Yellow Gold</h5>
					 <h6><a href="#">Sed augue semper porta</a></h6>
					</div>
				   </div>
                </div>
         </div>
        </div>
      </div>
   </div>
  </div>
 </div>
</section>

<section id="footer" className="clearfix">
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
</section>

<section id="footer_last" className="clearfix">
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
</section>

<section id="footer_last_2" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="footer_last_2 clearfix">
   <div className="footer_last_2_inner clerafix">
	   <p className="website">© 2013 Your Website Name. All rights reserved | Design by<a href="http://www.templateonweb.com"> TemplateOnWeb</a></p>
	  </div>
   </div>
  </div>
 </div>
</section>

{/* <script type="text/javascript">
$(document).ready(function(){

var secondaryNav = $('.cd-secondary-nav'),
   secondaryNavTopPosition = secondaryNav.offset().top;
	$(window).on('scroll', function(){
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			secondaryNav.addclassName('is-fixed');	
		} else {
			secondaryNav.removeclassName('is-fixed');
		}
	});	
	
});
</script>
<script type="text/javascript">
	$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});
	</script>
<script type="text/javascript">
	$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasclassName('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addclassName('panel-collapsed');
        $this.removeclassName('glyphicon-minus').addclassName('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeclassName('panel-collapsed');
        $this.removeclassName('glyphicon-plus').addclassName('glyphicon-minus');
    }
});
$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasclassName('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeclassName('panel-collapsed');
        $('#minim_chat_window').removeclassName('glyphicon-plus').addclassName('glyphicon-minus');
    }
});
$(document).on('click', '#new_chat', function (e) {
    var size = $( ".chat-window:last-child" ).css("margin-left");
     size_total = parseInt(size) + 400;
    alert(size_total);
    var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
    clone.css("margin-left", size_total);
});
$(document).on('click', '.icon_close', function (e) {
    //$(this).parent().parent().parent().parent().remove();
    $( "#chat_window_1" ).remove();
});

	</script>
<script type="text/javascript">
	$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addclassName('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeclassName('list-group-item');$('#products .item').addclassName('grid-group-item');});
});
	</script> */}
            </div>
           
        )
    }
}

export default Products;