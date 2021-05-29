import React, { Component } from "react";
import ApiService from './../src/services/ApiService';
import Stripe from './Stripe';
import image1 from './img/1.png'
import image56 from './img/56.jpg'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

class ProductDetails extends Component {

	constructor(props) {
        super(props);
        this.state = {
            id: '',
            image: '',
            name: '',
            description: '',
            price: '',
        }
    }
    

	  componentDidMount() {
		var jewellryId = +this.props.match.params.id;
		console.log(jewellryId);
		localStorage.removeItem("value1");
		ApiService.fetchJewellryById(jewellryId)
		    .then((res) => {console.log(res.data);
		        let jewellry = res.data;
		        this.setState({
		            id: jewellry.id,
		            image: jewellry.image,
		            imageurl: jewellry.imageurl,
		            name: jewellry.name,
		            description: jewellry.description,
		            price: jewellry.price
		        }) 
		    });
	    }
	 onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        
         handleToken=(token, addresses)=> {
  console.log(token,addresses)
  console.log(token.id);
  console.log(token.email);

    axios.post(
      "https://gold-covering.herokuapp.com/api/auth/payment",
      { token:{id:token.id},
      stripeEmail:token.email,
       description: "donation",
      amount:35000}, {  headers: {
          'Authorization': 'Basic U3VqYW46MTIzNDU2'
      }}
    );
    

      toast("Your Order Confirmed!", { type: "success" });
   
     axios.post("https://gold-covering.herokuapp.com/orders",{
      "customerName":addresses.billing_name,
      "address":addresses.shipping_address_line1,
      "email":token.email,
      "jewellryName":this.state.name,
	    "price":this.state.price
},)
         .then(response=>{
                 console.log(response.data)
                
          
                });
  
  
  }



    render() {
        return(
            <div>

<section id="shop_1" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="shop_1_top clearfix">
   
   </div>
  </div>
 </div>
</section>

<section id="shop_detail" className="clearfix">
  <div className="container">
  <div className="row">
   <div className="shop_detail clearfix">
    <div className="col-sm-6 shop_detail_left clearfix">
	 <div className="shop_detail_left_inner_1 clearfix">

	  <img className="img-fluid-rounded1" src={this.state.image} onChange={this.onChange} alt="jewel" width="450" height="450" />
          
	 </div>
	</div>
	<div className="col-sm-6 shop_detail_right clearfix">
	 <div className="shop_detail_right_inner_1 clearfix">
	  <h2>{this.state.name}</h2><br/>
	  <h3> Rs:{this.state.price}.00</h3><br/>
	  <h4>{this.state.description}</h4>
	  <br/>
    <div class="cart_3l1i2 clearfix">
         <div class="input-group number-spinner">
				<span >
					<button class="btn btn-default" data-dir="dwn"><span class="glyphicon glyphicon-minus"></span></button>
				</span>

				<input type="text" class="form-control text-center" value="1"/>

				<span >
					<button class="btn btn-default" data-dir="up"><span class="glyphicon glyphicon-plus"></span></button>
				</span>		</div></div>
      <br/>
	  <div >
      
      <StripeCheckout
        stripeKey="pk_test_51IhpT4IBqkG6qdaTShgZOOhkSmHpFdH351SbDC4fOAqHIUAWPpC8Bzm7WzjxDfl1sof6vFWqQZkRlaytX790yP5u00g3lKobMN"
        token={this.handleToken}
        amount={this.state.price}
        name="K.T Gold Covering"
        billingAddress
        shippingAddress
      />
    </div>
	</div>
   </div>
  </div>
 </div>
 </div>
</section>

<section id="center_7" className="clearfix">
 <div className="container">
  <div className="row">
   <div className="center_7_top clearfix">
    <div className="center_7_top_inner_1 clearfix">
	 <h2>FOLLOW US</h2>
	 <h5>Join Us & Save more on your favourite products</h5>
	 <hr className="hr_2"/>
	  <ul>
	   <li><a className="family_1" href="#"><i className="fa fa-facebook-f"></i>Facebook</a></li>
	   <li><a className="family_3" href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
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

export default ProductDetails;
