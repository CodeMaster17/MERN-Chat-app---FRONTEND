import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom'
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';
import './App.css'

console.log("app file ran");

function App() {
  return (
    <div className="App">
      {/* importing the multiple pages */}

      <Route path='/' component={HomePage} exact />       {/* using the attribute exact to import only homepage component coz the / address is present in both the paths */}
      <Route path='/chats' component={ChatPage} />
    </div>
  );
}

export default App;
