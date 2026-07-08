import React from 'react'
import { NavLink } from 'react-router'
import NavigationTab from './NavigationTab'
import { useSelector } from 'react-redux'
import { adminNavigation, employeeNavigation } from '../../../../app/constant/navigation'

const AsideNav = () => {

  let {employee} = useSelector((store)=>store.auth)

  let navigation = employee?.role === "admin" ? adminNavigation : employeeNavigation
  return (
    <div>
      <div className='flex flex-col items-center px-4 py-2'>
        <h1 className="text-4xl text-[var(--primary)]">team-sync</h1>
        <p className='text-sm py-1'>Enterprise Workspace</p>
      </div>

      <div className='flex flex-col gap-3'>
      {navigation.map((route)=>{
        return(
          <NavigationTab
          key={route.path}
          path = {route.path}
          Icon = {route.Icon}
          title = {route.title}
          />
        )
      })}
      </div>
    </div>
  )
}

export default AsideNav
