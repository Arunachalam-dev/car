import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Defaltlayout from '../Compound/Defaltlayout';
import { getallcars } from '../Redux/Action/caraction';
import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import '../Style/booking.css'
import { bookcars } from '../Redux/Action/bookingaction';
import Loading from '../Compound/Loading';
// import StripeCheckout from 'react-stripe-checkout';
import dayjs from 'dayjs';
import StripeContainer from '../Page/StripeContainer';
import CheckoutForm from '../Page/CheckoutForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const { RangePicker } = DatePicker;
const Booking = () => {
  const [paymentModalVisible,setPaymentModalVisible]=useState(false);
  let { loading } = useSelector(state => state.aletreduse)
  const { car_id } = useParams();
  const [car, setcar] = useState({});
  const { cars } = useSelector((state) => state.carreducer);
  const dispatch = useDispatch();
  let [from,setfrom]=useState();
  let [to,setto]=useState();
  let [totalhours,settotalhours]=useState(0)
  let [totalamt,settotalamt]=useState(0);
  let [driver,setdrive]=useState(false)
let [model,setmodel]=useState(false)

  useEffect(() => {
    dispatch(getallcars());
  }, [dispatch]);

 


  useEffect(() => {
    if (cars.length > 0) {
      const selectedCar = cars.find((o) => o._id === car_id);
      if (selectedCar) setcar(selectedCar);
    }
  }, [cars, car_id]);


  function selecttimeslot(value) {

setfrom(dayjs(value[0]).format('YYYY-MM-DD HH:mm'))
setto(dayjs(value[1]).format('YYYY-MM-DD HH:mm'))
    // console.log("Start:", dayjs(value[0]).format('YYYY-MM-DD HH:mm'));
    // console.log("End:", dayjs(value[1]).format('YYYY-MM-DD HH:mm'));

    settotalhours(value[1].diff(value[0],'hours'))
  }
  
  useEffect(() => {
  settotalamt(totalhours * car.rentPerHour);
  if(driver) {
    settotalamt(e => e + (30 * totalhours)); 
  }
}, [driver, totalhours, car.rentPerHour]); 



// function onToken(token){
// console.log(token)
//     const reqObj = {
    
//     user: JSON.parse(localStorage.getItem("users"))._id,
//     car : car._id,
//     totalhours,
//     totalamt,
//     DriverRequire:driver,
//    bookedTimeSlot: {
//   from,
//   to
// }
//   }
//   dispatch(bookcars(reqObj))

// }


  return (
    <Defaltlayout>
      {loading === true && (<Loading />)}

            <Modal
  open={paymentModalVisible}
  onCancel={() => setPaymentModalVisible(false)}
  footer={null}
  centered
>
  <h3 className="text-center mb-3">Enter Payment Info</h3>
    <StripeContainer>
      <CheckoutForm amount={totalamt} onSuccess={() => {
        // Optionally dispatch booking info
        const reqObj = {
          user: JSON.parse(localStorage.getItem("users"))._id,
          car: car._id,
          totalhours,
          totalamt,
          DriverRequire: driver,
          bookedTimeSlot: { from, to }
        };
        dispatch(bookcars(reqObj));
      }} />
    </StripeContainer>
</Modal>


      <Row justify='center' className=' d-flex
    align-items-center  ' style={{ minHeight: '80vh' }}>
        <Col lg={10} sm={24} xs={24} className='p-3'>
          <img data-aos="flip-right"  data-aos-duration="2000" src={car.image} alt={car.name} className='cars' />
        </Col>
        <Col lg={10} sm={24} xs={24}  style={{ textAlign: "right" }}>
          <Divider type='horizontal' className='lol' style={{ borderColor: '#7cb305', marginLeft: "80px" }} dashed >Car_info

          </Divider>
          <div >
            <p>{car.name}</p>
            <p>Rent per hour / {car.rentPerHour}</p>
            <p>Fule_type  : {car.fuelType}</p>
            <p>Max_People : {car.capacity}</p>
          </div>

          <Divider type='horizontal' className='lol' style={{ borderColor: '#7cb305', marginLeft: "80px" }} dashed >Seletct Tima Slot

          </Divider>
          <RangePicker className='range mb-3'
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            onChange={selecttimeslot}
          /><br/>
          <button className='book_nows' onClick={()=>{setmodel(true)}}>Booked TimeSlot </button>
{from && to && (
  <div>
    <p>Total Hours: <b>{totalhours} Hrs</b></p>
    <p>Rent Per Hour: <b>{car.rentPerHour} $</b></p>
    <Checkbox onChange={(e) => setdrive(e.target.checked)}>Driver Required</Checkbox>
    <h4>Total Amount: {totalamt} $</h4>

    <button className='book_nows' onClick={() => setPaymentModalVisible(true)}>Book Now</button>



  </div>

)}       




 </Col>
    

      </Row>



      <Modal footer={false} closable={false} open={model} >
  {car.name && (
    <div className='p-3 '>
      {car.bookedTimeSlot.map((slot, index) => (
        <button key={index} className='book_nows2 mt-2'>{slot.from} - {slot.to}</button>
      ))}
      <div className='mt-5' style={{textAlign:"right"}}>
        <button onClick={() => setmodel(false)} className='book_nows1'>Close</button>
      </div>
    </div>
  )}
</Modal>
 

    </Defaltlayout>
  );
};

export default Booking;
