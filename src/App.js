import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './components/Login';

export default function App() {
   const [user, setUser] = useState();

   const getUser = (usr, pswd) => {
      console.log("ioio", usr, pswd);
   }

    return (
      <>
      <Routes>
         <Route path="/" element={<Login getUser={getUser}/>} />
         <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
   </>
  );
}
