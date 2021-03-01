import '../styles/Chat.css'
import {useEffect, useRef} from 'react';

function Chat(props) {

  const messagesEndRef = useRef(null);

  function scrollToBottom() {
    messagesEndRef.current.scrollIntoView({behavior: "smooth"});
  }
  
  useEffect(scrollToBottom, [props.messages]);

  return(
    <section className="chat">
      <p className="chat__title">{props.title}</p>
      <ul className="chat__message-list">
        {props.messages.map((message, index) => {
          return (
              <li className={`chat__message ${localStorage.getItem('userName') === message.name && 'chat__message_own'}`} key={index}>
                <p className="chat__message-sender">{message.name}</p>
                <p className={`chat__message-text ${localStorage.getItem('userName') === message.name && 'chat__message-text_own'}`}>{message.text}</p>
              </li>    
          )
        })}
      </ul>
      <div ref={messagesEndRef}></div>
    </section>
  )
}

export default Chat;