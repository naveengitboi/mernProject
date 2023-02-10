import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <header>
                <ul>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Products</NavLink>
                    <NavLink to='/login'>Log in</NavLink>
                    <NavLink to='/signup'>Sign up</NavLink>
                </ul>
            </header>
        </>
    )
}

export default Navbar