import '../styles/SendMessageForm.css'
import {useState} from 'react';

function SendMessageForm(props) {
  
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.sendMessage({
      name: localStorage.getItem("userName"),
      text
    });
    setText('');
  }

  return(
    <form className="send-form" onSubmit={handleSubmit}>
      <input 
        className="send-form__input" 
        value={text}
        onChange={handleChange} 
        placeholder='Поведайте всем о чем-нибудь!' 
        type="text"
       />
      <button className="send-form__submit" type="submit"></button>
    </form>
  )
}

export default SendMessageForm;