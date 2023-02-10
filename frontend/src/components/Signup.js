import React from "react";

const Signup = ()=> {
    return(
        <>
            <div className="page">
                <div className="form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button className="btn" type="submit">Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Signup