import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import {FaBars} from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { FaUserGear } from "react-icons/fa6";
    
    const Sidebar = ({children}) => {
        const[isOpen ,setIsOpen] = useState(false);
        const toggle = () => setIsOpen (!isOpen);
        const menuItem=[
            {
                name: "Home",
                path: "/home",
                icon: <IoIosHome/>
            },
    
            {
                name: "Users",
                path: "/users",
                icon: <FaUser/>
            },
        
            {
                name: "Teams",
                path: "/teams",
                icon: <MdGroups2/>
            },
        
            {
                name: "Projects",
                path: "/projects",
                icon: <GoProject/>
            },
        
            {
                name: "Clients",
                path: "/clients",
                icon: <FaUserGear/>
            },
        ]
        return (
            <div className="container">
               <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                   <div className="top_section">
                       <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                       <div style={{marginLeft: isOpen ? "70px" : "0px"}} className="bars">
                           <FaBars onClick={toggle}/>
                       </div>
                   </div>
                   {
                       menuItem.map((item, index)=>(
                           <NavLink to={item.path} key={index} className="link" activeclassName="active">
                               <div className="icon" style={{marginRight:'20px'}}>{item.icon}</div>
                               <div style={{display: isOpen ? "block" : "none",}} className="link_text">{item.name}</div>
                           </NavLink>
                       ))
                   }
               </div>
               <main>{children}</main>
            </div>
        );
    };
    
    export default Sidebar;
