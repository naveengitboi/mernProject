import {React, useState} from "react";

const Signup = ()=> {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [passErrorMsg, setPassErrorMsg]= useState('')
    const [nameErrorMsg, setNameErrorMsg]= useState('')
    const [emailErrorMsg, setEmailErrorMsg]= useState('')

    function collectData(){
        console.log(name, email, password)
    }

    const varifyData = () => {
        if(name == '' && email == '' && password == ''){
           setNameErrorMsg(prev => prev = '*Required')
           setEmailErrorMsg(prev => prev = '*Required')
           setPassErrorMsg(prev => prev = '*Required')
        }
        else if(name == '' && email != '' && password != '') {
            setNameErrorMsg(prev => prev = '*Required')
            setEmailErrorMsg(prev => prev = '')
            setPassErrorMsg(prev => prev = '')
        }
          else if(name != '' && email == '' && password != '') {
            setEmailErrorMsg(prev => prev = '*Required')
            setNameErrorMsg(prev => prev = '')
            setPassErrorMsg(prev => prev = '')
        }
          else if(name != '' && email != '' && password == '') {
            setPassErrorMsg(prev => prev = '*Required')
            setEmailErrorMsg(prev => prev = '')
            setNameErrorMsg(prev => prev = '')
        }
        else if(name != '' && email != '' && password != ''){
            setNameErrorMsg(prev => prev = '')
            setEmailErrorMsg(prev => prev = '')
            setPassErrorMsg(prev => prev = '')
            collectData()
        }
    }

    return(
        <>
            <div className="page">
                <div className="form">
                    <input type="text" value={name} 
                    onChange= {(e)=> setName((prev) => prev = e.target.value)} placeholder="Name" />
                    <p className="errorMsg">{nameErrorMsg}</p>

                    <input type="email" value={email} 
                    onChange= {(e)=> setEmail((prev) => prev = e.target.value)}  placeholder="email" />
                    <p className="errorMsg">{emailErrorMsg}</p>

                    <input type="password" value={password} 
                    onChange= {(e)=> setPassword((prev) => prev = e.target.value)}  placeholder="password" />
                    <p className="errorMsg">{passErrorMsg}</p>
                    <button className="btn" onClick={varifyData} >Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Signup