import React  from 'react'
import Defatltlayout from '../Compound/Defaltlayout'
import {Row,Col,Form,Input} from 'antd'
import '../Style/Addcar.css'
import Loading from '../Compound/Loading';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Editcars } from '../Redux/Action/caraction';
import { getallcars } from '../Redux/Action/caraction';
import { useEffect, useState } from 'react'
const Editcar = () => {
    const dispatch=useDispatch();
    const { car_id } = useParams();
  const [car, setcar] = useState({});
  const [totalcars,settotalcars]=useState({})
  const { cars } = useSelector((state) => state.carreducer);

    let {loading}=useSelector(state=>state.aletreduse);

    function onFinish(value){
      value._id=car._id
        dispatch(Editcars(value))
console.log(value)
    }

      useEffect(() => {
        dispatch(getallcars());
      }, [dispatch]);
    

  useEffect(() => {
    if (cars.length === 0) 
        {
            dispatch(getallcars());
    
        }
        else{
            settotalcars(cars)
    setcar(cars.find((o) => o._id === car_id));
    console.log(car)
      
    }
  }, [cars, car_id,car,dispatch]);

  return (
    
<Defatltlayout>
    {loading ===true && (<Loading/>)}
   <Row justify={'center'} className='mt-3'>
    
<Col lg={16} sm={24} xs={24} className='lol p-3' >
{totalcars.length > 0 &&(
    <Form  initialValues={car}  className='addcar' layout='vertical' onFinish={onFinish}> 
    <h2>Edit Car</h2>
    <Form.Item name='name' label='Car_name' rules={[{required:true}]}>
    <Input/>
    </Form.Item>
    <Form.Item name='image' label='Image_URL' rules={[{required:true}]}>
  <Input/>
    </Form.Item>
    <Form.Item name='rentPerHour' label='Rent_Per_Hours' rules={[{required:true}]}>
  <Input/>
    </Form.Item>
    <Form.Item name='capacity' label='Capacity' rules={[{required:true}]}>
<Input/>
    </Form.Item>
    <Form.Item name='fuelType' label='Fuel_Type' rules={[{required:true}]}>
 <Input/>
    </Form.Item>
    <button className='Addbtn'>Edit Car</button>
</Form>
)}
</Col>
   </Row>
</Defatltlayout>
  )
}

export default Editcar