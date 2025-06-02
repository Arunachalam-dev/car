import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../Api';


export const getallcars = () => async dispatch => {
  dispatch({ type: 'LOADING', payload: true });

  try {
    const response = await API.get('/api/cars/getallcars');
    dispatch({ type: 'GET_ALL_CARS', payload: response.data });
    dispatch({ type: 'LOADING', payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'LOADING', payload: false });
  }
};


export const Addcars=(reqobj)=>async dispatch=>{
  dispatch({type:'LOADING',paylode:true})

  try{
    await API.post('/api/cars/addcar',reqobj)
    dispatch({type:"LOADING",payload:false})
    toast.success("Car Add Successfully")
    setTimeout(()=>{
       window.location.href='/Admin'
    },500)
  }
  catch(error){
    console.log(error)
    dispatch({type:"LOADING",payload:false})
    toast.error("Car Add faild")
  }
}


export const Editcars=(reqobj)=>async dispatch=>{
dispatch({type:'LODAING', paylode:true})

try{
  await API.post('/api/cars/editcar',reqobj)
  dispatch({type:'LODAING', paylode:false})
  toast.success("Car Edit Successfull")
  setTimeout(()=>{
    window.location.href='/Admin'
  },500)
}

catch(error){
   dispatch({type:'LODAING', paylode:false})
   toast.error("Car Edit faild")
}
}


export const Deletecar=(reqobj)=>async dispatch=>{
dispatch({type:'LODAING', paylode:true})

try{
  await API.post('/api/cars/deletecar',reqobj)
  dispatch({type:'LODAING', paylode:false})
  toast.success("Car Delete Successfull")
  setTimeout(()=>{
    window.location.reload()
  },500)
}

catch(error){
   dispatch({type:'LODAING', paylode:false})
   toast.error("Car Delete faild")
}
}
