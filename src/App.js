import logo from './logo.svg';
import './App.css';
import Chat from './components/chat.js';
import Home from './components/home';
import {Routes,Route, Link} from 'react-router-dom'

function App() {
  return (
    
    <div>
    <Routes>
      <Route path='/chat/:id' element={<Chat/>}></Route>
      <Route path='/' element={<Home/>}></Route>

    </Routes>
    {/* <Chat email={'asad@gmail.com'}></Chat> */}


    </div>
  );
}

export default App;
