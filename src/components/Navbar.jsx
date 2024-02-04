import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Person, Menu, KeyboardArrowDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import p1 from '../assets/images/svg/profile.avif'
// import { useNavigate } from "react-router-dom"



const Navbar = () => {
  // const navigate = useNavigate();

  const [show, setShow] = useState(false);
  return (
    <header >

      <nav className=''>
        <section className='container bg-white '>
          <div className='  flex flex-wrap items-center md:justify-between  w-full justify-start'>
            <div className="logo">
              <img src={logo} className='xs:w-[200px]  md:w-[180px] w-[150px]  sm:w-[60px] p-3' alt="" />
            </div>
            <div className="menu ">
              <ul className='text-[#023066] flex gap-x-[1.5rem]  md:gap-x-10 font-medium   items-center  md:text-lg  '>
                <li className='hover:text-orange-400 duration-300'><Person className='mb-1.5' />
                  <Link to="/Signup"  >&nbsp;Sign-Up</Link>
                </li>
                <li className='hover:text-orange-400 duration-300'><Person className='mb-1.5' />
                  <Link to="/Login"  >&nbsp;Login</Link>
                </li>
                

                <li className=' cursor-pointer  bg-[#023066] hover:bg-orange-400 md:p-1 p-1 text-center rounded-md   text-white  duration-300'>
                  <Link to="/Post-Job"  className='text-sm md:text-lg '>Post Job</Link>
                </li>
                <li>
                  <Link to="/UserProfile"><img className='bg-[#023066] text-white p-[1.5px] rounded-full  hover:bg-orange-400 duration-[0.5s] h-11' src={p1} alt="" /></Link>
                </li>

                {/* <li className='grid grid-cols-1  text-center  place-items-center   '><button onClick={() => navigate("/Post-Job")}

                  className=" absolute btn p-3  font-bold text-lg cursor-pointer  bg-[#023066] hover:bg-[#A5CF38]   text-white  duration-300"
                  value="Post a Job"
                >Post a job</button>
                </li> */}

              </ul>

            </div>
          </div>
        </section>






















        <div className="menu-bar  bg-[#F2F0FD]   w-full shadow-lg   ">
          <ul className='container hidden md:flex flex-wrap   w-full  items-center justify-evenly  py-5 text-lg font-[645] text-blue-800'>

            {/* ===================================== */}
            {/* <li className='group relative cursor-pointer   hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg'>
              <li   >Home<KeyboardArrowDown /></li>
              <ul className="invisible absolute z-50 flex w-[120px] flex-col bg-gray-100 py-1 px-1 text-gray-800 shadow-xl group-hover:visible duration-300 ">
              <Link to='/' className="my-1 block border-b  py-1 font-semibold text-[#023066]  hover:bg-[#023066] hover:text-white px-2   rounded-lg">
                  Home one</Link>
                <Link to="/Home2"
                  className="my-1 block border-b py-1 font-semibold text-[#023066] hover:bg-[#023066] hover:text-white px-2  rounded-lg"
                >Home Two</Link>


               


              </ul>
            </li> */}


            {/* ===================================== */}
            <li className='group relative cursor-pointer   hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg'>
             

              <Link to='/'>
                  Home one</Link>
    
            </li>

            <li className='group relative cursor-pointer   hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg'>
             

             <Link to='/Home2'>
                 Home two</Link>
   
           </li>

            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Jobsearch">Job-Search <span class="submenu-arrow"></span></Link>
              {/* <ul class="submenu">
                <li><a href="#." class="sub-menu-item">Post Job</a></li>
                
              </ul> */}

            </li>
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Training">Training/Support</Link>
            </li>
            {/* <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Sponshirship">Sponshirship</Link>
            </li>
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Visa">Visa Tracker</Link>
            </li> */}
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Abroad">Abroad Study</Link>
            </li>
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Resume_Search">Resume Search</Link>
            </li>
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Forum">Forum</Link>
            </li>
            {/* <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Referal">Referal</Link>
            </li> */}
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Companies">Companies</Link>
            </li>
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Blog">Blog</Link>
            </li>
            <li className='  hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg '>
              <Link to="/Pricing">Pricing</Link>
            </li>

          </ul>

          <button onClick={() => setShow(!show)} className=' md:hidden py-3 px-4 mx-2 rounded hover:text-gray-500 group  '>
            <Menu />
            {show ?
              <div className=" text-center " >
                <ul className='flex flex-col text-center w-full max-h-screen  text-lg font-[645] text-[#023066] '>
                  {/* <li className='group relative cursor-pointer   hover:bg-[#023066]  hover:text-white p-2 duration-[0.3s] rounded-lg'>
                    <li className='group'>Home<KeyboardArrowDown /></li>
                    <ul className="invisible absolute z-50 flex w-[120px] flex-col bg-gray-100 py-1 px-1 text-gray-800 shadow-xl group-hover:visible duration-300 ">
                      <Link to="/"
                        className="my-1 block border-b py-1 font-semibold text-[#023066] hover:bg-[#023066] hover:text-white px-2  rounded-lg"
                      >Home One</Link>


                      <Link to='/Home2' className="my-1 block border-b  py-1 font-semibold text-[#023066]  hover:bg-[#023066] hover:text-white px-2   rounded-lg">
                        Home Two</Link>


                    </ul>
                  </li> */}
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/" >Home1</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Home2">Home2</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Jobsearch" >Job-Search</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Training">Training/Support</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Sponshirship">Sponshirship</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Visa">Visa Tracker</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Abroad">Abroad Study</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Resume_Search">Resume Search</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Forum">Forum</Link></li>
                  {/* <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Referal">Referal</Link></li> */}
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Companies">Companies</Link></li>
                  <li className='hover:bg-orange-400 py-4 px-6 w-full'><Link to="/Blog">Blog</Link></li>

                </ul>
              </div>
              : null}
          </button>
        </div>




      </nav>







    </header>
  )
}

export default Navbar