import React from 'react'
import { Menu, Button, Dropdown, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../Compound/mam.css'
const Defaltlayout = (props) => {
  const user = JSON.parse(localStorage.getItem('users'));
  const menu = (

    <Menu   >
      <Menu.Item >
        <a href="/">
          Home
        </a>

      </Menu.Item>
      <Menu.Item>
        <a href="/">
          Profile
        </a>

      </Menu.Item>
      <Menu.Item>
        <a href='/userbookig'>
          MY Booking
        </a>

      </Menu.Item>
      <Menu.Item>
        <li onClick={() => {
          localStorage.removeItem("users")
          window.location.href = '/a'
        }}>LogeOut</li>

      </Menu.Item>



    </Menu>


  )


  //   <Menu>
  //     <Menu.Item>
  //     <a  href="https://www.antgroup.com">
  //         Home
  //       </a>

  //     </Menu.Item>
  //   </Menu>
  //   {
  //     key: '1',
  //     label: (
  //       <a  href="https://www.antgroup.com">
  //         Home
  //       </a>
  //     ),
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <a  href="https://www.aliyun.com">
  //         Profile
  //       </a>
  //     ),
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <a  href="https://www.luohanacademy.com">
  //         Booking
  //       </a>
  //     ),
  //   },
  //   {
  //     key: '4',
  //     label: (
  //       <a  href="https://www.luohanacademy.com">
  //         LogeOut
  //       </a>
  //     ),
  //   },
  // ];
  return (
    <div>
      <div className='header'>
        <Row gutter={16} justify='center'>
          <Col lg={20} sm={24} xs={24}>
            <div className='d-flex justify-content-between mam'>
              <h1><Link to='/' className='shopname'>Pit Stop</Link>   </h1>




              <Dropdown overlay={menu} placement="bottom" arrow>
                <Button>{user.Username}</Button>
              </Dropdown>




            </div>

          </Col>
        </Row>
      </div>
      <div className='condent'></div>
      {props.children}
    </div>
  )
}

export default Defaltlayout