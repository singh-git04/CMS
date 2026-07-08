import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import TopNav from '../../features/dashboad/ui/components/TopNav'
import AsideNav from '../../features/dashboad/ui/components/AsideNav'

const DashBoardLayout = () => {

  let {mode} = useSelector((store)=> store.theme)
  useEffect(()=>{
    if(mode==="light"){
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
    }
  },[mode])

  return (
    <div className='h-screen grid grid-cols-[1fr_8fr]'>
      <div className='border-r border-grey-400'><AsideNav/></div>
      
      <div className='flex flex-col gap-5 px-4 py-3 overflow-auto'>
        <TopNav/>
        
        <div className='  overflow-auto'>
          <Outlet/>
        </div>
        </div>

    </div>
  )
}

export default DashBoardLayout
