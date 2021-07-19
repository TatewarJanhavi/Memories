import React ,{ useState} from 'react';
import './Login.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Modal1 from './Modal1'

var CryptoJS = require("crypto-js");



  const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState("");
    const [state ,setState] =useState('');
    const [text ,setText] =useState('');
      
    const history = useHistory();
     
      const Onsubmit = () =>{
    
         let url= 'http://localhost:5000/users/'+username;
         axios.get(url)
         .then(response =>  {
            CheckPassword(response.data.password,history);
         }).catch(
           resonse =>{
            setState("red");
            setText("UserName doesn't exists");
              setIsOpen(true);

           }

         )
     }

    const handleClose = ()  => { 
      setIsOpen(false)
      if(state === 'green')
        {
          history.push("/memories/"+username);
        }

      
     }
    function CheckPassword (passwrd,history) {
        var bytes = CryptoJS.AES.decrypt(passwrd, 'my-secret-key@123')
        var decryptpassword=bytes.toString(CryptoJS.enc.Utf8)
            if(password===decryptpassword)
            {setState("green");
            setText("You have Logged In  Successfully");
              setIsOpen(true);
           }
         else{
          setState("red");
          setText("Please enter correct Username and password");
            setIsOpen(true);

         }
            
     } 
    return (
      <>
        <Modal1 isOpen={isOpen} handleClose={handleClose} state={state} text={text}  ></Modal1>
     
        <div className="signup-form">
        <h2 className="fontcolor">Login</h2>
            <div className="input-group input-field" >
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
               <input id="login-username" type="text" class="form-control" required="required" name="username" placeholder="username or email" onChange={(e)=>{setUsername (e.target.value) }}></input>                                      
            </div>
                                        
               <div  className="input-group input-field">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                  <input id="login-password" type="password" required="required" class="form-control" name="password" placeholder="password" onChange={(e)=>{setPassword (e.target.value) }}></input>
                </div>
                <button  className="btn btn-success btn-lg btn-block" onClick ={Onsubmit}>Login</button>

                                           
      </div>
        </>
    )


}

export default Login;

