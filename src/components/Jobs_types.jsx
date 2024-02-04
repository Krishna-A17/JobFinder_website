import React from 'react'
import amazon from "../assets/images/company/amazon.png";
import Google from "../assets/images/company/google-logo.png";
import android from "../assets/images/company/android.png";
import apple from "../assets/images/company/apple.png";
import meta from "../assets/images/company/meta.png";
import snapchat from "../assets/images/company/snapchat.png";
import spotify from "../assets/images/company/spotify.png";
import Linkdin from "../assets/images/company/linkedin.png";
import reacticon from "../assets/images/company/react.png";
import Microsoft from "../assets/images/company/Microsoft.png";
import fb from '../assets/images/company/facebook-logo.png'
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material'
const Jobs_types = () => {
    return (
        <div>
            <section className="relative  py-6  w-full ">
                <div className="container bg-indigo-500/10 py-6 rounded-3xl">
                    <div className="grid grid-cols-1 pb-8 text-center" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"

                        data-aos-offset="0">
                        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-bold text-[#1D87F0]">Popular Jobs</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]" data-aos="fade-up"
                        data-aos-anchor-placement="top-center">
                        <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                                        <img src={fb} className="h-10 w-10" alt="" />
                                    </div>

                                    <div className="ms-3 w-full">
                                        <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Facebook</h2>

                                        <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Web Designer</h2>
                                        <span className="inline-block text-sm text-slate-400 float-right">2 days ago</span>
                                        <div className=''>
                                            <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Full Time</span>

                                            <span className="text-sm font-medium inline-block me-1 ">Salary:  5L - 7L</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 py-3">Looking for an experienced Web Designer for an our company.</p>

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

                                <Link to='' className="btn btn-sm rounded-md bg-[#023066] hover:text-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Apply Now</Link>
                            </div>

                            {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
                        </div>

                        <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                                        <img src={Google} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3 w-full">
                                        <h2 className="text-xl font-bold text-[#023066] hover:text-[#023066] transition-all duration-500 me-1">Google</h2>

                                        <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Marketing Director</h2>
                                        <span className="inline-block text-sm text-slate-400 float-right">2 days ago</span>
                                        <div>
                                            <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Part Time</span>

                                            <span className="text-sm font-medium inline-block me-1">Salary:  5L to 7L</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 py-3">Looking for an experienced Web Designer for an our company.</p>

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


                                <Link to="/JobSearch" className="btn btn-sm rounded-md bg-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Apply Now</Link>
                            </div>

                            {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
                        </div>

                        <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md duration-500 h-fit">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                                        <img src={android} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3 w-full">
                                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Android</h2>
                                        <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">App Developer</h2>
                                        <span className="inline-block text-sm text-slate-400 float-right">2 days ago</span>
                                        <div>
                                            <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Remote</span>

                                            <span className="text-sm font-medium inline-block me-1">Salary:  5L to 7L</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 py-3">Looking for an experienced Web Designer for an our company.</p>

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

                                <Link to='/JobSearch' className="btn btn-sm rounded-md bg-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Apply Now</Link>
                            </div>

                            {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
                        </div>

                        <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                                        <img src={meta} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3 w-full">
                                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Meta</h2>
                                        <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Product Designer</h2>
                                        <span className="inline-block text-sm text-slate-400 float-right">2 days ago</span>
                                        <div>
                                            <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">WFH</span>

                                            <span className="text-sm font-medium inline-block me-1">Salary:  5L to 7L</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 py-3">Looking for an experienced Web Designer for an our company.</p>

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

                                <Link to='/JobSearch' className="rounded-md bg-[#023066]  hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Apply Now</Link>
                            </div>

                            {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
                        </div>

                        <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                                        <img src={Microsoft} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3 w-full">
                                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">Microsoft</h2>
                                        <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">C++ Developer</h2>
                                        <span className="inline-block text-sm text-slate-400 float-right">2 days ago</span>
                                        <div>
                                            <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Full Time</span>

                                            <span className="text-sm font-medium inline-block me-1">Salary:  5L to 7L</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 py-3">Looking for an experienced Web Designer for an our company.</p>

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

                                <Link to="/JobSearch" className="btn btn-sm rounded-md bg-[#023066] hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Apply Now</Link>
                            </div>

                            {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
                        </div>

                        <div className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl   hover:-mt-2 rounded-md  duration-500 h-fit">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 min-w-[56px] flex items-center justify-center bg-white   rounded-md">
                                        <img src={Linkdin} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3 w-full">
                                    <h2 className="text-xl text-[#023066] font-bold hover:text-[#023066] transition-all duration-500 me-1">LinkdIn</h2>
                                        <h2 className="inline-block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500 me-1">Php Developer</h2>
                                        <span className="inline-block text-sm text-slate-400 float-right">2 days ago</span>
                                        <div>
                                            <span className="bg-blue-600/10 inline-block text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full me-1 float-right">Remote</span>

                                            <span className="text-sm font-medium inline-block me-1">Salary:  5L to 7L</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-400 py-3">Looking for an experienced Web Designer for an our company.</p>

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
                                <span className="inline-block me-1 text-slate-400"><i className="uil uil-map-marker text-[18px] text-slate-900 dark:text-white me-1"></i>Pakistan</span>
                            </div> */}

                                <Link to="/JobSearch" className="btn btn-sm rounded-md bg-[#023066]  hover:font-bold duration-300 font-semibold hover:bg-[#A5CF38]   text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4 p-1.5">Apply Now</Link>
                            </div>

                            {/* <a href="#" className="btn btn-icon rounded-full bg-[#023066]/5 hover:bg-[#023066] border-blue-600/10 hover:border-[#023066] text-[#023066] hover:text-white absolute top-0 end-0 m-3"><i data-feather="bookmark" className="h-4 w-4"></i></a> */}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to='/JobSearch' className="btn btn-link text-slate-400 hover:text-[#023066]">See More Jobs <ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Jobs_types
