import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import '../Style/Login.css'
import { Link } from "react-router-dom"
import{useDispatch,useSelector}  from 'react-redux'
import { userlogin } from '../Redux/Action/useraction'
import Loading from '../Compound/Loading'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Login() {
  let {loading}=useSelector(state=>state.aletreduse)
   const dispatch = useDispatch()
  const onFinish = (value) => {
    dispatch(userlogin(value))
    console.log(value)
  }
  return (
    <div className='login p-5'>
      {loading === true && (<Loading/>)}
      <Row gutter={16} >
        <Col lg={16} className='background' >
          <img className='align-items-left' data-aos="fade-right" data-aos-duration="1500"
     data-aos-easing="ease-in-sine" src={"https://cdn.mos.cms.futurecdn.net/mzR5isYhyqNmLCw3R9Zn4o-1024-80.jpg.webp"} alt='no imahe'  aria-hidden="true" />

        </Col>
        <Col lg={8} className='text-center mt-5'>
          <Form layout='vertical' className='login_form p-5 mt-5' onFinish={onFinish}>
            <h1>Login</h1>
            <Form.Item name='Username' label='Username' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name='Password' label='Password' rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <button className='btn1 mt-2 mb-3'>Login</button>
            <Link to='/Register' className='arun'><span>Create Account</span>Register</Link>
          </Form>

        </Col>
      </Row>
    </div>
  )
}

export default Login