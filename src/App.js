import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom'
import ChatPage from './Components/ChatPage';
import HomePage from './Components/HomePage';

console.log("app file ran");

function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage} />
      <Route path='/chats' component={ChatPage} />
      <h1>hello</h1>
    </div>
  );
}

export default App;
