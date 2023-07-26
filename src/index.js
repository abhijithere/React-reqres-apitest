import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const server = "https://reqres.in/api";

export const Context = createContext({isAuthenticated:false});
const AppWrapper = ()=>{
  const [isAuthenticated,setIsAuthenticated]= useState(false);
  return(
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
    }}>
    <App />
    </Context.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AppWrapper/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
