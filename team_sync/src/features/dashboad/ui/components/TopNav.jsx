import { Bell, Lightbulb, Menu, Moon, Search } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice'


const TopNav = () => {
    let mode = useSelector((store)=>store.theme.mode)
     let dispatch = useDispatch()

  let handleThemeChange = ()=>{
    dispatch(toggleTheme())
  }
    return (
        <div className='flex justify-between'>
            <div className='flex gap-1 border-2 w-[30%] rounded-2xl  px-2 py-1'>
                <Search />
                <input className='outline-0 w-full'
                 type="text" placeholder='Search workspace...'/>
            </div>
            <div className='flex gap-5'>

                {mode === 'light' ? (
                    <Moon onClick={handleThemeChange}/>
                ): (
                <Lightbulb onClick={handleThemeChange}/>
                )}
                <Bell />
                <Menu />
            </div>
        </div>
    )
}

export default TopNav
