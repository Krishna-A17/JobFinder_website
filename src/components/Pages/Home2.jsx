import Category from '../../components/Category'
import React from 'react'
import Companiestwo from '../Companies_two'
import Jobstypes from '../Jobs_types'
// import amazon from "../../assets/images/company/amazon.png";
// import Google from "../../assets/images/company/google-logo.png";
// import android from "../../assets/images/company/android.png";
// import apple from "../../assets/images/company/apple.png";
// import meta from "../../assets/images/company/meta.png";
// import spotify from "../../assets/images/company/spotify.png";
// import Linkdin from "../../assets/images/company/linkedin.png";
// import reacticon from "../../assets/images/company/telegram.png";
// import Microsoft from "../../assets/images/company/Microsoft.png";
// import WhatsApp from '../../assets/images/company/whatsapp.png';
import job from '../../assets/images/svg/job.png'
import './tailwind.min.css'
import p1 from "../../assets/images/team/01.jpg";
import p2 from "../../assets/images/team/02.png";

import { AccessTime, CalendarToday, ArrowForward } from '@mui/icons-material'
import blog1 from '../../assets/images/blog/04.jpg'
import blog2 from '../../assets/images/blog/02.jpg'
import blog3 from '../../assets/images/blog/03.jpg'
import { Link } from 'react-router-dom'
import d3 from "../../assets/banners/d3.png";
import play from "../../assets/images/company/Google-paly.png";
import apple2 from "../../assets/images/company/app-store.png";
// import add from '../../assets/google_banners/200_200.png'

import PostCards from './Post_Cards'

// import Datatable from '../datatable'



