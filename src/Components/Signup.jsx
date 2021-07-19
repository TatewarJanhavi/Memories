import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Modal1 from './Modal1'


const Signup = () => {
    var CryptoJS = require("crypto-js");
    
    const [username, setUsername]=useState();
    const [isOpen, setIsOpen] = useState(false);
    const [firstname, setFirstname]=useState();
    const [lastname, setLastname]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [state ,setState] =useState('');
    const [text ,setText] =useState('');
    const history = useHistory();

    const submit = () => {
        if(password !== confirmPassword)
        {
           
            setState("red");
            setText("Confirm Password is not same as Password");
              setIsOpen(true);
        }
       else{
        var passwrodencrypt = CryptoJS.AES.encrypt(password, 'my-secret-key@123').toString();
            const user ={
             username :username,
            firstname: firstname,
            lastname:lastname,
            email :email,
            password :passwrodencrypt
        }
        axios.post('http://localhost:5000/users/add',user)
            .then(res =>console.log(res.data))
            .catch(res =>{
                setState("red");
                setText("User Already Exists");
                  setIsOpen(true);
            });
           

            setState("green");
            setText("User Created Successfully");
              setIsOpen(true);
             
     
    }
           
    }

    const handleClose = ()  => { 
        setIsOpen(false)
        if(state === 'green')
          {
            history.push("/login");
          }
  
        
       }

    return (
        <>
    <div className="signup-form">
    <Modal1 isOpen={isOpen} handleClose={handleClose} state={state} text={text}  ></Modal1>
             <h2 className="fontcolor">Register</h2>
            <p className="hint-text fontcolort">Create your account</p>

            <div className="form-group">
                <input type="text" className="form-control" name="user_name" placeholder="User Name" required="required" onChange={(e)=>{setUsername(e.target.value) }}></input>
                </div> 
             <div className="form-group">
                <input type="text" className="form-control" name="first_name" placeholder="First Name" required="required" onChange={(e)=>{setFirstname(e.target.value) }}></input>
                </div>  
                <div className="form-group">
                     <input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" onChange={(e)=>{setLastname(e.target.value) }} ></input>        	
             </div>
             <div className="form-group">
                 <input type="email" className="form-control" name="email" placeholder="Email" required="required" onChange={(e)=>{setEmail(e.target.value) }}></input>
             </div>
             <div className="form-group">
                 <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={(e)=>{setPassword(e.target.value) }}></input>
             </div>
             <div className="form-group">
                 <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" onChange={(e)=>{setConfirmPassword(e.target.value) }}></input>
             </div>        
             <button  className="btn btn-success btn-lg btn-block" onClick={submit} >Register Now</button>
  
        </div>
     </> 

    )
}

export default Signup;