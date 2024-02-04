import React from 'react'
import bg2 from "../../assets/b5.png";
import aws from "../../assets/images/svg/aws_icon_146074.svg";
import react from "../../assets/images/company/react.png";
import java from "../../assets/images/svg/java.png"
import nodejs from "../../assets/images/svg/nodejs.jpg"
import devops from "../../assets/images/svg/devops.avif"
import mern from '../../assets/images/svg/mern.png'
import figma from '../../assets/images/svg/figma.png'

import { Link } from 'react-router-dom';

import { Pagination, } from "@mui/material";

const Training = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0)
  };
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28    opacity-[1.5]"
          style={{ backgroundImage: `url(${bg2})` }}>
          {/* <div className="absolute inset-0 "></div> */}
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#ff853a] text-6xl font-semibold focus:ring-4">
                Training & Support
              </h1>
            </div>
          </div>
        </div>
      </section>





      {/* ============================================= */}

      <section className="relative  py-6  w-full ">
        <div className="mx-5 px-4 bg-indigo-500/10 py-6 rounded-3xl">
          <div className="grid grid-cols-1 pb-8 text-center" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"

            data-aos-offset="0">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-bold text-[#1D87F0]">Latest Courses</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea soluta repellat modi distinctio earum quibusdam repellendus possimus obcaecati neque, voluptatibus aliquam laborum totam esse ipsam nam adipisci repudiandae atque alias.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-8 gap-[20px]" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={aws} className="h-10 w-10" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">AWS</h2>

                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Cloud Developer</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div className=''>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Full Time</span>

                      <span className="text-sm font-medium inline-block me-1 ">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">
                {/* <div className="lg:inline-block flex justify-between">
                                <span className="inline-block me-1 font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified</span>
                                <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">4.8</li>
                                </ul>
                                <span className="inline-block me-1 text-slate-400"><i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>Australia</span>
                            </div> */}

                <Link to='/Course' className="btn btn-sm rounded-md bg-[#023066] hover:text-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>

            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={devops} className="h-8 w-8" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl font-bold text-[#023066] hover:text-[#023066] transition-all duration-500 me-1">Devops</h2>

                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Devops Enginner</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Part Time</span>

                      <span className="text-sm font-medium inline-block me-1">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">


                <Link to="/Course" className="btn btn-sm rounded-md bg-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>

            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={java} className="h-8 w-8" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Java</h2>
                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Backend Developer</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Remote</span>

                      <span className="text-sm font-medium inline-block me-1">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">
                {/* <div className="lg:inline-block flex justify-between">
                                <span className="inline-block me-1 font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified</span>
                                <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">4.8</li>
                                </ul>
                                <span className="inline-block me-1 text-slate-400"><i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>China</span>
                            </div> */}

                <Link to='/Course' className="btn btn-sm rounded-md bg-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>

            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={mern} className="h-8 w-8" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Mern</h2>
                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Product Designer</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Full time</span>

                      <span className="text-sm font-medium inline-block me-1">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">
                {/* <div className="lg:inline-block flex justify-between">
                                <span className="inline-block me-1 font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified</span>
                                <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">4.8</li>
                                </ul>
                                <span className="inline-block me-1 text-slate-400"><i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>Dubai</span>
                            </div> */}

                <Link to='/Course' className="rounded-md bg-[#023066]  hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>

            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={react} className="h-8 w-8" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Ract</h2>
                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">React js Developer</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Full Time</span>

                      <span className="text-sm font-medium inline-block me-1">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">
                {/* <div className="lg:inline-block flex justify-between">
                                <span className="inline-block me-1 font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified</span>
                                <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">4.8</li>
                                </ul>
                                <span className="inline-block me-1 text-slate-400"><i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>India</span>
                            </div> */}

                <Link to="/Course" className="btn btn-sm rounded-md bg-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>

            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={nodejs} className="h-8 w-8" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Nodejs</h2>
                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Nodejs Developer</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Remote</span>

                      <span className="text-sm font-medium inline-block me-1">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">


                <Link to="/Course" className="btn btn-sm rounded-md bg-[#023066]  hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>


            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={figma} className="h-10 w-10" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Figma</h2>

                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Figam Designer</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div className=''>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Full Time</span>

                      <span className="text-sm font-medium inline-block me-1 ">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">
                {/* <div className="lg:inline-block flex justify-between">
                                <span className="inline-block me-1 font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified</span>
                                <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">4.8</li>
                                </ul>
                                <span className="inline-block me-1 text-slate-400"><i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>Australia</span>
                            </div> */}

                <Link to='/Course' className="btn btn-sm rounded-md bg-[#023066] hover:text-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>


            <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                    <img src={aws} className="h-10 w-10" alt="" />
                  </div>

                  <div className="ms-3 w-full">
                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Aws</h2>

                    <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Cloud developer</h2>
                    <span className="inline-block text-sm text-slate-400 float-right">6 months</span>
                    <div className=''>
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Part Time</span>

                      <span className="text-sm font-medium inline-block me-1 ">fee:30k</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <div>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                  <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                </div>
              </div>

              <div className="px-6 py-2 bg-slate-50 lg:flex justify-between items-center">
                {/* <div className="lg:inline-block flex justify-between">
                                <span className="inline-block me-1 font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>Verified</span>
                                <ul className="list-none inline-block me-1 text-yellow-400 space-x-0.5">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">4.8</li>
                                </ul>
                                <span className="inline-block me-1 text-slate-400"><i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>Australia</span>
                            </div> */}

                <Link to='/Course' className="btn btn-sm rounded-md bg-[#023066] hover:text-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Buy Now</Link>
              </div>

              {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
            </div>
          </div>

          {/* =========================================== */}

         



          {/* ================= */}

          <div className="grid md:grid-cols-12 grid-cols-1 mt-11 ">
            <div className="md:col-span-12 text-center">
            <Pagination className="inline-flex items-center -space-x-px bg-white rounded-full p-1.5" count={15} variant="outlined"
                onChange={e =>handleChange(e.target.textContent)} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Training
