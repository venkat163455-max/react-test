import React from 'react'
import './chat.css';

const Chat = () => {
  return (
    <div>
        <h4 className="text-center lgntxthd mb-2">CHAT</h4>
         <div className="chat-container">
          <div className="chat-box">
            <div className="d-flex flex-column align-items-start">
              <div className="user-name">Alice</div>
              <div className="chat-bubble chat-left">Hey Bob, how's it going?</div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <div className="user-name">Bob</div>
              <div className="chat-bubble chat-right">Hi Alice! I'm good, how about you?</div>
            </div>

            <div className="d-flex flex-column align-items-start">
              <div className="user-name">Alice</div>
              <div className="chat-bubble chat-left">Doing well! Want to catch up later?</div>
            </div>

            <div className="d-flex flex-column align-items-end">
              <div className="user-name">Bob</div>
              <div className="chat-bubble chat-right">Sure! How about 5 PM?</div>
            </div>

            <div className="d-flex flex-column align-items-start">
              <div className="user-name">Alice</div>
              <div className="chat-bubble chat-left">Doing well! Want to catch up later?</div>
            </div>

            <div className="d-flex flex-column align-items-end">
              <div className="user-name">Bob</div>
              <div className="chat-bubble chat-right">Sure! How about 5 PM?</div>
            </div>

            <div className="d-flex flex-column align-items-start">
              <div className="user-name">Alice</div>
              <div className="chat-bubble chat-left">Doing well! Want to catch up later?</div>
            </div>

            <div className="d-flex flex-column align-items-end">
              <div className="user-name">Bob</div>
              <div className="chat-bubble chat-right">Sure! How about 5 PM?</div>
            </div>
          </div>

          <div className="chat-input-section">
            <div className="input-wrapper">
              <input type="text" className="form-control" placeholder="Type your message..." />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Chat
