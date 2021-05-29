import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


toast.configure();

function Stripe(price) {
 const [subCom,setSubCom]=React.useState(localStorage.getItem("subId"));
const [mainCom,setMainCom]=React.useState(localStorage.getItem("MainId"));
const [value1, setValue1] = React.useState(localStorage.getItem("value1"));

  async function handleToken(token, addresses) {
  console.log(token,addresses)
  console.log(token.id);
  console.log(token.email);
console.log(price);

  const response = await axios.post(
      "https://gold-covering.herokuapp.com/api/auth/payment",
      { token:{id:token.id},
      stripeEmail:token.email,
       description: "donation",
      amount:35000}, {  headers: {
          'Authorization': 'Basic U3VqYW46MTIzNDU2'
      }}
    );
     const { status } = response.data;
    console.log("Response:", response.data);
    
      toast("Your Order Confirmed!", { type: "success" });
   
     axios.post("https://gold-covering.herokuapp.com/orders",{
	"customerName":token.email,
	"address":addresses.shipping_address_line1,
	image:[]
},)
         .then(response=>{
                 console.log(response.data)
                
          
                });
  
  
  }

  return (
    <div >
      
      <StripeCheckout
        stripeKey="pk_test_51IhpT4IBqkG6qdaTShgZOOhkSmHpFdH351SbDC4fOAqHIUAWPpC8Bzm7WzjxDfl1sof6vFWqQZkRlaytX790yP5u00g3lKobMN"
        token={handleToken}
        amount={value1}
        name="K.T Gold Covering"
        billingAddress
        shippingAddress
      />
    </div>
  );
}
export default Stripe
