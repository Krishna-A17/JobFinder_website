import React from 'react'
import Password from '../assets/images/svg/password.jpg'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <div>
            <section className=" py-16  bg-gradient-to-r from-black to-blue-950">
                {/* <div className=" inset-0  overflow-hidden bg-no-repeat bg-center bg-cover  " style={{ backgroundImage: `url(${bg})` }}></div> */}
                <div className="container">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-2 ">
                        <div className="relative overflow-hidden bg-white  dark:shadow-gray-800  md:rounded-l-lg lg:rounded-l-lg ">
                            <div className="p-11">

                                <h5 className="my-6 text-3xl font-bold text-center">Reset Password</h5>
                                <form className="text-left">
                                    <div className="grid grid-cols-1">
                                        <p className='text-center mb-8'>Enter your email and we will send you instructions on how to reset your password</p>
                                        <div className="mb-7 ltr:text-left rtl:text-right">
                                            <label className="font-semibold mb-4" for="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" className="form-input mt-3 rounded-md w-full" placeholder="name@example.com" />
                                        </div>

                                        <div className="mb-4">
                                            <input type="submit" className="btn bg-[#023066] hover:bg-[#d88c5a duration-300 text-white rounded-md w-full p-2" value="Send" />
                                        </div>

                                        <div className="text-center">
                                            <Link to='/Login' className="text-slate-400 me-2 ">Remember your password ? </Link><Link to='/Login' className="text-black font-bold">Login</Link>
                                        </div>
                                    </div>
                                </form>

                            </div>


                        </div>
                        {/* ======image============== */}
                        <div className="signup-image sm:bg-none bg-white md:rounded-r-lg lg:rounded-r-lg">
                            <img className="   overflow-hidden h-[550px] w-full " src={Password} alt="" />
                        </div>




                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword
