import React, { useEffect } from 'react';
import { user } from '../Join/Join';
import socketIo from 'socket.io-client';
import "./Chat.css";

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {

  const socket = socketIo(ENDPOINT, { transports: ['websocket']} );

  useEffect(() => {
    socket.on('connect', () => {
        alert("connected");
    })
  
    return () => {
      
    }
  }, [socket])
  
  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'></div>
            <div className='chatBox'></div>
            <div className='inputBox'>
                {user}
            </div>
        </div>
    </div>
  )
}

export default Chat