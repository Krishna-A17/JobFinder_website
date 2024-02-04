import React from 'react'

import Google from "../assets/images/company/google-logo.png";
import android from "../assets/images/company/android.png";

import fb from '../assets/images/company/facebook-logo.png'
import spotify from "../assets/images/company/spotify.png";
import Linkdin from "../assets/images/company/linkedin.png";
import meta from "../assets/images/company/meta.png";
import { ArrowForward } from '@mui/icons-material'
import img1 from '../assets/images/svg/best.jpg'
import img2 from '../assets/images/svg/best2.jpg'
const Companies_two = () => {
  return (
    <div className=" py-6  w-full  overflow-hidden">
      <div className="container  rounded-3xl py-11 bg-[#cdebff]/40 grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1"  data-aos="fade-left" 
                    
                    data-aos-easing="ease-in-sine">
          <div className="relative">
            <div className="relative flex justify-end">
              <img src={img2} className="lg:w-[400px] w-[280px] rounded-md shadow " alt="" />
            
            </div>
            <div className="absolute md:-start-5 start-0 -bottom-16">
              <img src={img1} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow " alt="" />
            </div>
          </div>
        </div>

          <div className="lg:col-span-7 md:col-span-6 pt-14 md:pt-0 md:order-1 order-2" data-aos="fade-right"
                    
                    data-aos-easing="ease-in-sine">
            <div className="lg:me-5">
              <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-bold text-[#1D87F0] ">Find Best Companies.</h3>

              <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                <div className="p-3 rounded shadow-md  bg-slate-50 ">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white  shadow  rounded-md">
                      <img src={spotify} className="h-8 w-8" alt="" />
                    </div>

                    <div className="ms-3">
                      <a href="#." className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500">Spotify</a>
                      <span className="block text-sm text-[#023066]">5 Vacancy</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded shadow-md  bg-slate-50 ">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white  shadow  rounded-md">
                      <img src={fb} className="h-8 w-8" alt="" />
                    </div>

                    <div className="ms-3">
                      <a href="#." className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500">Facebook</a>
                      <span className="block text-sm text-[#023066]">5 Vacancy</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded shadow-md  bg-slate-50 ">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white  shadow  rounded-md">
                      <img src={Google} className="h-8 w-8" alt="" />
                    </div>

                    <div className="ms-3">
                      <a href="#." className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500">Google</a>
                      <span className="block text-sm text-[#023066]">5 Vacancy</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded shadow-md  bg-slate-50 ">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white  shadow  rounded-md">
                      <img src={android} className="h-8 w-8" alt="" />
                    </div>

                    <div className="ms-3">
                      <a href="#." className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500">Android</a>
                      <span className="block text-sm text-[#023066]">5 Vacancy</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded shadow-md  bg-slate-50 ">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white  shadow  rounded-md">
                      <img src={meta} className="h-8 w-8" alt="" />
                    </div>

                    <div className="ms-3">
                      <a href="#." className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500">Meta</a>
                      <span className="block text-sm text-[#023066]">5 Vacancy</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded shadow-md  bg-slate-50 ">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-white  shadow  rounded-md">
                      <img src={Linkdin} className="h-8 w-8" alt="" />
                    </div>

                    <div className="ms-3">
                      <a href="#." className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500">Linkedin</a>
                      <span className="block text-sm text-[#023066]">5 Vacancy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                <div className="md:col-span-12">
                  <a href="/JobSearch" className="btn btn-link text-slate-400 hover:text-[#023066] after:bg-[#023066] duration-500 ease-in-out">See More Companies <ArrowForward style={{ fontSize: "20px" }} /> </a>
                </div>
              </div>
            </div>
          </div>
      
      </div>
    </div>

  )
}

export default Companies_two
