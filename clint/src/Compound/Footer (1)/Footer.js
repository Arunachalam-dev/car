import React from 'react'
import { Link, } from 'react-router-dom'
import { Container, Row, Col, ListGroup,ListGroupItem} from 'reactstrap'
import './Footer.css'

const Footer = () => {
  let date= new Date()
  let yeat=date.getFullYear()
  let quicklink = [
    {
      path: "/about",
      display: "About"
    },
    {
      path: "#",
      display: "privesi policey"
    },
    {
      path: "/Cars",
      display: "Carlist"
    },
    {
      path: "/blog",
      display: "Bloge"
    },
    {
      path: "/Condect",
      display: "Condect"
    }


  ]
  return (
    <footer className='footer-item'>
      <Container>
        <Row >
          <Col lg='4' md='4' sm='4' >
            <div className='logo footer-logo'>
              <h1>
                <Link to='/home' className='d-flex alige-items-center gap-3'><i class="ri-roadster-line"></i>
                  <span>Pit Stop <br />Service</span></Link>
              </h1>
              <p className='footer-deatila'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              </p>

            </div>
          </Col>
          <Col lg="2" md='4' sm='6'>
            <div className='md-4'>
              <h5 className='foote-item-list'>Quicklink</h5>
              <ListGroup>
                {
                  quicklink.map((item,index) =><ListGroupItem key={index}className='p-0 mt-3 arun' ><Link   to={item.path}>{item.display}</Link>
                  </ListGroupItem>)}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="3" sm="6">
          <div className='md-5'>
          <h4 className='foote-item-list'>Head Office</h4>
          <p className='office-info'>31 A kumaragur avnu Neelagari</p>
          <p className='office-info'>Location: chennai</p>
          <p className='office-info'>Phone : +91-9976074387</p>
          <p className='office-info'>Email : Aruncarrent@gmail.com</p>
          <p className='office-info'>Office Time : 9:30 AM - 10.00 PM</p>
          </div>
          </Col>
<Col lg='3' md='2' sm='0'>
<div >
<h4 className='foote-item-list'>Newsleter</h4>
<p className='secton-description'> Subscribe our Newsleter</p>
<div className='newsletter'>
          <input type='text' placeholder='search' />
          <span><i class="ri-send-plane-fill"></i></span>
          </div>

        </div>
        
</Col>
<Col lg="12">
<div className='footer-box'>
  <p className='secton-description d-flex alige-items-center  justify-content-center gap-1 '><i class="ri-copyright-line"></i>CopyRight {yeat},Devloped BY Arunachalam G. All right reserved</p>

</div>
</Col>

        </Row>
        

      </Container>

    </footer>
  )
}

export default Footer