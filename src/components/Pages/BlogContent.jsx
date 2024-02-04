import React from 'react'
import Blogs from '../Blogs'
import blog1 from '../../assets/b5.png'
import "./tailwind.min.css"
import profile from '../../assets/images/company/linkedin.png'
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";
const BlogContent = () => {
    return (
        <div className="blogcontent">
            {/* // -==============================blog header-==================================================================== */}
            <section className='bg-gradient-to-r from-black to-blue-950'>
                <div className="relative table w-full py-28  bg-top bg-no-repeat bg-cover " style={{ backgroundImage: `url(${blog1})` }}>

                    <div className="container">
                        <div className="grid grid-cols-1 text-center mt-5">
                            <h3 className="sm:text-3xl   md:leading-snug tracking-wide leading-snug text-[#A5CF38] md:text-5xl font-semibold focus:ring-4 mb-3">The Most In-Demand Jobs on LinkedIn Right Now</h3>

                            <ul className="list-none mt-6 flex justify-center ">
                                <li className=" text-white mx-5"> <span className=" block">By:</span> <span className="block ">LinkedIn</span></li>
                                <li className=" text-white mx-5"> <span className=" block">Date :</span> <span className="block">July 26, 2023</span></li>

                            </ul>
                        </div>
                    </div>

                    {/* <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
           <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><a href="">Jobstack</a></li>
           <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><a href="">Blogs</a></li>
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Single</li>
        </ul>
    </div> */}
                </div>
            </section>
            {/* // ================================================================================blog-content================== */}
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className=" group relative overflow-hidden rounded-md shadow-lg bg-gradient-to-r from-black to-blue-950 ">

                            <div className="relative overflow-hidden">
                            <img src={blog1} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
                        </div>

                                <div className="p-6">
                                    <p className="text-slate-200">Whether you’re recruiting for these roles in particular or simply curious about broader labor market trends, read on for the full rankings and reflections on the most in-demand jobs.</p>
                                    <p className="text-slate-200 italic border-x-4 border-[#A5CF38] rounded-ss-xl rounded-ee-xl mt-3 p-3">Jobs with the fastest-growing demand: Culinary roles take the cake, along with AI and R&D engineers</p>
                                    <p className="text-slate-200 mt-3">The job market continues to cook up fresh surprises. Whether you’re looking for a culinary whiz to thrive in a high-heat kitchen, a service rep to ensure a five-star customer experience, or an engineer to whisk AI innovations into your business mix, know that demand for these roles is roiling.</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-md shadow  mt-8">
                                <h5 className="text-lg font-semibold">Leave A Comment:</h5>


                                <form action="" className="mt-8">

                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label for="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    {/* <i data-feather="user" className="w-4 h-4 absolute top-3 start-4"></i> */}
                                                    <input name="name" id="name" type="text" className="form-input ps-11 w-full" placeholder="Name :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label for="email" className="font-semibold w-full">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="mail" className="w-4 h-4 absolute top-3 start-4"></i>
                                                    <input name="email" id="email" type="email" className="form-input ps-11 w-full" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-left">
                                                <label for="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    {/* <i data-feather="message-circle" className="w-4 h-4 absolute top-3 start-4"></i> */}
                                                    <textarea name="comments" id="comments" className="form-input ps-11 h-28 w-full" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="btn bg-[#023066] hover:bg-[#A5CF38] duration-300 text-white rounded-md w-full p-2">Send Message</button>
                                </form>

                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="sticky top-20 text-white">
                                <h5 className="text-lg font-medium bg-[#023066]  rounded-md p-2 text-center">Author</h5>
                                <div className="text-center mt-8  ">
                                    <img src={profile} className="h-20 w-20 mx-auto rounded-full shadow mb-4 " alt="" />

                                    <a href="." className="text-lg font-medium hover:text-emerald-600 transition-all duration-500 ease-in-out h5 text-[#023066]">LinkedIn</a>
                                    <p className="text-slate-400">job portal</p>
                                </div>

                                <h5 className="text-lg font-medium bg-[#023066] rounded-md p-2 text-center mt-8">Social sites</h5>
                                <ul className="list-none text-center mt-8 space-x-2">
                                    <li className="inline"><a href="." className="btn btn-icon btn-sm  text-slate-400  hover:text-blue-700"><Facebook /></a></li>
                                    <li className="inline"><a href="." className="btn btn-icon btn-sm  text-slate-400  hover:text-blue-700"><LinkedIn /></a></li>
                                    <li className="inline"><a href="." className="btn btn-icon btn-sm  text-slate-400 hover:text-blue-700"><YouTube /></a></li>
                                    <li className="inline"><a href="." className="btn btn-icon btn-sm  text-slate-400   hover:text-blue-700"><Instagram /></a></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    {/* <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Blogs</h3>

                        <p className="text-slate-200 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div> */}
                    {/* ============================ */}
                    <div className="related-blogs">

                        <Blogs />
                    </div>
                    {/* ============================= */}
                </div>


            </section>
        </div>
    )
}

export default BlogContent
