import React from 'react';
import './Chat.scss';
import chat from '../../assets/Icons/Frame 2.svg'

const Chat = () => {
    return (
        <div className='chat-container'>
            <img src={chat}/>
            <p>
                ASK PDE
            </p>
        </div>
    );
};

export default Chat;