import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import '../Style/Login.css'

import { Link } from "react-router-dom"
import { userregister } from '../Redux/Action/useraction'
import {useDispatch ,useSelector} from "react-redux"
import Loading from '../Compound/Loading'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Register = () => {
  let {loading}=useSelector(state=>state.aletreduse)
  const dispatch = useDispatch()
  // const onFinish = (values) => {
  //   if (values.password !== values.confirmPassword) {
  //     message.error("Passwords do not match");
  //     return;
  //   }
  
  //   const reqObj = {
  //     username: values.username,
  //     password: values.password,
  //   };
  
  //   dispatch(userregister(reqObj));
  // };
   const onFinish = (value) => {
      dispatch(userregister(value))
      console.log(value)
    }
  return (
    //https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
    <div className='login p-5'>
      {loading === true && (<Loading/>)}
      <Row gutter={16} >
        <Col lg={16} className='background' >
          <img data-aos="fade-left"  data-aos-duration="1500"
     data-aos-easing="ease-in-sine" className='align-items-start' style={{width:"900px", alignItems:'center',  marginLeft:'80px' ,marginTop:'30px'}} src={`https://4kwallpapers.com/images/walls/thumbs_3t/16227.jpg`} alt='no image'  aria-hidden="true"/>

        </Col>
        <Col lg={8} className='text-center mt-3'>
          <Form layout='vertical' className='login_form p-5 mt-2' onFinish={onFinish}>
            <h1>Registe</h1>
            <Form.Item name='Username' label='Username' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='Password' label='Password' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='CPassword' label='Conform password' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <button className='btn1 mt-2 mb-3'>Register</button>
            
            <Link to='/login' className='arun'><span>Already have account</span>Login</Link>
          </Form>

        </Col>
      </Row>
    </div>
  )
}

export default Register