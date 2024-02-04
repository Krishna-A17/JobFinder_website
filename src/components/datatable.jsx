import React from 'react'
import { Link } from "react-router-dom";
import add from '../assets/google_banners/200_200.png'
import { CalendarToday } from '@mui/icons-material'
const datatable = () => {

  return (
    <div className='py-6  w-full px-4'>
        <div className="lg:container container px-6 bg-violet-500/10 py-9 grid md:grid-cols-12  rounded-3xl  ">

          {/* ==============================================Tables============================= */}
          <div className='lg:col-span-10 md:col-span-10 sm:px-[10px] md:px-[25px]' data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-in-out">

            <div className='grid  md:grid-cols-2  sm:grid-cols-1  gap-7  '>

              <div className='group shadow-lg bg-white shadow-indigo-400/20   rounded-md  '>
                <div className='header py-3 rounded-t-md font-bold text-center  text-2xl px-2 bg-gray-300/50 h-fit    text-[#023066]'>
                  <h1>Recent Trainings</h1>
                </div>
                <hr />
                <div className="card-content">
                  {/* <table class="w-full table-auto border-collapse block overflow-x-scroll sm:overflow-hidden"></table> */}
                  <div className="scroolable overflow-y-auto h-[450px] scroll">
                    <ul className='list-group '>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12 px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className=' p-1.5 pt-[1px]   float-right font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>





                    </ul>
                  </div> <li className='relative block text-center py-1  text-lg font-semibold border-slate-300 border-t  text-[#023066]'>
                    <Link to="/Training" >View all</Link>
                  </li>
                </div>

              </div>

              {/* ========================================================22222222222222 */}
              <div className='group shadow-lg bg-white shadow-indigo-400/20   rounded-md'>
                <div className='header py-3 rounded-t-md font-bold px-2 text-2xl text-center   text-[#023066] bg-gray-300/60 h-fit'>
                  <h1>OPT-CPT Hiring</h1>
                </div>
                <hr />
                <div className="card-content">
                  {/* <table class="w-full table-auto border-collapse block overflow-x-scroll sm:overflow-hidden"></table> */}
                  <div className="scroolable overflow-y-auto h-[450px] scroll">
                    <ul className='list-group '>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12 px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>



                    </ul>



                  </div>
                  <li className='relative block text-center py-1 text-lg font-semibold border-slate-300 border-t  text-[#023066]'>
                    <Link to="/JobSearch" >View all</Link>
                  </li>


                </div>



              </div>
              {/* =====================333333333333333333333================= */}
              <div className='group shadow-lg bg-white shadow-indigo-400/20   rounded-md '>
                <div className='header py-3 rounded-t-md font-bold px-2 text-2xl text-center   text-[#023066] bg-gray-300/60 h-fit'>
                  <h1>Empanelment & Sponsorship</h1>
                </div>
                <hr />
                <div className="card-content">
                  {/* <table class="w-full table-auto border-collapse block overflow-x-scroll sm:overflow-hidden"></table> */}
                  <div className="scroolable overflow-y-auto h-[450px] scroll">
                    <ul className='list-group '>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12 px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>



                    </ul>
                  </div> <li className='relative block text-center py-1 text-lg font-semibold border-slate-300 border-t  text-[#023066]'>
                    <Link to="/Sponshirship" >View all</Link>
                  </li>
                </div>

              </div>

              {/* ============4444444444444444======================= */}
              <div className='group shadow-lg bg-white shadow-indigo-400/20   rounded-md '>
                <div className='header py-3 rounded-t-md font-bold px-2 text-2xl text-center   text-[#023066] bg-gray-300/60 h-fit'>
                  <h1>Training Enquiries</h1>
                </div>
                <hr />
                <div className="card-content">
                  {/* <table class="w-full table-auto border-collapse block overflow-x-scroll sm:overflow-hidden"></table> */}
                  <div className="scroolable overflow-y-auto h-[450px] scroll">
                    <ul className='list-group '>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12 px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>



                    </ul>
                  </div> <li className='relative block text-center py-1 text-lg font-semibold border-slate-300 border-t  text-[#023066]'>
                    <Link to="/Sponshirship" >View all</Link>
                  </li>
                </div>

              </div>

              {/* ==============555555555555555=============================================5555555555 */}
              <div className='group shadow-lg bg-white shadow-indigo-400/20   rounded-md  '>
                <div className='header py-3 rounded-t-md font-bold px-2 text-2xl text-center   text-[#023066] bg-gray-300/60 h-fit'>
                  <h1>Project Support Enquiries</h1>
                </div>
                <hr />
                <div className="card-content">
                  {/* <table class="w-full table-auto border-collapse block overflow-x-scroll sm:overflow-hidden"></table> */}
                  <div className="scroolable overflow-y-auto h-[450px] scroll">
                    <ul className='list-group '>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12 px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>



                    </ul>
                  </div> <li className='relative block text-center py-1 text-lg font-semibold border-slate-300 border-t  text-[#023066]'>
                    <Link to="/Sponshirship" >View all</Link>
                  </li>
                </div>

              </div>

              {/* ===================6666666666666666666666================================== */}
              <div className='group shadow-lg bg-white shadow-indigo-400/20   rounded-md '>
                <div className='header py-3 rounded-t-md font-bold px-2 text-2xl text-center   text-[#023066] bg-gray-300/60 h-fit'>
                  <h1> Legal & Attorney Queries</h1>
                </div>
                <hr />
                <div className="card-content">
                  {/* <table class="w-full table-auto border-collapse block overflow-x-scroll sm:overflow-hidden"></table> */}
                  <div className="scroolable overflow-y-auto h-[450px] scroll">
                    <ul className='list-group '>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12 px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>

                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>
                      <li className='relative block  border-slate-300 border py-2 border-x-0 hover:bg-blue-600/10  duration-500'>
                        <div className='grid-cols-12  px-2'>
                          <span className='font-bold text-blue-600'><a href=".">Android Training Demo @ 29th Feb</a></span>
                          <a href="." className='float-right  p-1.5 pt-[1px]  font-semibold rounded-md btn bg-[#023066]/90 text-white hover:bg-[#A5CF38]'><span className='text-white '>Apply</span></a>
                        </div>
                        <div className='grid-cols-12  px-2'>
                          <h2>Fee: $$350, <span><CalendarToday sx={{ fontSize: 15, marginBottom: [0.6] }} /></span> Duration 30Hours</h2>
                        </div>
                      </li>



                    </ul>
                  </div> <li className='relative block text-center py-1 text-lg font-semibold border-slate-300 border-t  text-[#023066]'>
                    <Link to="/Sponshirship" >View all</Link>
                  </li>
                </div>

              </div>


            </div>

            {/* ========================================= */}


          </div>






          {/* =================================================================================================== */}

          {/* ---=======================ADDS======================================================= */}
          <div className='lg:col-span-2 md:col-span-2 ' data-aos="fade-left"
              data-aos-duration="800"
              data-aos-easing="ease-in-out">
            <div className='header text-md font-bold borer text-[#1D87F0] grid grid-cols-1 text-center'>
              <div className="card-header shadow-md p-3 my-2 bg-white border-slate-500 rounded-md ">
                Advertaisments
              </div>
              <div className="card-body shadow-md p-3 bg-white border-slate-500 rounded-md ">
                Advertaisment Here!
              </div>
            </div>

            <div className="advertaisments  md:grid-flow-row  sm:grid grid-flow-col sm:gap-2 xs:grid xs:gap-2 place-items-center  ">
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>


            </div>


          </div>

         


        </div>

      </div>
  )
}

export default datatable
