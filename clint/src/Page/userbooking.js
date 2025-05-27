import React, { useEffect } from 'react';
import Defaltlayout from '../Compound/Defaltlayout';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Compound/Loading';
import dayjs from 'dayjs';
import { Row, Col } from 'antd';
import { getallbooking } from '../Redux/Action/bookingaction';
import '../Style/userbookig.css';

const Userbooking = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("users"));

  const { bookings = [], loading } = useSelector(state => state.bookingreducer || {});

  useEffect(() => {
    dispatch(getallbooking());
  }, [dispatch]);

  const userBookings = bookings.filter(o => o.user === user._id || o.user?._id === user._id);

  return (
    <Defaltlayout>
      {loading && <Loading />}

      <Row justify={'center'} gutter={16}>
        <Col lg={20} sm={24} className='deatile'>
          {userBookings.length > 0 ? (
            userBookings.map((booking, index) => (
              <Row key={booking._id || index} className='booking_deatila mt-3' gutter={16}>
                {booking.car ? (
                  <>
                    <Col lg={7} sm={24} className='Car_Details mt-2'>
                      <h3>Car Details</h3>
                      <p>Car: <b>{booking.car.name}</b></p>
                      <p>Fuel Type: <b>{booking.car.fuelType}</b></p>
                      <p>Capacity: <b>{booking.car.capacity}</b></p>
                      <p>Rent Per Hour: <b>{booking.car.rentPerHour}</b></p>
                    </Col>

                    <Col lg={10} sm={24} className='booked_Time mt-3'>
                      <h4>Booked Time</h4>
                      <p>From: <b>{booking.bookedTimeSlot.from}</b></p>
                      <p>To: <b>{booking.bookedTimeSlot.to}</b></p>
                      <p>ID: <b>{booking.car._id}</b></p>
                      <p>Date of Booking: <b>{dayjs(booking.createdAt).format('YYYY-MM-DD HH:mm')}</b></p>
                    </Col>

                    <Col lg={6} sm={24} className='csrbook'>
                      <h5>Booked Car</h5>
                      <img src={booking.car.image} alt={booking.car.name} className='usercar' />
                      <p>Total Hours: <b>{booking.totalhours} Hrs</b></p>
                      <p>Total Amount: <b>${booking.totalamt}</b></p>
                    </Col>
                  </>
                ) : (
                  <Col span={24}>
                    <p>Car details are unavailable for this booking.</p>
                  </Col>
                )}
              </Row>
            ))
          ) : (
            !loading && <p className='nodata'>CAR NOT BOOKED</p>
          )}
        </Col>
      </Row>
    </Defaltlayout>
  );
};

export default Userbooking;
