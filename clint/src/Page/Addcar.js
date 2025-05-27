import React  from 'react'
import Defatltlayout from '../Compound/Defaltlayout'
import {Row,Col,Form,Input} from 'antd'
import '../Style/Addcar.css'
import Loading from '../Compound/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { Addcars } from '../Redux/Action/caraction';
const Addcar = () => {
    const dispatch=useDispatch();

    let {loading}=useSelector(state=>state.aletreduse);

    function onFinish(value){
        dispatch(Addcars(value))
console.log(value)
    }
  return (
    
<Defatltlayout>
    {loading ===true && (<Loading/>)}
   <Row justify={'center'} className='mt-3'>
    
<Col lg={16} sm={24}  xs={24} className='lol p-3' >
<Form className='addcar' layout='vertical' onFinish={onFinish}> 
  <h2>Add Car</h2>
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
    <button className='Addbtn'>ADD CAR</button>
</Form>
</Col>
   </Row>
</Defatltlayout>
  )
}

export default Addcar