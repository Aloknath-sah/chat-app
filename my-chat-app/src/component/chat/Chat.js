import React, { useEffect, useState } from 'react';
import { user } from '../Join/Join';
import socketIo from 'socket.io-client';
import "./Chat.css";
import sendLogo from '../../images/send.png';

const ENDPOINT = "http://localhost:4500/";
let socket;

const Chat = () => {
  const [id, setid] = useState("");

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit('message', {message, id});
    document.getElementById('chatInput').value = "";
  }

  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ['websocket']} );
    socket.on('connect', () => {
        alert("connected");
        setid(socket.id);
    })

    socket.emit('joined', {user})

    socket.on('welcome', (data) => {
      console.log(data.user, data.message)
    })

    socket.on('userJoined', (data) => {
      console.log(data.user, data.message)
    })

    socket.on('leave', (data) => {
      console.log(data.user, data.message)
    })
  
    return () => {
      socket.emit('disconnect1');
      socket.off();
    }
  }, [])

  useEffect(() => {
    socket.on('sendMessage', (data) => {
      console.log(data.user, data.message)
    });
  
    return () => {
      
    }
  }, [])
  
  
  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'></div>
            <div className='chatBox'></div>
            <div className='inputBox'>
                <input type="text" id="chatInput" />
                <button onClick={send} className='sendBtn'>
                    <img src={sendLogo} alt="Send" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Chat