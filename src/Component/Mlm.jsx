import React from 'react'
import MlmDetail from './MlmDetail'
import MlmDdr from './MlmDdr'
import Sidebar from './Sidebar'

const Mlm = () => {
  return (
     <div className="flex min-h-screen">
      <Sidebar/>

<div className='flex-1'>
     
<MlmDetail/>
<MlmDdr/>    
    </div>
    </div>
  )
}

export default Mlm