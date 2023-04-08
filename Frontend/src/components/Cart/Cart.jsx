import React, { useEffect, useState } from "react";
import "./Cart.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Redux/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const toastReset = () => {
    toast.success("Your cart has been reset", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const toastDeleted = () => {
    toast.success("Product has been deleted from cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [stripeToken, setStripeToken] = useState(null)

const onToken=(token)=>{

  setStripeToken(token);
}
console.log(stripeToken)
useEffect(() => {
  const makeReq = async () => {
    try {
      const res = await axios.post(
        "checkout/payment",
        {
          tokenId: stripeToken.id,
          amount: totalPrice * 100,
        }
      );
      navigate.push("/success", { data: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  makeReq();
}, [stripeToken, totalPrice, navigate]);
  return (
    <div className="cart_website">
     
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="cart_main">
        <h4>Products in Cart</h4>
        {products?.map((item) => (
          <div className="cart_cart" key={item._id}>
            <div className="cart_product">
              <img src={item.image} alt="" className="cart_product_image" />
            </div>
            <div className="cart_product_info">
              <h5>{item.title}</h5>
              <p>{item.desc?.substring(0,40)}...</p>
              <p>
                {item.quantity} X ${item.price}
              </p>
            </div>
            <div className="product_delete" onClick={toastDeleted}>
              <DeleteOutlineIcon
                className="product_delete"
                onClick={() => dispatch(removeItem())}
              />
            </div>
          </div>
        ))}
        <div className="subtotal">
          <h3>SubTotal</h3>
          <h4>$ {totalPrice()}</h4>
        </div>
        <div className="button_checkout_button">
          {/* <button className="button_checkout">PROCEED TO CHECKOUT</button> */}
          <StripeCheckout
  name="Online Shop" 
  description={`Your total is ${totalPrice()}`}
  image="/images/logo.png" 
  amount={`${totalPrice()}`*100} 
  currency="USD"
  stripeKey='pk_test_51LGWLQDyGf3jqPnMHYYabbSJM2Y5chfGg8jspuPEN10xlQ4Y61TVaNXX5PF3Dc5zwhRVWaFBtxeg7oqGgEwXFMGL00vGHSP5LI'
  shippingAddress
  billingAddress
  token={onToken} 
  >
 <button className="button_checkout">PROCEED TO CHECKOUT</button>
</StripeCheckout>
        </div>
        <div className="reset_cart" onClick={toastReset}>
      <h5 className="rest_cart" onClick={() => dispatch(resetCart())} > 
          RESET CART 
        </h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
