import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
    
    
    const Sidebar = ({children}) => {
        const[isOpen ,setIsOpen] = useState(false);
        const toggle = () => setIsOpen (!isOpen);
        const menuItem=[
            {
                name: "Home",
                path: "/home"
            },
    
            {
                name: "Users",
                path: "/users"
            },
        
            {
                name: "Teams",
                path: "/teams"
            },
        
            {
                name: "Projects",
                path: "/projects"
            },
        
            {
                name: "Clients",
                path: "/clients"
            },
        ]
        return (
            <div className="container">
               <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                   <div className="top_section">
                       <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                       <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                           <FaBars onClick={toggle}/>
                       </div>
                   </div>
                   {
                       menuItem.map((item, index)=>(
                           <NavLink to={item.path} key={index} className="link" activeclassName="active">
                               {/* <div className="icon">{item.icon}</div> */}
                               <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                           </NavLink>
                       ))
                   }
               </div>
               <main>{children}</main>
            </div>
        );
    };
    
    export default Sidebar;
