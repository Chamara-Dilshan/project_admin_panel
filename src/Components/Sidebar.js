import React from 'react'
import './Sidebar.css';
import {SidebarData} from './SidebarData'

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
        {SidebarData.map((val, key) => {
            return (            
                <li key={key}
                    className='row' 
                    id= {window.location.pathname == val.link ? "active" : ""}
                    onClick={() => {
                        window.location.pathname = val.link
                    }}
                >
                    <div id="tittle">{val.title}</div>
                </li>
            );
        
        })}
        </ul>
    </div>
  )
}

export default Sidebar
