import React, { useEffect, useState } from 'react'
import Defaltlayout from '../Compound/Defaltlayout'
import { useSelector, useDispatch } from 'react-redux'
import '../Style/Home.css'
import { Link } from 'react-router-dom'
import { Col, Row, DatePicker } from "antd";
import { getallcars } from '../Redux/Action/caraction'
import Loading from '../Compound/Loading';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween); // ✅ Enable isBetween plugin

const { RangePicker } = DatePicker;

const Home = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector(state => state.carreducer);
  const { loading } = useSelector(state => state.aletreduse);

  const [totalcars, settotalcars] = useState([]);

  useEffect(() => {
    dispatch(getallcars());
  }, [dispatch]);

  useEffect(() => {
    settotalcars(cars);
  }, [cars]);

  function setfilter(value) {
    if (!value || value.length !== 2) {
      settotalcars(cars);
      return;
    }

    const selecttimefrom = dayjs(value[0]);
    const selecttimeto = dayjs(value[1]);

    const filteredCars = cars.filter(car => {
      if (car.bookedTimeSlot.length === 0) return true;

      // Car is available only if none of its bookings conflict
      return car.bookedTimeSlot.every(booking => {
        const bookingFrom = dayjs(booking.from);
        const bookingTo = dayjs(booking.to);

        return (
          selecttimeto.isBefore(bookingFrom) || selecttimefrom.isAfter(bookingTo)
        );
      });
    });

    settotalcars(filteredCars);
  }

  return (
    <Defaltlayout>
      <Row justify="center" className="mt-3">
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            onChange={setfilter}
          />
        </Col>
      </Row>

      {loading && <Loading />}

      <Row justify="center" gutter={16} id="aaa">
        {totalcars.length === 0 && (
          <p style={{ marginTop: 20, textAlign: 'center' }}>
            No cars available for the selected time range.
          </p>
        )}

        {totalcars.map(car => (
          <Col key={car._id} lg={5} sm={24} xs={24}>
            <div className="cars_image pt-3">
              <img src={car.image} alt={car.name} />
              <div className="cars_content">
                <div>
                  <p>{car.name}</p>
                  <p>{car.rentPerHour} ₹ / Hour</p>
                </div>
                <div>
                  <button className="book_now">
                    <Link className="linktag" to={`/booking/${car._id}`}>Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Defaltlayout>
  );
};

export default Home;
