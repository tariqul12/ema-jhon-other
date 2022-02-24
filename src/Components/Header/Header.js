import React from 'react';
import Logo from "./../../images/logo.png"
import { Link,NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div> 
            <div className='Header-logo'>
                <img src={Logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" style={({isActive})=>{return {color:isActive? "red":''}}}>Home</NavLink></li>
                    <li><NavLink to="/shop" style={({isActive})=>{return {color:isActive? "red":''}}}>Shop</NavLink></li>
                    <li><NavLink to="/review" style={({isActive})=>{return {color:isActive? "red":''}}}>Order Review</NavLink></li>
                    <li><NavLink to="/manage" style={({isActive})=>{return {color:isActive? "red":''}}}>Manage Inventory</NavLink></li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;