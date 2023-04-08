import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <>
      <h2 className="checkout_heading">Checkout Page</h2>
      <div className="checkout">
  
        <div className="checkout_total">
          <h5 style={{ textAlign: "center", margin: "10px 0px" }}>
            Products Bought
          </h5>
          <div className="product_bought">
            <div className="product_bought_number">
              <img
                src="https://api.lorem.space/image?w=640&h=480&r=9978"
                alt=""
                className="product_bought_image"
              />
              <p className="product_bought_price">$ 200</p>
            </div>
            <div className="product_bought_number">
              <img
                src="https://api.lorem.space/image?w=640&h=480&r=9978"
                alt=""
                className="product_bought_image"
              />
              <p className="product_bought_price">$ 200</p>
            </div>
          </div>
          <div className="coupon">
            <input
              type="text"
              placeholder="Coupon Code "
              className="coupon_input"
            />
            <button className="coupon_button">Apply</button>
          </div>
          <div className="checkout_subtotal">
            <h6>SubTotal</h6>
            <h6>$ 400</h6>
          </div>
          <div className="checkout_total_total">
            <h3>Total</h3>
            <h3>$ 500</h3>
          </div>
          <div className="bank_pictures">
            <img src="/images/visa.jpg" alt="" />
            <img
              src="https://thumbs.dreamstime.com/b/mastercard-logo-icon-mastercard-incorporated-american-multinational-financial-services-corporation-headquartered-204759308.jpg"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/469/637/small/paypal-payment-icon-editorial-logo-free-vector.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="personal_info_checkout">
          <h6 className="contact_info">Contact Information</h6>
          <div className="name_email">
            <input type="text" name="" placeholder="Name" />
            <input type="email" name="" placeholder=" Email" />
          </div>
          <div className="address">
            
            <textarea
              name=""
              id=""
              cols="40"
              rows="3"
              placeholder="Address"
            ></textarea>
          </div>
          <div className="city_code">
            <input type="text" placeholder=" City" />
            <input type="text" placeholder="Postal Code" />
            <input type="number" placeholder="Phone No." />
          </div>
     
     
          <div className="pay_button_checkout">
            <button className="pay_button">PAY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
