import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
   <ChatEngine 
      height="100vh"
      projectID="6087e035-a611-4c80-8855-8f0d8ce50ee5"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps } />}       
   />
  );
}

export default App;
