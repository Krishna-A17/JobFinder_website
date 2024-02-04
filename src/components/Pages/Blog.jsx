import React from 'react'
import bg2 from "../../assets/blog.jpg";
import blog1 from '../../assets/images/blog/04.jpg'
import blog2 from '../../assets/images/blog/02.jpg'
import blog3 from '../../assets/images/blog/03.jpg'
import { AccessTime ,CalendarToday, ArrowForward} from '@mui/icons-material'
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28  bg-cover   opacity-[0.8]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* <div className="absolute inset-0 "></div> */}
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#ff853a] text-6xl font-semibold focus:ring-4">
                Blog
              </h1>
            </div>
          </div>
          
          
        </div>
        
      </section>
      

      {/* ==============================Blogs======================================== */}

      <div className='blogs bg-[#023066]/5 p-5'>
        <div className="container  bg-indigo-400/20 py-6 rounded-3xl">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4  text-[#023066] text-3xl leading-normal font-semibold">Latest Blog or News</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px] px-9 ">
            <div className="group relative overflow-hidden bg-white  rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img src={blog1} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
              </div>

              <div className="relative p-6 ">


                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm"><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }}/>   20th February, 2023</span>
                    <span className="text-slate-400 text-sm ms-3"><AccessTime sx={{ fontSize: 15, marginBottom: [0.6] }}/>  15 min read</span>
                  </div>

                  <a href="." className="title text-lg font-semibold hover:text-[#A5CF38] duration-500 ease-in-out">11 Tips to Help You Get New Clients Through Cold Calling</a>

                  <div className="flex justify-between items-center mt-3">
                    <Link to="/BlogContent" className="btn btn-link hover:text-[#A5CF38] after:bg-[#A5CF38] duration-500 ease-in-out ">Read More <ArrowForward sx={{ fontSize: 15, marginBottom: [0.6] }} /></Link>

                  </div>
                </div>
              </div>
            </div>


            <div className="group relative overflow-hidden bg-white  rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img src={blog2} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
              </div>

              <div className="relative p-6">


                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm"><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }}/>    20th February, 2023</span>
                    <span className="text-slate-400 text-sm ms-3"><AccessTime sx={{ fontSize: 15, marginBottom: [0.6] }}/>  5 min read</span>
                  </div>

                  <a href="." className="title text-lg font-semibold hover:text-[#A5CF38] duration-500 ease-in-out">DigitalOcean launches first Canadian data centre in Toronto</a>

                  <div className="flex justify-between items-center mt-3">
                  <Link to="/BlogContent" className="btn btn-link hover:text-[#A5CF38] after:bg-[#A5CF38] duration-500 ease-in-out">Read More <ArrowForward sx={{ fontSize: 15, marginBottom: [0.6] }} /></Link>

                  </div>
                </div>
              </div>
            </div>


            <div className="group relative overflow-hidden bg-white  rounded-md shadow dark:shadow-gray-700">
              <div className="relative overflow-hidden">
                <img src={blog3} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
              </div>

              <div className="relative p-6">


                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm"><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }}/>   20th February, 2023</span>
                    <span className="text-slate-400 text-sm ms-3"><AccessTime sx={{ fontSize: 15, marginBottom: [0.6] }}/>  5 min read</span>
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
  )
}

export default Blog
