import React, { useEffect, useState } from 'react'
import {  server } from '../index'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { checkAuthentication } from '../Authentication/CheckAuth.js';
import Logout from './Logout';
import { toast } from 'react-toastify';

function Home() {
  const [user, setuser] = useState([]);
  const [page,setpage]=useState(1)

  const btns = new Array(2).fill(1);

  const changepage=(page)=>{
    setpage(page);
  }

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const { data } = await axios.get(`${server}/users?page=${page}`)
        setuser(data.data);

      } catch (error) {
        toast.error("server error")
      }
    }

    fetchusers();

  }, [page]);

  if(!checkAuthentication()) return <Navigate to={"/login"}/>

  return (
    <div className='flex flex-col justify-center items-center mt-16'>
    <div className=' bg-gray-900 text-white  grid grid-cols-3 gap-8 max-[950px]:grid-cols-2 max-[637px]:grid-cols-1 max-[420px]:gap-5'>
      {
        user.map((i) => {
          return (
            <Link  to={`/user/${i.id}`} className='h-72 w-72 bg-gray-800 rounded-xl shadow-lg flex flex-col  justify-center items-center font-poppin cursor-pointer border-[1px] border-gray-700 hover:border-[2px] hover:border-teal-500 transition-all   duration-200 hover:bg-gray-900' id={i.id}>
              <img src={i.avatar} className='h-40 rounded-full'/>
              <h className='mt-5 text-lg text-teal-500'>{i.first_name}</h>
              <h className='text-sm text-gray-400'>{i.email}</h>
            </Link>
          )
        })
      }
    </div>
    <div className='mt-12 pb-12 flex gap-4'>
      {
        btns.map((item,index)=>{
          return (
            <button className='text-white rounded-lg  h-10 w-10 bg-teal-600' key={index} onClick={() => changepage(index + 1)}>
              {index+1}
            </button>
          )
        })
      }

    </div>
    <Logout/>
    </div>
  )
}


export default Home
