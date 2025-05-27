import React from 'react'
import {Container,Row,Col} from "reactstrap";
import { Link} from 'react-router-dom';
import './header.css'

const Header = () => {


  // let navLink=[
  //   {
  //   path:'/',
  //   display:'Home'
  // },
  // {
  //   path:'/cars',
  //   display:'Cars'
  // },
  // {
  //   path:'/Blog',
  //   display:'Bloge'
  // },
  // {
  //   path:'/About',
  //   display:'About'
  // },
  // {
  //   path:'/condect',
  //   display:'Condect'
  // }
  

  // ];
  return ( <header className='header'>
    <div className='header-top'>
<Container>
  <Row  >
    <Col lg='6' md='6 ' sm='6'>
    <div className='header-top-left'>
    <span>
          Need help!
        </span>
      <div className='header-help'>
        
      <span><i class="ri-phone-line"></i></span>+91-9976043258
      </div>

    </div>
    </Col>
    <Col lg='6' md='6 ' sm='6'>
    <div className='header-top-right d-flex align-items-center 
    justify-content-end gap-3'>
<Link to='/login' className='d-flex align-items-center 
     gap-1'><i class="ri-login-circle-line"></i>Login</Link>
<Link to='/register' className='d-flex align-items-center 
     gap-1'><i class="ri-user-line"></i>Registe</Link>

    </div>
    </Col>
  </Row>
</Container>
    </div>
    {/* ================================================midelhedaer==================================================================== */}

    <div className='header-madile'>
      <Container>
        <Row>
        <Col lg='4' md='3' sm='4'>
        <div className='logo'>
          <h1><Link to='/home' className='d-flex align-items-center gap-3'><i class="ri-roadster-line"></i><span>Pit Stop <br/>Service</span></Link></h1>
          
        </div>
        </Col>
        <Col lg='3' md='2' sm='3'>
        <div className='heade-location d-flex align-items-center gap-3'> 
          <span ><i class="ri-earth-line"></i></span>
          <dvi className="header-location-condect">
          <h4>Tamil Nadu</h4>
          <h6>Chennai city,chennai</h6>
          </dvi>
         

        </div>
        </Col>
        <Col lg='3' md='2' sm='3'>
        <div className='heade-location  d-flex align-items-center gap-3'> 
          <span><i class="ri-time-line"></i></span>
          <dvi className="header-location-condect">
          <h4>Monday-Saturday</h4>
          <h6>9.30 AM - 10.00 PM</h6>
          </dvi>

        </div>
        </Col>
        <Col lg='2' md='3' sm='0'> 
        <button className='headet-btn  d-flex align-items-center justify-content-end text-end'>
<Link to='/condect'><i class="ri-phone-fill"></i>Require a Call</Link>
        </button>

        </Col>
        </Row>
      </Container>

    </div>
    {/* ========================================================headermani================================================ */}
    <div className='header-mani'>
      <Container>
     
          <div className='navebar-wrape d-flex align-items-center justify-content-between '>
            <snap className="mobile-menu"><i class="ri-menu-line"></i></snap>


        
          <div className='navegation '>
            {/* <div className='menu '>{
             navLink.map((item,index)=>(<NavLink to={item.path}key={index}>{item.display}</NavLink>))
}
             </div> */}
      </div>
      <div className='nar-right'>
        <div className='seache'>
          <input type='text' placeholder='search' />
          <span><i class="ri-search-line"></i></span>

        </div>


        </div>

        </div>
      </Container>
      </div>

    


    
 </header> )
}

export default Header