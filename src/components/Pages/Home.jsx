import React from "react";

import amazon from "../../assets/images/company/amazon.png";
import Google from "../../assets/images/company/google-logo.png";
import android from "../../assets/images/company/android.png";
import apple from "../../assets/images/company/apple.png";
import flipcart from "../../assets/images/company/Flipkart.png";
import snapchat from "../../assets/images/company/snapchat.png";
import spotify from "../../assets/images/company/spotify.png";
import Linkdin from "../../assets/images/company/linkedin.png";
import reacticon from "../../assets/images/company/react.png";
import Microsoft from "../../assets/images/company/Microsoft.png";
import Profiles from '../Top_profiles'
import "./tailwind.min.css";
import Blog from "../Blogs";
import PostCards from './Post_Cards'
// import d1 from '../../assets/banners/d2.png'
import Download from "../Download";
// import Datatable from "../datatable.jsx";
import Slider from '../Slider'
import Jobs from "../Companies";
import JoinUs from "../Join_us";
import bg from '../../assets/banners/home.jpg'

const Home = () => {
  return (
    <home className="">
      <div className="">
        <section className="relative  py-36  w-full p-[25px] bg-gradient-to-r from-[#1F86F9]/30 to-[#1F86F9]/40">
        
          <div className="inset-0 absolute opacity-[0.1] "><img src={bg} alt="" /></div>
          <div className="container ">
            <div className="grid grid-cols-1 text-center mt-5 relative">
              <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-[#023066]">
                Over 10000+ Jobs are Waiting for You
              </h4>
              <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-[#023066]">
                Join us &{" "}
                <span className="text-[#F38121] font-bold ">Explore</span> <br />{" "}
                <span className="text-[#F38121] font-bold">Thousands</span> of
                Jobs
              </h4>
              <p className="text-slate-600 text-lg max-w-xl mx-auto">
                Find Jobs, Employment & Career Opportunities. Some of the
                companies we've helped recruit excellent applicants over the
                years.
              </p>
             

              <div className="d-flex " id="reserve-form ">
                <div className="md:w-4/6 mx-auto">
                  <div className="lg:col-span-10 mt-8">
                    <div className="bg-white border-0 shadow rounded-md p-3 ">
                      <form action="#">
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
              <div className="">
                <div className="my-4 sm:my-0">
                  <span className="text-slate-600">
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
                    <img src={flipcart} className="h-6 w-6" alt="" />
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
              </div>
            </div>
          </div>

          
      
        </section>

        {/* ================================================================================================================================================= */}

        {/* ===================================================Cards======================================== */}

        {/* <div className="card bg-[#023066]/5 md:py-20 sm:py-11 py-11">
          <Slider />
        </div> */}

        {/* ================================================================================================= */}
        <div className="jobs">
          <Jobs />
        </div>
        {/* ============================================================================= */}
{/* 
        <div>
          <div className="bg-[#023066]/5 ">
            <Datatable />
          </div>

        </div> */}

        {/* ==================================================================== */}
        <div className="profiles">
          <Profiles />
        </div>

        {/* -================================================================================================= */}

        {/* -=========================Blogs========================================= */}
        <div className="blog">
          <Blog />
        </div>

        {/* ======================================================================== */}
        <PostCards/>
        {/* =================================================Join-US */}
        {/* 
        <div className="home-join-us-today relative ">
          <img
            className="opacity-[1] bg-gradient-to-r from-black to-black bg-cover md:h-[500px] sm:h-[500px]  min-[350px]:h-[580px] lg:h-[340px] min-[375px]:left-[20px]  w-full  "
            src={bg2}
            alt=""
          />

          <div className=" absolute top-[60px] lg:left-[150px]  md:left-[60px]  sm:left-6 p-4 ">
            <div className="container font-semibold text-white flex  flex-wrap">
              <h1 className="text-[#A5CF38]  text-5xl shadow-lg font-[655]">
                Join Us Today Without Any Hesitation
              </h1>
              <p className="font-medium py-5 ">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 10000+
                companies worldwide.
              </p>
            </div>

            <div className="join-buttons py-2 md:pl-[120px] ">
              <button className=" center rounded-lg bg-[#023066] py-3  px-6 font-sans text-xs font-bold uppercase text-white hover:bg-orange-500 hover:duration-[0.4s] hover:shadow-lg ">
                Im a Candidate
              </button>

              <button className=" center rounded-lg bg-[#023066] py-3 px-6 ml-3 font-sans text-xs font-bold uppercase text-white hover:bg-orange-500 hover:duration-[0.4s] hover:shadow-lg ">
                request free demo
              </button>
            </div>
          </div>
        </div> */}

        {/* =================================================== */}

        <div className="join-us">
          <JoinUs />
        </div>

        {/* ============================================================== */}

        {/* =====================================Download our app========================================== */}
        <div className="download">
          {/* <img className="w-full md:h-[450px] lg:h-[450px] from-black to-blue-950  opacity-[1.2]" src={d1} alt="download our app" /> */}
          <Download />
        </div>

        {/* ================================================================================================== */}
      </div>
    </home>
  );
};

export default Home;