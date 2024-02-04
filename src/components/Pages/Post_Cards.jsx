import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/svg/jobsearch.jpg'
import img2 from '../../assets/images/svg/abroad.jpg'
import img3 from '../../assets/images/svg/findjob.jpg'

const Post_Cards = () => {
    return (
        <div className='cards my-6'>
        <div  className="container  bg-fuchsia-400/10 rounded-3xl py-6">
            <h1 data-aos="flip-down"
              data-aos-easing="ease-in-sine" className='text-center text-3xl font-bold text-[#1D87F0] py-3'>Let us help you get started</h1>
            <div data-aos="fade-up" data-aos-delay="100"
              data-aos-easing="ease-in-sine" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px] px-9 py-6 text-center place-items-center">
                <div className='relative overflow-hidden cursor-pointer hover:shadow-xl hover:-mt-2 duration-300  h-fit w-fit bg-white  rounded-md shadow shadow-gray-700 '>
                    <div className="relative overflow-hidden grid place-items-center">
                        <img src={img1} className="h-[200px] w-full object-cover " alt="" />
                    </div>
                    <div className="relative p-6  ">

                        <h2 className='text-lg font-bold text-[#023066]'>Are You Looking for a Job?</h2>
                        <p className="text-slate-400">Search jobs based  on your intrest and skills.</p>

                        <div className="mt-8">
                       <Link to="/Jobs" className='bg-[#023066] hover:bg-[#A5CF38] text-white font-semibold rounded-md duration-300 p-2 '>Find a Job</Link>
                       </div>
                    </div>

                </div>

                {/* ========================================================================== */}
                <div  className='relative overflow-hidden cursor-pointer hover:shadow-xl hover:-mt-2 duration-300  h-fit w-fit bg-white  rounded-md shadow shadow-gray-700 '>
                    <div className="relative overflow-hidden grid place-items-center">
                        <img src={img3} className="h-[200px] w-full object-cover " alt="" />
                    </div>
                    <div className="relative p-6  ">

                        <h2 className='text-lg font-bold text-[#023066]'>Employers Looking to Post a Job?</h2>
                        <p className="text-slate-400">Post jobs and find best candidates .</p>

                        <div className="mt-8">
                       <Link to="/Post-Job" className='bg-[#023066] hover:bg-[#A5CF38] text-white font-semibold rounded-md duration-300 p-2 '>Post Job</Link>
                       </div>
                    </div>

                </div>

                {/* ================================================================================ */}

                <div className='relative overflow-hidden cursor-pointer hover:shadow-xl hover:-mt-2 duration-300  h-fit w-fit  bg-white  rounded-md shadow shadow-gray-700 '>
                    <div className="relative overflow-hidden grid place-items-center">
                        <img src={img2} className="h-[200px] w-full object-cover " alt="" />
                    </div>
                    <div className="relative p-6   ">

                        <h2 className='text-lg font-bold text-[#023066]'>Are You Looking to Study abroad?</h2>
                        <p className="text-slate-400">Search best colleges all over the world .</p>

                       <div className="mt-8">
                       <Link to="/Abroad" className='bg-[#023066] hover:bg-[#A5CF38] text-white font-semibold rounded-md duration-300 p-2 '>Study Abroad</Link>
                       </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Post_Cards
