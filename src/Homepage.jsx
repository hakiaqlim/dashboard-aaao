import React from 'react'
import Detail from './Component/Detail'
import Map from './Component/map'
import Sidebar from './Component/Sidebar'

const Homepage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
<div className='flex-1'>
<Detail/>
<Map/>
</div>
    </div>
  )
}

export default Homepage