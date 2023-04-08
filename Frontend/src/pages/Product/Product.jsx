import React, { useEffect, useState } from "react";
import "./product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams("");
  const dispatch = useDispatch();
  const [selectImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const toastSuccess = () => {
    toast.success("Product has beeen added to cart", {
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
   
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(`/product/getoneproduct/${id}`);
        setProduct(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, [id]);

  return (
    <div className="product" key={product._id}>
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
      <div className="product_right">
        <div className="select_image">
          <img
            src={product.image}
            alt=""
            className="select_image_select"
            onClick={() => setSelectImg(0)}
          />
          <img
            src={product.image}
            alt=""
            className="select_image_select"
            onClick={() => setSelectImg(1)}
          />
        </div>
        <div className="product_mainImg">
          <img src={product.image} alt="" className="product_main_image" />
        </div>
      </div>
      <div className="product_left">
        <div className="product_info">
          <h3 className="product_title">{product.title}</h3>
          <h4 className="product_price"> $ {product.price}</h4>
          <p className="product_description">{product.desc}</p>
          <div className="increment_decrement">
            <div
              className="product_counter"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </div>
            <span className="product_number">{quantity}</span>

            <div
              className="product_counter"
              onClick={() => setQuantity((prevState) => prevState + 1)}
            >
              +
            </div>
          </div>
          <div className="BUTTON" onClick={toastSuccess}>
            <button

              className="product_button"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product._id,
                    title: product.title,
                    desc: product.desc,
                    price: product.price,
                    image: product.image,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon className="cart_button" 
             />
              ADD TO CART
            </button>
          </div>
          <div className="wishList_compare">
            <div className="wishList">
              <FavoriteBorderIcon className="wishlist_compare_icon" />
              <span>ADD TO WISH LIST</span>
            </div>
            <div className="wishList">
              <CompareArrowsIcon className="wishlist_compare_icon" />
              <span>ADD TO COMPARE</span>
            </div>
          </div>
          <div className="vendor_information">
            <p className="vendor_name">Vendor : Polo</p>
            <p className="product_type">Product Type : T-Shirt</p>
            <p className="product_tags">Tags : Men , Children , T-Shirt</p>
          </div>
          <hr />
          <div className="additional_information">
            <p className="additional_description">DESCRIPTION</p>
            <p className="additional_info">ADDITIONAL INFORMATION</p>
            <p className="additional_faqs">FAQ'S</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
