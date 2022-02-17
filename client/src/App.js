import './App.css'
import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import School from './Components/School'
import Chores from './Components/Chores'
import Work from './Components/Work'
import Exercise from './Components/Exercise'
import Misc from './Components/Misc'
import Groceries from './Components/Groceries'
import Login from './Components/Login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
      fetch("/users/me").then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => setUser(user));
        }
      });
    }, []);

    if (!user) return <Login onLogin={setUser} />

  return (
   <div className="main">
      <Nav user={user} onLogout={setUser}/>
      <Routes >
        <Route path="/" element={<Home user={user} onLogin={setUser} />}/>
        <Route path="/school" element={<School/>}/>
        <Route path="/chores" element={<Chores />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/exercise" element={<Exercise />}/>
        <Route path="/misc" element={<Misc />}/>
        <Route path="/groceries" element={<Groceries />}/>
      </Routes>
     <br/><br/>
   </div>
  )
}

export default App;
