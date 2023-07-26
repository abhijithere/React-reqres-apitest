import React from 'react'
import { removecookieweb } from '../Authentication/RemoveCookie.js'

function Logout() {
   
    const logouthandeller = ()=>{
        removecookieweb();
        window.location.reload();
    }
 

  return (
    <div className='fixed  right-10 bottom-10 cursor-pointer max-[430px]:right-5 max-[430px]:bottom-6 ' onClick={logouthandeller}>
      <img src='./img/logout.png' className='h-12 '></img>
    </div>
  )
}

export default Logout
