 import './styles/App.css'
 import Sidebar from './components/Sidebar.js';
 import Chat from './components/Chat.js';
 import SendMessageForm from './components/SendMessageForm';
 import Auth from './components/Auth.js';
 import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
 import messageData from './utils/messageData.js';
 import usersData from './utils/usersData.js';
 import {useState, useEffect} from 'react';

function App() {
  const [messages, setMessages] = useState();
  const [floodMessages, setFloodMessages] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [usersInfo, setUsersInfo] = useState(usersData);
  const history = useHistory();

  

  useEffect(() => {
    if (localStorage.getItem("workMessages")) {
      setMessages(JSON.parse(localStorage.getItem("workMessages")));
    }
    else {
      setMessages([])
    }
    
    if (localStorage.getItem("floodMessages")) {
      setFloodMessages(JSON.parse(localStorage.getItem("floodMessages")));
    }

    else {
      setFloodMessages([]);
    }
  }, [])

  function sendMessage(newMessage) {
    setMessages([...messages, newMessage])
    localStorage.setItem("workMessages", JSON.stringify([...messages, newMessage]));
  }
  
  function sendFloodMessage(newFloodMessage) {
    setFloodMessages([...floodMessages, newFloodMessage]);
    localStorage.setItem("floodMessages", JSON.stringify([...floodMessages, newFloodMessage]));
  }

  function handleAuthSubmit(info) {
   if (usersInfo.find(item => item.name === info.name && item.password === info.password))
    {
      setLoggedIn(true);
      history.push('/workchat');
      localStorage.setItem('userName', info.name);
    }
   else {
      return
   }

  }

  return (
    <div className="page">
      <div className="page__container">
        <Switch>
          <Route exact path='/'>
            {loggedIn ? <Redirect to='/workchat' /> : <Redirect to='/auth' />}
          </Route>

          <Route path='/workchat'>
            {loggedIn ?
              <> 
                <Sidebar />
                <Chat 
                  title='Рабочий чат'
                  messages={messages}
                />
                <SendMessageForm 
                  sendMessage={sendMessage}
                />
              </>
            :
            <Redirect to='/auth' />
            }
          </Route>

          <Route path='/floodchat'>
            {loggedIn ? 
              <>
                <Sidebar />
                <Chat 
                  title='Беседа'
                  messages={floodMessages}
                />
                <SendMessageForm
                  sendMessage={sendFloodMessage}
                />
              </>
            :
            <Redirect to='/auth' />  
            }
          </Route>
          <Route path='/auth'>
            <Auth onSubmit={handleAuthSubmit} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;