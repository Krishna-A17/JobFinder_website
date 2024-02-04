import React from 'react'
import d3 from "../assets/banners/d3.png";
import play from "../assets/images/company/Google-paly.png";
import apple from "../assets/images/company/app-store.png";
// import { PlayArrow,Apple } from '@mui/icons-material'

const Download = () => {
    return (
        <section className=''>
            <div className='download-app    bg-gradient-to-r from-black to-blue-950'>
                <div className="container  w-full">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 items-start sm:grid-cols-1">
                        <div className="download-content pt-8 col-span-2 ">
                            <h1 className='text-4xl shadow-lg font-[655] text-[#A5CF38] py-3 '>Download the Job Listing App Today!</h1>
                            <p className='text-slate-400 pt-2'>"Your Dream Job Awaits: Download Our Job Listing JOBFINDER App and Start Exploring a World of Exciting Career Opportunities. Get Instant Alerts,  Connect with Your Dream Employers, and Propel Your Career to New Heights. Download Now!"</p>
                            <div className="flex flex-wrap pt-6">
                                <img src={play} className="h-16 hover:bg-[#A5CF38] rounded-xl cursor-pointer px-1.5" alt="" />
                                <img src={apple} className="h-16 hover:bg-[#A5CF38] rounded-xl cursor-pointer px-0" alt="" />
                            </div>
                            {/* <button className='p-3 bg-black text-white rounded-lg font-semibold'><PlayArrow/>Available on  <br /><span className='text-slate-400'>Playstore</span> </button> */}
                        </div>
                        <div className="download-image  ">
                            <img src={d3} className='h-[400px]' alt="Download our app" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download
