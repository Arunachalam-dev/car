import axios from "axios";
import 'antd/dist/reset.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// USER LOGIN
export const userlogin = (reqObj) => async dispatch => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post('https://trst1.onrender.com/api/users/login', reqObj);
    
    // Save user data to localStorage
    localStorage.setItem("users", JSON.stringify(response.data));
    
    toast.success("Login successful");
    
    dispatch({ type: "LOADING", payload: false });
    setTimeout(()=>{ window.location.href='./'},500)

   
  
  } catch (error) {
    console.error(error);

    
   toast.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

// USER REGISTER
export const userregister = (reqObj) => async dispatch => {
  dispatch({ type: "LOADING", payload: true });

  try {
    
 await axios.post('https://trst1.onrender.com/api/users/register', reqObj);

      toast.success("register successfully")
    

    dispatch({ type: "LOADING", payload: false });
    setTimeout(()=>{ window.location.href='./login'},3000)

    
  } catch (error) {
    console.error(error); 

    toast.error( "Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
