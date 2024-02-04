import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'


const Category = () => {
    return (
        <div className='py-6  w-full '>
            <div className="container   bg-green-300/10 rounded-3xl py-11">
                <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end " data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine" >
                    <div className="lg:col-span-8 md:col-span-6  " >
                        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-bold text-[#1D87F0] ">Browse by Categories</h3>
                        <p className="text-slate-400 max-w-xl">Search your career opportunity with our categories</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6  hidden md:block">
                        <Link to='/JobSearch' className="btn btn-link text-slate-500 hover:text-[#023066] ">All Categories<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-sine"
                    className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066]  hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Devops Engineer</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">It & Networking</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Sales & Marketing</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <a href="/JobSearch" className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </a>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Java Developer</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <a href="/JobSearch" className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </a>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Software Developer</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Data Science</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Cloud</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Flutter</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Backend Developer</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>

                    <div className="group p-4 rounded-md shadow-lg hover:shadow-black/70   bg-slate-50  hover:bg-[#023066] hover:-mt-2 h-fit overflow-hidden  transition-all duration-500">
                        <h5 className="text-lg text-[#023066] font-bold group-hover:text-white">Full Stack Developer</h5>
                        <span className="block text-slate-500 group-hover:text-white/50 text-md mt-1">90 Jobs Available</span>

                        <div className="mt-2">
                            <Link to='/JobSearch' className="text-[#023066]  group-hover:text-white font-medium">Explore Jobs<ArrowForward style={{ fontSize: "20px" }} /> </Link>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link to='/JobSearch' className="btn btn-link text-slate-400 hover:text-[#023066] after:bg-[#023066] duration-500 ease-in-out">All Categories <ArrowForward style={{ fontSize: "20px" }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
