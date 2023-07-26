import React, {  useContext, useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import {  Context, server } from '..';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setcookieweb } from '../Authentication/Setcookie.js';
import { checkAuthentication } from '../Authentication/CheckAuth.js';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated,setIsAuthenticated} =useContext(Context)


  const submithandeller= async(e)=>{
    e.preventDefault();
    try {
      const {data}= await axios.post(`${server}/register`,{
        email,
        password,
      })
      toast.success("Registered successfully!");
      setcookieweb(data.token)
      console.log(data);
      setIsAuthenticated(true)
      
      
    } catch (error) {
      toast.error("Only defined users can register");
      setIsAuthenticated(false)
      

    }


  }

  if(checkAuthentication()) return <Navigate to={"/"}/>

  return (
    <>
    <section className=" bg-gray-900">
 <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
     <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
         <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
             <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-3xl text-white text-center mb-10">
                 Sign up
             </h1>
             <form className="space-y-4 md:space-y-6 " onSubmit={submithandeller}>
                 <div >
                
                     <input type="email" name="email" id="email" className=" border  sm:text-sm rounded-lg   block w-full p-3  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 " placeholder="enter email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} required=""></input>
                 </div>
                 <div>
                     
                     <input type="password" name="password" id="password" placeholder="password" className="border   sm:text-sm rounded-lg   block w-full p-3  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 " required="" value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                 </div>
                 <div className="flex items-center justify-between pt-4">
                     <div className="flex items-start">
                         <div className="flex items-center h-5">
                           <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border  rounded  focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required=""></input>
                         </div>
                         <div className="ml-3 text-sm">
                           <label for="remember" className=" text-gray-300">Remember me</label>
                         </div>
                     </div>
                     <a href="/login" className="text-sm font-medium  hover:underline text-teal-500">Forgot password?</a>
                 </div>
                 <button type='submit' className="w-full text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800">Sign up</button>
                 <p className="text-sm font-light  text-gray-400">
                     Don’t have an account ? <NavLink to={"/login"} className="font-medium  hover:underline text-teal-500">Log in</NavLink>
                 </p>
             </form>
         </div>
     </div>
 </div>
</section>
   </>
  )
}

export default Register
