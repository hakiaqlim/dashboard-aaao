import React from 'react'
import Navbar from './Component/Navbar'
import Detail from './Component/Detail'
import Chart from './Component/Chart'
import ClientDetail from './Component/ClientDetail'
import Map from './Component/map'
import Sidebar from './Component/Sidebar'

const Homepage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
{/* <Navbar/> */}
<div className='flex-1'>
<Detail/>
<Map/>
</div>

{/* <Chart/> */}
{/* <ClientDetail/> */}
    </div>
  )
}

export default Homepage