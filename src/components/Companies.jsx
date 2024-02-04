import React from 'react'
import amazon from "../assets/images/company/amazon.png";
import Google from "../assets/images/company/google-logo.png";
import android from "../assets/images/company/android.png";
import apple from "../assets/images/company/apple.png";

import spotify from "../assets/images/company/spotify.png";
import Linkdin from "../assets/images/company/linkedin.png";
import { ArrowForward } from '@mui/icons-material'



const Companies = () => {
    return (
        <div>
            <section className="relative  py-11    md:py-11 ">
                <div className="container bg-violet-500/10 rounded-3xl  py-5">
                    <div className="grid grid-cols-1 pb-8 text-center ">
                        <h3 className="mb-4  md:leading-normal text-[#023066]  text-3xl leading-normal font-semibold">
                            Latest Jobs
                        </h3>

                        <p className="text-slate-500 max-w-xl mx-auto">
                            Search all the open positions on the web. Get your own
                            personalized salary estimate. Read reviews on over 10000+
                            companies worldwide.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px] m-5">
                        <div className="group shadow  p-6 rounded-md bg-white hover:shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img src={amazon} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <a
                                            href="#."
                                            className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                                        >
                                            Amazon
                                        </a>
                                        <span className="block text-sm text-slate-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>

                                <span className="bg-blue-600/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Full Time
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#."
                                    className="text-lg hover:text-[#023066] font-semibold transition-all duration-500"
                                >
                                    Web Designer / Developer
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker"></i> Australia
                                </h6>
                            </div>
                        </div>

                        <div className="group shadow  p-6 rounded-md bg-white hover:shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img src={Google} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <a
                                            href="#."
                                            className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                                        >
                                            Google
                                        </a>
                                        <span className="block text-sm text-slate-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>

                                <span className="bg-blue-600/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Part Time
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#."
                                    className="text-lg hover:text-[#023066] font-semibold transition-all duration-500"
                                >
                                    Marketing Director
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker"></i> USA
                                </h6>
                            </div>
                        </div>

                        <div className="group shadow  p-6 rounded-md bg-white hover:shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img src={android} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <a
                                            href="#."
                                            className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                                        >
                                            Android
                                        </a>
                                        <span className="block text-sm text-slate-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>

                                <span className="bg-blue-600/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Remote
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#."
                                    className="text-lg hover:text-[#023066] font-semibold transition-all duration-500"
                                >
                                    Application Developer
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker"></i> China
                                </h6>
                            </div>
                        </div>

                        <div className="group shadow  p-6 rounded-md bg-white hover:shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img src={apple} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <a
                                            href="#."
                                            className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                                        >
                                            Apple
                                        </a>
                                        <span className="block text-sm text-slate-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>

                                <span className="bg-blue-600/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    WFH
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#."
                                    className="text-lg hover:text-[#023066] font-semibold transition-all duration-500"
                                >
                                    Senior Product Designer
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker"></i> Dubai
                                </h6>
                            </div>
                        </div>

                        <div className="group shadow  p-6 rounded-md bg-white hover:shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img src={spotify} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <a
                                            href="#."
                                            className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                                        >
                                            Spotify
                                        </a>
                                        <span className="block text-sm text-slate-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>

                                <span className="bg-blue-600/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Full Time
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#."
                                    className="text-lg hover:text-[#023066] font-semibold transition-all duration-500"
                                >
                                    C++ Developer
                                </a>
                                <h6 className="text-base font-medium">
                                    <i className="uil uil-map-marker"></i> India
                                </h6>
                            </div>
                        </div>

                        <div className="group shadow  p-6 rounded-md bg-white hover:shadow-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white  shadow  rounded-md">
                                        <img src={Linkdin} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <a
                                            href="#."
                                            className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                                        >
                                            Linkedin
                                        </a>
                                        <span className="block text-sm text-slate-400">
                                            2 days ago
                                        </span>
                                    </div>
                                </div>

                                <span className="bg-blue-600/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                                    Remote
                                </span>
                            </div>

                            <div className="mt-6">
                                <a
                                    href="#."
                                    className="text-lg hover:text-[#023066] font-semibold transition-all duration-500"
                                >
                                    Php Developer
                                </a>
                                <h6 className="text-base font-medium">
                                    Austrila
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <a
                                href="#."
                                className="btn btn-link text-slate-400 hover:text-[#023066] after:bg-[#023066] duration-500 ease-in-out"
                            >
                                See More Jobs{" "}
                                <ArrowForward style={{ fontSize: "20px" }} /> 
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Companies 