const Home2 = () => {
  return (
    <div className='bg-[white] overflow-x-hidden'
    >


      <div className="home   ">
        <section className="relative py-6    ">

          {/* <div className="inset-0 absolute opacity-[0.1] "><img src={bg} alt="" /></div>  #FFF8FB */}
          
          <div className="container grid md:grid-cols-3 py-6  rounded-3xl bg-[#EDFAFE]  ">
          <div className='container absolute inset-6 rounded-3xl  md:bg-gradient-to-r from-[#1F86F9]/80 to-[#1F86F9]/60   ' style={{ WebkitClipPath: "circle(55.1% at 100% 26%)", clipPath: "circle(55.1% at 100% 26%)" }}></div>

            <div className="grid col-span-2 text-left mt-5 relative " data-aos="fade-right" data-aos-duration="800"
              data-aos-easing="ease-in-out">
              <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-1 font-bold text-[#023066] " style={{ fontFamily: "'DM Serif Text', serif" }}>
                Over 10000+ Jobs are Waiting for You
              </h4>
              <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-[#023066] " style={{ fontFamily: "'DM Serif Text', serif" }}>
                Join us &{" "}
                <span className="text-orange-400/90 font-bold ">Explore</span> <br />{" "}
                <span className="text-orange-400/90 font-bold">Thousands</span> of
                Jobs
              </h4>
              <p className="text-slate-400 font-medium text-lg max-w-xl   ">
                Find Jobs, Employment & Career Opportunities. Some of the
                companies we've helped recruit excellent applicants over the
                years.
              </p>

              <div className="d-flex " id="reserve-form ">
                <div className=" w-full">
                  <div className="lg:col-span-10 my-4">
                    <div className="bg-white border-0 shadow rounded-md p-3 ">
                      <form action="#.">
                        <div className="registration-form text-dark text-start ">
                          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 ">
                            <div className="filter-search-form relative filter-border">
                              <input
                                name="name"
                                type="text"
                                className="form-input h-[60px] pt-[13px] pb-[15px] text-[15px]  w-full filter-input-box bg-gray-50  border-0"
                                placeholder="What are you looking for"
                              />
                            </div>

                            <div className="filter-search-form relative filter-border">
                              <select
                                className="form-select h-[60px] pt-[13px] pb-[15px] text-[15px]  w-full"
                                data-trigger
                                name="choices-location"
                                id="choices-location"
                                aria-label="Default select example"
                              >
                                <option value="Hy">Hyderabad</option>
                                <option value="Ba">Banglore</option>
                                <option value="Ch">Chennai</option>
                                <option value="Dh">Delhi</option>
                                <option value="Vz">Vizag</option>
                              </select>
                            </div>

                            {/* <div className="filter-search-form relative filter-border">
                      <select
                        className="form-select h-[60px] pt-[13px] pb-[15px] text-[15px]  w-full"
                        data-trigger
                        name="choices-type"
                        id="choices-type"
                        aria-label="Default select example"
                      >
                        <option selected="" value="1">
                          Full Time
                        </option>
                        <option value="2">Part Time</option>
                        <option value="3">Freelancer</option>
                        <option value="4">Remote Work</option>
                        <option value="5">Office Work</option>
                      </select>
                    </div> */}

                            <input
                              type="submit"
                              id="search"
                              name="search"
                              style={{ height: "60px" }}
                              className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#A5CF38] hover:border-[#A5CF38] text-white searchbtn submit-btn w-100 duration-300"
                              value="Search"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* ====================================================== */}


              {/* ============================================================= */}
              <div className="my-4 sm:my-0">
                <span className="text-slate-400 font-medium">
                  <span className="text-dark">Popular Searches :</span>{" "}
                  Software Developer, UI/UX, Devops, Backend Developer.
                </span>
              </div>
              {/* <div className="">
                <div className="my-4 sm:my-0">
                  <span className="text-[#023066] font-semibold">
                    <span className="text-dark">Popular Searches :</span>{" "}
                    Software Developer, UI/UX, Devops, Backend Developer.
                  </span>
                </div>

                <div className="absolute -top-20 start-1/2 -translate-x-1/2 ">
                  <div className="w-10 h-10 animate-[bounce_2s_infinite] bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={amazon} className="h-6 w-6 " alt="" />
                  </div>
                </div>

                <div className="absolute top-32 sm:-start-1 md:start-1/4">
                  <div className="w-10 h-10 bg-white flex animate-[bounce_2s_infinite] items-center justify-center shadow  rounded-md">
                    <img src={spotify} className="h-6 w-6" alt="" />
                  </div>
                </div>

                <div className="absolute top-[7%] -start-10">
                  <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={Google} className="h-6 w-6" alt="" />
                  </div>
                </div>

                <div className="absolute top-32 end-1 md:end-1/4">
                  <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={reacticon} className="h-6 w-6" alt="" />
                  </div>
                </div>

                <div className="absolute top-[7%] -end-9">
                  <div className="w-10 h-10 animate-pulse bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={android} className="h-6 w-6" alt="" />
                  </div>
                </div>

                <div className="absolute top-72 start-1">
                  <div className="w-10 h-10 animate-pulse bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={apple} className="h-6 w-6" alt="" />
                  </div>
                </div>

                <div className="absolute top-72 end-10">
                  <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={meta} className="h-6 w-6" alt="" />
                  </div>
                </div>
                <div className="absolute -bottom-32 start-1">
                  <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={Linkdin} className="h-6 w-6" alt="" />
                  </div>
                </div>

                <div className="absolute -bottom-32 -end-3">
                  <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={Microsoft} className="h-6 w-6 " alt="" />
                  </div>
                </div>

                <div className="absolute -bottom-32 start-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 animate-pulse bg-white flex items-center justify-center shadow  rounded-md">
                    <img src={snapchat} className="h-6 w-6" alt="" />
                  </div>
                </div>
              </div> */}
            </div>

            <div className=" hidden md:block col-span-1 bg-cover bg-no-repeat"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              <img className=' h-full w-full bg-no-repeat opacity-2' src={job} alt="" />
            </div>
          </div>



        </section>
        {/* <div className="  py-6  w-full px-11 ">

          <div className="container  bg-pink-500/5 rounded-3xl py-9">
            <h1 data-aos="flip-up" data-aos-easing="ease-in-back" className=' underline underline-offset-4   text-blue-500/70 flex flex-wrap justify-center'><span className='text-2xl  font-bold  text-[#1F86F9]'>Place in your Dream Company Today!</span></h1>

            <div data-aos="zoom-in-up" data-aos-delay="100" data-aos-offset="200"
              data-aos-easing="ease-in-shine" className='grid md:grid-cols-10 sm:grid-cols-5 grid-cols-4 justify-center gap-[30px] pt-11'>
              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={Microsoft} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={android} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite]  bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={Google} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite]  bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={apple} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={reacticon} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={Linkdin} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={spotify} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={amazon} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={meta} className="h-7" alt="" />
              </div>

              <div className="w-12 h-12 animate-[bounce_3s_infinite] bg-white shadow-xl flex justify-center items-center rounded-md mx-auto py-4">
                <img src={WhatsApp} className="h-7" alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </div>







      <div className="category">
        <Category />
      </div>

      

      {/* ============================================================================== */}
{/* 
      <div className=" ">
          <Datatable />
        </div> */}

       {/* =================================================================================================== */}

      <div className="companiestwo">
        <Companiestwo />
      </div>


      {/* ============================================================================== */}
      <div className="jobtypes">
        <Jobstypes />
      </div>

      <div className="top-profiles ">
        <div className="relative py-6  w-full ">
          <section className=" container bg-emerald-400/10 rounded-3xl py-6">
            <div className="profiles  text-center p-3 " data-aos="flip-up"
              data-aos-easing="ease-in-sine">
              <h1 className="text-3xl text-[#1D87F0] font-bold">
                TOP PROFILES
              </h1>
              <p className="text-slate-500 p-2">
                Who are in Extremly Love with Eco Friendly System.
              </p>
            </div>
            <div className=" " data-aos="fade-up" data-aos-delay="100"
              data-aos-easing="ease-in-sine">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="group  hover:-mt-2  duration-500 h-fit bg-white relative overflow-hidden rounded-md shadow  text-center p-6 hover:shadow-2xl">
                  <img
                    src={p1}
                    className="h-20 w-20 rounded-full shadow  mx-auto"
                    alt=""
                  />

                  <div className="mt-2">
                    <a
                      href="."
                      className="hover:text-[#023066] font-semibold text-lg"
                    >
                      tony
                    </a>
                    <p className="text-sm text-slate-400">Web Designer</p>
                  </div>

                  <ul className="mt-2 list-none">
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UX
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UI
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        Full stack developer
                      </span>
                    </li>
                  </ul>

                  <div className="flex justify-between mt-2">
                    <div className="block">
                      <span className="text-slate-400">salary:</span>
                      <span className="block text-sm font-semibold">
                        4LPA - 5LPA
                      </span>
                    </div>
                    <div className="block">
                      <span className="text-slate-400">Experience:</span>
                      <span className="block text-sm font-semibold">
                        1 Years
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="."
                      className="btn btn-sm bg-[#023066] hover:bg-[#A5CF38]  border-[#023066] text-white rounded-md  p-[7px]"
                    >
                      View-Profile
                    </a>
                  </div>
                </div>

                <div className="group hover:-mt-2  duration-500 h-fit bg-white  relative overflow-hidden rounded-md shadow  text-center p-6 hover:shadow-2xl">
                  <img
                    src={p2}
                    className="h-20 w-20 rounded-full shadow  mx-auto"
                    alt=""
                  />

                  <div className="mt-2">
                    <a
                      href="."
                      className="hover:text-[#023066] font-semibold text-lg"
                    >
                      loki
                    </a>
                    <p className="text-sm text-slate-400">Web Designer</p>
                  </div>

                  <ul className="mt-2 list-none">
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UX
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UI
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        Full stack developer
                      </span>
                    </li>
                  </ul>

                  <div className="flex justify-between mt-2">
                    <div className="block">
                      <span className="text-slate-400">salary:</span>
                      <span className="block text-sm font-semibold">
                        4LPA - 5LPA
                      </span>
                    </div>
                    <div className="block">
                      <span className="text-slate-400">Experience:</span>
                      <span className="block text-sm font-semibold">
                        2 Years
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="."
                      className="btn btn-sm bg-[#023066] hover:bg-[#A5CF38]  border-[#023066]  text-white rounded-md p-[7px]"
                    >
                      View-Profile
                    </a>
                  </div>
                </div>

                <div className="group hover:-mt-2  duration-500 h-fit bg-white  relative overflow-hidden rounded-md shadow  text-center p-6 hover:shadow-2xl">
                  <img
                    src={p1}
                    className="h-20 w-20 rounded-full shadow  mx-auto"
                    alt=""
                  />

                  <div className="mt-2">
                    <a
                      href="."
                      className="hover:text-[#023066] font-semibold text-lg"
                    >
                      stark
                    </a>
                    <p className="text-sm text-slate-400">Web Designer</p>
                  </div>

                  <ul className="mt-2 list-none">
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UX
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UI
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        Full stack developer
                      </span>
                    </li>
                  </ul>

                  <div className="flex justify-between mt-2">
                    <div className="block">
                      <span className="text-slate-400">salary:</span>
                      <span className="block text-sm font-semibold">
                        4LPA - 5LPA
                      </span>
                    </div>
                    <div className="block">
                      <span className="text-slate-400">Experience:</span>
                      <span className="block text-sm font-semibold">
                        2 Years
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="."
                      className="btn btn-sm bg-[#023066] hover:bg-[#A5CF38]  border-[#023066]  text-white rounded-md p-[7px]"
                    >
                      View-Profile
                    </a>
                  </div>
                </div>

                <div className="group hover:-mt-2  duration-500 h-fit bg-white  relative overflow-hidden rounded-md shadow  text-center p-6 hover:shadow-2xl">
                  <img
                    src={p2}
                    className="h-20 w-20 rounded-full shadow  mx-auto"
                    alt=""
                  />

                  <div className="mt-2">
                    <a
                      href="."
                      className="hover:text-[#023066] font-semibold text-lg"
                    >
                      loki
                    </a>
                    <p className="text-sm text-slate-400">Web Designer</p>
                  </div>

                  <ul className="mt-2 list-none">
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UX
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        UI
                      </span>
                    </li>
                    <li className="inline">
                      <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full">
                        Full stack developer
                      </span>
                    </li>
                  </ul>

                  <div className="flex justify-between mt-2">
                    <div className="block">
                      <span className="text-slate-400">salary:</span>
                      <span className="block text-sm font-semibold">
                        4LPA - 5LPA
                      </span>
                    </div>
                    <div className="block">
                      <span className="text-slate-400">Experience:</span>
                      <span className="block text-sm font-semibold">
                        2 Years
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="."
                      className="btn btn-sm bg-[#023066] hover:bg-[#A5CF38]  border-[#023066] text-white rounded-md p-[7px]"
                    >
                      View-Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      {/* ============ */}

      <div className="blogs">
        <div className='blogs py-6  w-full '>
          <div className="container bg-blue-600/10 rounded-3xl py-6 ">
            <div className="grid grid-cols-1 pb-8 text-center" data-aos="flip-up"
              data-aos-easing="ease-in-sine">
              <h3 className="mb-4  text-[#1D87F0] text-3xl leading-normal font-bold">Latest Blog or News</h3>

              <p className="text-slate-500 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100"
              data-aos-easing="ease-in-sine"
              className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px] px-9 ">
              <div className="group relative overflow-hidden hover:-mt-2  duration-500 h-fit bg-white  rounded-md shadow shadow-gray-700">
                <div className="relative overflow-hidden">
                  <img src={blog1} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
                </div>

                <div className="relative p-6">


                  <div className="">
                    <div className="flex mb-4">
                      <span className="text-slate-400 text-sm"><CalendarToday size="small" />   20th February, 2023</span>
                      <span className="text-slate-400 text-sm ms-3"><AccessTime size="small" />  15 min read</span>
                    </div>

                    <a href="." className="title text-lg font-semibold hover:text-[#A5CF38] duration-500 ease-in-out">11 Tips to Help You Get New Clients Through Cold Calling</a>

                    <div className="flex justify-between items-center mt-3">
                      <Link to="/BlogContent" className="btn btn-link hover:text-[#A5CF38] after:bg-[#A5CF38] duration-500 ease-in-out">Read More <ArrowForward sx={{ fontSize: 15, marginBottom: [0.6] }} /></Link>

                    </div>
                  </div>
                </div>
              </div>


              <div className="group relative overflow-hidden hover:-mt-2  duration-500 h-fit bg-white  rounded-md shadow shadow-gray-700">
                <div className="relative overflow-hidden">
                  <img src={blog2} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
                </div>

                <div className="relative p-6">


                  <div className="">
                    <div className="flex mb-4">
                      <span className="text-slate-400 text-sm"><CalendarToday size="small" />    20th February, 2023</span>
                      <span className="text-slate-400 text-sm ms-3"><AccessTime size="small" />  5 min read</span>
                    </div>

                    <a href="." className="title text-lg font-semibold hover:text-[#A5CF38] duration-500 ease-in-out">DigitalOcean launches first Canadian data centre in Toronto</a>

                    <div className="flex justify-between items-center mt-3">
                      <Link to="/BlogContent" className="btn btn-link hover:text-[#A5CF38] after:bg-[#A5CF38] duration-500 ease-in-out">Read More <ArrowForward sx={{ fontSize: 15, marginBottom: [0.6] }} /></Link>

                    </div>
                  </div>
                </div>
              </div>


              <div className="group relative overflow-hidden hover:-mt-2  duration-500 h-fit bg-white  rounded-md shadow shadow-gray-700">
                <div className="relative overflow-hidden">
                  <img src={blog3} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
                </div>

                <div className="relative p-6">


                  <div className="">
                    <div className="flex mb-4">
                      <span className="text-slate-400 text-sm"><CalendarToday size="small" />   20th February, 2023</span>
                      <span className="text-slate-400 text-sm ms-3"><AccessTime size="small" />  5 min read</span>
                    </div>

                    <a href="." className="title text-lg font-semibold hover:text-[#A5CF38] duration-500 ease-in-out">Using Banner Stands To Increase Trade Show Traffic</a>

                    <div className="flex justify-between items-center mt-3">
                      <Link to="/BlogContent" className="btn btn-link hover:text-[#A5CF38] after:bg-[#A5CF38] duration-500 ease-in-out">Read More <ArrowForward sx={{ fontSize: 15, marginBottom: [0.6] }} /></Link>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========================================== */}

      <div className=" py-6  w-full " data-aos="fade-up" data-aos-easing="ease-in-back"
        data-aos-delay="100">
        <div className="container overflow-hidden  py-10 shadow-lg shadow-gray-300 bg-pink-300/10 rounded-xl  ">

          <div className=" grid grid-cols-1 ">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[10px]">
              <div className="lg:col-span-8 md:col-span-7">
                <div className=" relative z-1">
                  <h3 className="text-2xl font-semibold text-left text-[#023066] mb-4">Explore a job now!</h3>
                  <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 10000+ companies worldwide.</p>
                </div>
              </div>

              <div className="lg:col-span-4 md:col-span-5">
                <div className=" relative z-1">
                  <Link to='/SignUp' className="btn bg-[#023066] hover:bg-[#A5CF38]  border-[#023066] text-white rounded-md p-1.5 duration-300">Apply Now</Link>
                  <a href="/Home" className="btn bg-[#023066]/5 hover:bg-[#023066] border-[#023066]/10 hover:border-[#023066] text-[#023066] hover:text-white rounded-md ms-2 p-1.5 duration-300">Learn More</a>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

      <div>
        <div className='download-app  py-6  w-full  '>
          <div className="container overflow-hidden   shadow-lg bg-blue-500/20 rounded-3xl  w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 items-start grid-cols-1">
              <div className="download-content pt-28 col-span-2 " data-aos="fade-right" data-aos-easing="ease-in-shine"
                data-aos-delay="200">
                <h1 className='text-4xl  font-[655] text-[#1D87F0] py-3 '>Download the Job Listing App Today!</h1>
                <p className='text-slate-500 font-medium text-lg pt-2'>"Your Dream Job Awaits: Download Our Job Listing JOBFINDER App and Start Exploring a World of Exciting Career Opportunities. Get Instant Alerts,  Connect with Your Dream Employers, and Propel Your Career to New Heights. Download Now!"</p>
                <div className="flex flex-wrap pt-6">
                  <img src={play} className="h-16 hover:bg-[#1D87F0] rounded-xl cursor-pointer px-1.5" alt="" />
                  <img src={apple2} className="h-16 hover:bg-[#1D87F0] rounded-xl cursor-pointer px-0" alt="" />
                </div>
                {/* <button className='p-3 bg-black text-white rounded-lg font-semibold'><PlayArrow/>Available on  <br /><span className='text-slate-400'>Playstore</span> </button> */}
              </div>
              <div className="download-image  col-span-1 grid  justify-center" data-aos="fade-left" data-aos-easing="ease-in-back"
                data-aos-delay="220" data-aos-duration="500">
                <img src={d3} className='h-[500px] ' alt="Download our app" />
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ============================= */}

<PostCards/>

    </div>
  )
}

export default Home2
