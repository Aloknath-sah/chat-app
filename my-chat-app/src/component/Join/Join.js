import React, { useState } from 'react';
import './Join.css';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
}  

const Join = () => {
  
  const [name, setname] = useState("");

  return (
    <div>
      <div className='JoinPage'>
        <div className='JoinContainer'>
          <img src={logo} alt="logo" />
          <h1>Join Page</h1>
          <input type="text" placeholder='enter your name' onChange={(e) => setname(e.target.value)} id="joinInput" />
          <Link onClick={(event) => !name? event.preventDefault():null} to="/chat">
            <button onClick={sendUser} className='JoinBtn' >Log in</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join
export {user}