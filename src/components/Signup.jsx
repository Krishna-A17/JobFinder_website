import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signup from '../assets/images/svg/signup.jpg'
// import bg from '../assets/signin_signup/signin.jpeg'
import './Pages/tailwind.min.css'

const Signup = () => {
  const [action, setAction] = useState("")
  return (
    <div>
      <section className=" py-11  bg-gradient-to-r from-black to-blue-950">
        {/* <div className=" inset-0  overflow-hidden bg-no-repeat bg-center bg-cover  " style={{ backgroundImage: `url(${bg})` }}></div> */}
        <div className="container">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-2 ">
            <div className="relative overflow-hidden bg-white  dark:shadow-gray-800  md:rounded-l-lg lg:rounded-l-lg ">
              <div className="p-6">


                <div className="justify-center gap-5 my-6">
                  <h5 className=" text-4xl text-[#023066] font-bold text-center">{action}</h5>
                  <h5 className=" text-4xl text-[#023066] font-bold text-center">Signup</h5>
                </div>

                <ul className='justify-center flex text-white font-semibold gap-8  mb-4'>
                  <button className={action === 'JobSeeker' ? "submit activebtn" : "submit"} onClick={() => { setAction("Job Seeker ") }}>Job Seeker</button>
                  <button className={action === 'Employer' ? "submit activebtn" : "submit"} onClick={() => { setAction("Employer ") }}>Employer</button>
                  <button className={action === 'Trainer' ? "submit activebtn" : "submit"} onClick={() => { setAction("Trainer ") }}>Trainer</button>
                </ul>

                <form action="" className="text-left">
                  <div className="grid grid-cols-1">
                    <div className="mb-4 ">
                      <label className="font-semibold" for="RegisterName">Your Name:</label>
                      <input id="RegisterName" type="text" className="form-input mt-3 rounded-md w-full" placeholder="Name" />
                    </div>

                    <div className="mb-4 ">
                      <label className="font-semibold" for="LoginEmail">Email Address:</label>
                      <input id="LoginEmail" type="email" className="form-input mt-3 rounded-md w-full" placeholder="mail@mail.com" />
                    </div>

                    <div className="mb-4 ">
                      <label className="font-semibold" for="LoginPassword">Password:</label>
                      <input id="LoginPassword" type="password" className="form-input mt-3 rounded-md w-full" placeholder="Password" />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-0">
                        <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Accept:T&C" />
                        <label className="form-checkbox-label text-slate-400" for="Accept:T&C">I Accept <a href="." className="text-emerald-600">Terms And Condition</a></label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <input type="submit" className="btn bg-[#023066] hover:bg-[#d88c5a] duration-300 text-white rounded-md w-full p-2" value="Register" />
                    </div>

                    <div className="text-center">
                      <span className="text-slate-400 me-2">Already have an account ? </span> <Link to="/Login" className="text-black font-bold">Sign in</Link>
                    </div>
                  </div>
                </form>
              </div>


            </div>
            {/* ======image============== */}
            <div className="signup-image sm:bg-none bg-white  md:rounded-r-lg lg:rounded-r-lg ">
              <img className=" overflow-hidden h-[600px] " src={signup} alt="" />
            </div>



          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
