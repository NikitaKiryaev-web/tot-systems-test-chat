import {useState} from 'react';
import '../styles/Auth.css';

function Auth(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      name,
      password
    });

  }

  return(
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__title">Авторизируйтесь</h1>
        <form className="auth__form" onSubmit={onSubmit}>
          <input className="auth__input" onChange={handleName} value={name} type="text" placeholder="Введите ваше имя" name="user" minLength="2" required />
          <input className="auth__input" onChange={handlePassword} value={password} type="password" placeholder="Введите пароль" name="password" minLength="2" required />
          <button className="auth__submit" type="submit">Войти</button>
        </form>
      </div>
    </div>
  )
}

export default Auth;