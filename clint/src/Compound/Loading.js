import React from 'react'
import { Spin } from 'antd'
import '../Style/Home.css'


const Loading = () => {
  return (
<div className='spinner'> 
    <Spin size='large'/>
</div>
  )
}

export default Loading