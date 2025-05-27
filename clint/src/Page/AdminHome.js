
import React, { useEffect, useState } from 'react'
import Defaltlayout from '../Compound/Defaltlayout'
import { useSelector ,useDispatch} from 'react-redux'
import '../Style/Home.css'
import { Link } from 'react-router-dom'
import {  Popconfirm } from 'antd';
import {
DeleteOutlined,EditOutlined
} from '@ant-design/icons';
import {Col,Row,} from "antd";
import { Deletecar, getallcars } from '../Redux/Action/caraction'
import Loading from '../Compound/Loading';




const AdminHome = () => {
  const text = 'Are you sure to delete Car?';
const description = 'Delete the Car'
   let {cars}=useSelector(state=>state.carreducer)
   let {loading}=useSelector(state=>state.aletreduse)
   let [totalcars,settotalcars]=useState([])
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    dispatch(getallcars());

  }, [dispatch])


  useEffect(()=>{
settotalcars(cars)
  },[cars])

//  function setfilter(value){
//     if (!value || value.length !== 2) {
//     settotalcars(cars); // Reset to all cars if picker is cleared
//     return;
//   }

  
  return (
    <Defaltlayout>


        
  {loading ===true && (<Loading/>)}
   <div className='box1'>
    <h4>Admin Panal <span>  <Link  to={'/addcar'}><button className='admainadd'>ADD CAR</button></Link></span> </h4>
           
          </div>
        <Row  justify='center'  gutter={16} id='aaa' >
         
          {totalcars.map(car=>{
            return <Col lg={5} sm={24} xs={24}>
    <div className='cars_image pt-3 ' key={car._id}>
 
        <img src={car.image} alt={car.name} />

  
      <div className='cars_content '>
        <div>
        <p>{car.name}</p>
        <p>{car.rentPerHour} \ Per Hours  </p>
        </div>
<div>
      <Link to={`/editcar/${car._id}`}><EditOutlined  className='edit' /> </Link>
       
          <Popconfirm
            placement="rightBottom"
            onConfirm={()=>dispatch(Deletecar({carid : car._id}))}
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
          > <DeleteOutlined  className='delete'/>
          </Popconfirm>
     
</div>
      </div>
      
      
    </div>

            </Col>
          })}
          <div></div>
        </Row>
        </Defaltlayout>
  )
        }

export default AdminHome