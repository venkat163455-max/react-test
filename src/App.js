
import './App.css';
import './components/Style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Streaming from './components/streaming';
import LoginHosts from './components/login-hosts';
import Broadcast from './components/broadcast';
import NavFooter from './components/nav-footer';

function App() {
  return (
    <div className="App">
     <Routes>
          <Route path='/' element = {<Home />} /> 
          <Route path='/streaming' element = {<Streaming />} />
          <Route path='/login-hosts' element = {<LoginHosts />} />
          <Route path='/broadcast' element = {<Broadcast />} /> 
          <Route path='/nav-footer' element = {<NavFooter />} /> 
     </Routes> 
    </div>
  );
}

export default App;
