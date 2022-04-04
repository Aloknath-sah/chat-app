import React from 'react';
import './Join.css';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

const Join = () => {
  return (
    <div>
      <div className='JoinPage'>
        <div className='JoinContainer'>
          <img src={logo} alt="logo" />
          <h1>Join Page</h1>
          <input type="text" id="joinInput" />
          <Link to="/chat">
            <button className='JoinBtn' >Log in</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Join