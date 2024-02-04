import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar flex flex-col w-[280px]  shadow  my-5 mx-3">
    
        <ul className=' text-center text-lg px-1 text-white font-semibold'>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '> My Profile</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '> My Applications</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>   Request Empanelment/Sponsorship</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>   Training Enquiry</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>   Project Support Enquiry</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>  Visa & Attorney Queries</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>  Matching Jobs</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>   Saved Jobs</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>   Change Password</Link>
            </li>
            <li className=' bg-[#023066] hover:bg-[#A5CF38] duration-300 p-4 border'>
                <Link  className='btn '>    LogOut</Link>
            </li>
        </ul>
    
      </div>
    </div>
  )
}

export default Sidebar
