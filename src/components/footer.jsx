import { Copyright } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'



const footer = () => {



  return (
    <footer className=" footer-main ">

      <div className="footer bg-[#2c3035] py-16  text-white">
        <div className="grid md:grid-cols-5 justify-between px-12 gap-3 text-md font-[450]  md:mx-24" >

          <div className="footer-col md:px-16   col-span-2 ">
            <h4 className='text-[21px] font-bold pb-2   text-[#A5CF38]'>About Us</h4>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipiscing, Quisque lobortis elit. Lorem ipsum dolor sit amet, consectetur adipiscing, Quisque lobortis elit.Lorem ipsum dolor sit amet, consectetur adipiscing, Quisque lobortis elit.Lorem ipsum dolor sit amet, consectetur adipiscing, Quisque lobortis elit
            </p>
          </div>
          <div className="footer-col">
            <h4 className='text-[21px] font-bold pb-2  text-[#A5CF38]'>Quick Links</h4>
            <ul >
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/JobSearch">Search jobs</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/JobSearch">Jobs by Category</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/JobSearch">Jobs by location</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/Companies">Listed Companies</Link></li>
            </ul>
          </div>
          <div className="footer-col col-span-[0.7]">
            <h4 className='text-[21px] font-bold pb-2   text-[#A5CF38]'>Employers</h4>
            <ul >
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/Pricing">Pricing Plans</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/Signup">Create Account</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/Post-Job">Post a Job</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="#">Contact-us</Link></li>

            </ul>
          </div>
          <div className="footer-col">
            <h4 className='text-[21px] font-bold pb-2  text-[#A5CF38]'>Job Seekers</h4>
            <ul>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/Signup">Create Account</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/JobSearch">Matching Jobs</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="/JobSearch">Apply for Jobs</Link></li>
              <li className='pb-1 hover:text-orange-500 hover:font-bold hover:ml-1 duration-[0.3s]'><Link to="#">Applied Jobs</Link></li>
            </ul>
          </div>

        </div>
        

      </div>
      <div className='grid md:grid-cols-2 place-items-center p-5 bg-[#252323] text-white'>
          <div className='flex flex-wrap cursor-pointer'>


            <p><Copyright /> Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>


    </footer>
  )
}

export default footer