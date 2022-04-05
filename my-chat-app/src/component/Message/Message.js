import React from 'react';
import './Message.css';

const Message = ({user4, message, classs}) => {
    console.log(classs)
    if(user4) {
        return (
          <div className={`messageBox ${classs}`}>
              {`${user4}: ${message}`}
          </div>
        )
    }
    else {
        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
          )
    }
}

export default Message