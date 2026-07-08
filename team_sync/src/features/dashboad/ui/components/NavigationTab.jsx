import React from 'react'
import {UserRound} from 'lucide-react'
import {NavLink} from 'react-router'
const NavigationTab = ({path,title,Icon}) => {
  return (
    

 
      <NavLink  className={({isActive}) =>  ` flex gap-5 px-5 ${
        isActive
        ? "border-r-4 border-[var(--text-primary)] bg-[var(--text-muted)]"
        : ""
      }`
    }
       to={path}
       end = '/'>
        <Icon size={23}/>
        <span>{title}</span>
      </NavLink>
    
  )
}

export default NavigationTab
