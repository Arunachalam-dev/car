import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../Api';


export const bookcars=(reqObj)=>async dispatch=>{
    dispatch({type:'LOADING', payload:true})

    try{
        API.post('/api/bookings/bookcar',reqObj);
        dispatch({type:'LOADING',payload:false})
        toast.success('Booking successful!',{position:'top-center',className: "foo-bar"});
        setTimeout(()=>{
          window.location.href='/userbookig'
        },500)
    }

    catch(error){
        console.log(error)
        dispatch({type:'LOADING',payload:false})
          toast.error('Booking failed!');
    }
};


export const getallbooking = (reqObj) => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: true });
  try {
    const response = API.get('/api/bookings/getallbookings',reqObj);
    dispatch({ type: 'GET_ALL_BOOKINGS', payload: response.data });
    dispatch({ type: 'LOADING', payload: false });
  } catch (error) {
    console.error('Get bookings error:', error);
    dispatch({ type: 'LOADING', payload: false });
  }
};
