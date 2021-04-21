import React from 'react'
import './SidebarOption.css'

function SidebarOption({Icon, text, active}) {
          return (
                    <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
                             <Icon/>
                             <p>{text}</p> 
                    </div>
          )
}

export default SidebarOption
