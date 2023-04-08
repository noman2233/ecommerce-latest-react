import { publicRequest, userRequest } from "../requestMethods";
import { getProductsStart,getProductsFailure, getProductsSuccess, deleteProductStart, deleteProductSuccess, deleteProductFailure } from "./productsSlice";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    } catch (err) {
    dispatch(loginFailure());
  }
};


export const getProducts=async(dispatch)=>{
  dispatch(getProductsStart())
  try {
    const res=await publicRequest.get('/product/getallproducts')
    dispatch(getProductsSuccess(res.data))
  } catch (error) {
    dispatch(getProductsFailure())
  }
}

export const deleteProduct=async(id,dispatch)=>{
  dispatch(deleteProductStart())
  try {
    // const res=await userRequest.delete(`/product/deleteproduct/${id}`)
    dispatch(deleteProductSuccess(id))
  } catch (error) {
    dispatch(deleteProductFailure())
    
  }
}