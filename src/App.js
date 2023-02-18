import './App.css';
import { Home } from './components.js/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components.js/Login';
import { Signup } from './components.js/Signup';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
  const [UserName, setUserName] = useState('');
  useEffect( () => {
     auth.onAuthStateChanged((user)=>{
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName('')
      }
    });
}, [])
  
  
  return (
    <>
      <Router basename='/react-firebase-auth'>
        <Routes>
          <Route exact path="/" element={<Home UserName={UserName}/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
