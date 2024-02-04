import React from "react";

import fb from "../../assets/images/company/facebook-logo.png";
import Google from "../../assets/images/company/google-logo.png";
import android from "../../assets/images/company/android.png";
import lenova from "../../assets/images/company/lenovo-logo.png";
import skype from "../../assets/images/company/skype.png";
import snapchat from "../../assets/images/company/snapchat.png";
import spotify from "../../assets/images/company/spotify.png";
import Linkdin from "../../assets/images/company/linkedin.png";
import Telegram from "../../assets/images/company/telegram.png";
import Whatsapp from "../../assets/images/company/whatsapp.png";
import Microsoft from "../../assets/images/company/Microsoft.png";
import bg2 from "../../assets/jobsearch.jpg";
import "./tailwind.min.css";
import { Link } from 'react-router-dom'
import { Pagination, } from "@mui/material";
import Whyyou from "../Why_you";

const JobSearch = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0,0)
  };
  return (
    <div className="Optcpt-job ">


      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28  bg-no-repeat  bg-cover    opacity-[0.7]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* <div className="absolute inset-0 "></div> */}
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#ff853a] text-6xl font-semibold focus:ring-4">
                Jobs Search
              </h1>
            </div>
          </div>
        </div>
      </section>


      <section className="relative md:py-24 py-14">
        <div className="container bg-violet-400/10 py-6 rounded-3xl">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-700 p-6 rounded-md bg-white  sticky top-20">
                <form>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label for="searchname" className="font-semibold">
                        Search Company
                      </label>
                      <div className="relative mt-2">
                        <input
                          name="search"
                          id="searchname"
                          type="text"
                          className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                          placeholder="Search"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold">Categories</label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1 ">
                        <option value="WD">Web Designer</option>
                        <option value="WD">Web Developer</option>
                        <option value="UI">UI / UX Desinger</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-semibold">Location</label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                        <option value="NY">Banglore</option>
                        <option value="MC">Chennai</option>
                        <option value="SC">Hyderabad</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-semibold">Job Types</label>
                      <div className="block mt-2">
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="fulltime"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="fulltime"
                            >
                              Full Time
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            3
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="parttime"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="parttime"
                            >
                              PartTime
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            7
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="Freelancing"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="Freelancing"
                            >
                              Freelancing
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            4
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="fixedprice"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="fixedprice"
                            >
                              Fixed Price
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            6
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="Remote"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="Remote"
                            >
                              Remote
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            7
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="hourlybasis"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="hourlybasis"
                            >
                              Hourly Basis
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            44
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold">Salary</label>
                      <div className="block mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                              checked
                            />
                            <span className="text-slate-400">10k - 15k</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">15k - 25k</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-[#023066]  focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">
                              more than 25K
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <input
                        type="submit"
                        className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066] hover:border-[#A5CF38] text-white rounded-md w-full p-2"
                        value="Apply Filter"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-8 md:col-span-6">
              <div className="grid lg:grid-cols-3 gap-[25px]">

                {/* =============================================================================================================== */}
                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                      <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={fb} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Facebook
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Full Time
                    </span>
                  </div>  

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Web Designer / Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Banglore
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>



                {/* ================================================================================================================== */}

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={Google} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Google
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      PartTime
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Backend Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Hyderabad
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={android} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Android
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Remote
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Application Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Chennai
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={lenova} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Lenovo
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      WFH
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Product Designer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Mumbai
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={spotify} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Spotify
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Full Time
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Java Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Pune
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={Linkdin} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Linkedin
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Remote
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Php Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Delhi
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={android} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Android
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Full Time
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Web Designer / Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Gujarat
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={skype} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Skype
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      PartTime
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Web Designer / Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Vizag
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={snapchat} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Snapchat
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Remote
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Web Designer / Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Banglore
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={Microsoft} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Microsoft
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      WFH
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        C++ Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Tirupathi
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={Telegram} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Telegram
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Full Time
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Web Designer / Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Hyderabad
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>

                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md">
                        <img src={Whatsapp} className="h-8 w-8" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          Whatsapp
                        </a>
                        <span className="block text-sm text-slate-400">
                          2 days ago
                        </span>
                      </div>
                    </div>

                    <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Remote
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="."
                        className=" hover:text-[#023066] font-semibold text-xs transition-all duration-500"
                      >
                        Java Developer
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="/Job_Details">Apply</Link></button>
                    </div>
                    <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Vizag
                    </h6>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-gray-100 dark:bg-[#A5CF38] rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* <div className="next">
                <input
                  type="button"
                  className="btn p-2 px-4 bg-[#023066]  rounded-lg text-white text-center mt-5 float-right hover:bg-[#A5CF38] duration-300 cursor-pointer"
                  value="Next"
                />
              </div> */}


               

              <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                  {/* <nav aria-label="Page navigation example">
                
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a href="." className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white  rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-[#023066] dark:hover:border-[#023066] hover:bg-[#023066] dark:hover:bg-[#A5CF38]">
                          <i className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                        </a>
                      </li>
                      <li>
                        <a href="." className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100 dark:border-gray-800 hover:border-[#023066] dark:hover:border-[#023066] hover:bg-[#023066] dark:hover:bg-[#A5CF38]">1</a>
                      </li>
                      <li>
                        <a href="." className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100 dark:border-gray-800 hover:border-[#023066] dark:hover:border-[#023066] hover:bg-[#023066] dark:hover:bg-[#A5CF38]">2</a>
                      </li>

                      <li>
                        <a href="." className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100 dark:border-gray-800 hover:border-[#023066] dark:hover:border-[#023066] hover:bg-[#023066] dark:hover:bg-[#A5CF38]">3</a>
                      </li>
                      <li>
                                    <a href="." aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-[#023066] border border-[#A5CF38]">3</a>
                                </li>
                      <li>
                        <a href="." className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100 dark:border-gray-800 hover:border-[#023066] dark:hover:border-[#023066] hover:bg-[#023066] dark:hover:bg-[#A5CF38]">4</a>
                      </li>
                      <li>
                        <a href="." className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white  border border-gray-100 dark:border-gray-800 hover:border-[#023066] dark:hover:border-[#023066] hover:bg-[#023066] dark:hover:bg-[#A5CF38]">5</a>
                      </li>
                      <li>
                        <a href="." className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white  rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-[#023066] dark:hover:border-[#023066] hover:bg-[#023066] dark:hover:bg-[#A5CF38]">
                          <i className="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                        </a>
                      </li>
                    </ul>
                  </nav> */}
                  <Pagination className="inline-flex items-center -space-x-px bg-white py-2  rounded-3xl" count={15} variant="outlined"
                    onChange={e => handleChange(e.target.textContent)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-you-love-optcpt">
          <Whyyou/>
        </div>

      </section>
    </div>
  );
};

export default JobSearch;
