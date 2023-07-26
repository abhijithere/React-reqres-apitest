import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { server } from '../index';
import axios from 'axios';
import Loader from './Loader';
import { checkAuthentication } from '../Authentication/CheckAuth.js';
import { toast } from 'react-toastify';

function UserDetails() {
    const [User, setUser] = useState([]);
    const [loading,setloading]=useState(true);
    const params = useParams()

    useEffect(() => {
       
        const fetchuserDetails = async ()=>{
            try {
                const {data} = await axios.get(`${server}/users/${params.id}`)
                setUser(data)
                setloading(false)
                
            } catch (error) {
                toast.error("server error!")  
                setloading(false)
            }
        }
        fetchuserDetails();

    },[params.id,User]);

 if(!checkAuthentication()) return <Navigate to={"/login"}/>


  return (
    <div className='text-white flex justify-center items-center h-screen'>
        {
            loading?<Loader/>: 
            <div className='w-[80%] h-[70%]  flex justify-center items-center gap-32 border-[2px] rounded-2xl border-teal-500 max-[1100px]:flex-col max-[1100px]:h-[90%] max-[1100px]:gap-14 max-[550px]:w-[90%] max-[400px]:h-[60%]'>
                 <img src={User.data.avatar} className='h-[60%] rounded-full max-[1100px]:h-[50%] max-[550px]:h-[30%] max-[400px]:h-[20%]'></img>

                <div  className='flex flex-col gap-7 min-[400px]:w-96 text-center '>
                <h1 className='text-6xl max-[430px]:text-4xl'>{User.data.first_name} <span className='text-teal-500'>{User.data.last_name}</span> </h1>
               <h1 className='text-xl text-slate-300'>{User.data.email}</h1> 
                </div>
            </div>
        }
       
    </div>
  )
}

export default UserDetails
