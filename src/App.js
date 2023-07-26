import Login from "./Components/Login";
import Register from './Components/Register';
import Home from './Components/Home';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import UserDetails from "./Components/UserDetails";


function App() {

  return (
          <Router>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/user/:id" element={ <UserDetails/>} />
            </Routes>
            <ToastContainer/>
          </Router>
  );
}

export default App;
