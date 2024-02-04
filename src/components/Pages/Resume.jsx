import React, { useState } from 'react'
import bg2 from "../../assets/resume.jpg";
import { Link } from 'react-router-dom'
import { KeyboardArrowDown, Message } from '@mui/icons-material';
import { Pagination, } from "@mui/material";
import { useNavigate } from "react-router-dom"


const Resume = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [page, setPage] = React.useState(1);
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0)
  };
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28  bg-no-repeat  bg-cover     opacity-[0.8]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="absolute inset-0 "></div>
          <div className="container">
            <div className="grid grid-cols-1 text-center  place-items-center ">
              <h1 className="text-[#ff853a] text-3xl sm:text-3xl md:text-6xl pb-12   font-semibold focus:ring-4 ">
                Resume Search
              </h1>

            </div>
           

          </div>
          <div className='grid grid-cols-1  text-center  place-items-center   '><button onClick={() => navigate("/Post-Job")}
           
           className=" absolute cursor-pointer text-lg font-bold bg-[#023066] hover:bg-[#A5CF38] px-3 py-1.5 rounded-md   text-white  duration-300"
           value="Post a Job"
         >Post a job</button></div>
        </div>
      </section>

      {/* ====================================================================================================== */}



      <div className="d-flex " id="reserve-form ">
        <div className="md:w-8/12 mx-auto ">
          <div className="lg:col-span-10 mt-8">
            <div className="bg-indigo-500/10 border-0 shadow rounded-md p-3 ">
              <form action="#">
                <div className="registration-form text-dark text-start ">
                  <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-0 gap-6 ">
                    <div className="filter-search-form relative filter-border">
                      <input
                        name="name"
                        type="text"
                        className="form-input h-[60px] pt-[13px] pb-[15px] text-[15px]  w-full filter-input-box bg-gray-50  border-0"
                        placeholder="What are you looking for - Job-title,Skills."
                      />
                    </div>

                    <div className="filter-search-form relative filter-border">
                      <select
                        className="form-select h-[60px] pt-[13px] pb-[15px] text-[15px]  w-full"
                        data-trigger
                        name="choices-location"
                        id="choices-location"
                        aria-label="Default select example"


                      ><KeyboardArrowDown className='text-black' />
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
                                <option value="4">More than 10 years Work</option>
                                <option value="5">Office Work</option>
                              </select>
                            </div> */}

                    <input
                      type="submit"
                      id="search"
                      name="search"
                      style={{ height: "60px" }}
                      className="btn border-2 bg-[#023066] cursor-pointer hover:bg-[#A5CF38]  hover:border-[#A5CF38] text-white searchbtn submit-btn w-100 duration-300"
                      value="Search"
                    />



                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


















      {/* =========================================================================================================== */}

      <section className="relative py-8">
        <div className="container bg-indigo-500/10 rounded-3xl py-6">


          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-700 p-6 rounded-md bg-white  sticky top-20">
                <form>
                  <div className="grid grid-cols-1 gap-3">

                    <div>
                      <label className="font-semibold mb-2">Filters</label>
                      <div className="block mt-2">
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="Ready to work now"
                            />
                            <label
                              className="form-checkbox-label text-slate-400 "
                              for="Less then 1 year"
                            >
                              Ready to work now
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 mt-1 font-semibold rounded-full h-5">
                            530
                          </span>
                        </div>





                      </div>
                    </div>

                    <div>
                      <label className="font-semibold">Resume Last Updated</label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1 ">
                        <option value="WD">Within last day</option>
                        <option value="WD">Within last 3 days</option>
                        <option value="WD">Within last week</option>
                        <option value="WD">Within last 1 month</option>
                        <option value="WD">Within last 3 months</option>
                        <option value="UI">Within last 6 months</option>
                      </select>
                    </div>


                    <div>
                      <label className="font-semibold">Distance</label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1 ">
                        <option value="WD">Within 2 miles</option>
                        <option value="WD">Within 5 miles</option>
                        <option value="UI">Within 15 miles</option>
                        <option value="WD">Within 25 miles</option>
                        <option value="WD">Within 55 miles</option>
                        <option value="UI">Within 85 miles</option>


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
                      <label className="font-semibold">Years of work experience</label>
                      <div className="block mt-2">
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="Less then 1 year"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="Less then 1 year"
                            >
                              Less then 1 year
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            345
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="1-2 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="1-2 years"
                            >
                              1-2 years
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            666
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="3-5 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="3-5 years"
                            >
                              3-5 years
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            499
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="6-10 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="6-10 years"
                            >
                              6-10 years
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            86
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="More than 10 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="More than 10 years"
                            >
                              More than 10 years
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            665
                          </span>
                        </div>

                      </div>
                    </div>

                    <div>
                      <label className="font-semibold">Job Types</label>
                      <div className="block mt-2">
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="Less then 1 year"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="Less then 1 year"
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
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="1-2 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="1-2 years"
                            >
                              Part Time
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            7
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="3-5 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="3-5 years"
                            >
                              3-5 years
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            4
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="6-10 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="6-10 years"
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
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              value=""
                              id="More than 10 years"
                            />
                            <label
                              className="form-checkbox-label text-slate-400"
                              for="More than 10 years"
                            >
                              More than 10 years
                            </label>
                          </div>

                          <span className="bg-[#A5CF38]/10 text-[#023066] text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">
                            7
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div className="inline-flex items-center mb-0">
                            <input
                              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
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
                              className="form-radio border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                              checked
                            />
                            <span className="text-slate-400">30k - 50k</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">50k - 85k</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="form-radio border-gray-200 dark:border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                              name="radio-colors"
                              value="1"
                            />
                            <span className="text-slate-400">
                              more than 85K
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
              <div className="grid grid-cols-1 gap-[25px]">





                {/* =============================================================================================================== */}

                <div className="candidate  px-6 py-4 bg-white border-blue-300 border   shadow-blue-100 shadow-lg rounded-md">
                  <span className='flex flex-wrap gap-1 text-lg font-bold  '> <span className='text-blue-600 cursor-pointer text-xl  underline'>Software developer </span><span className='text-gray-500 '> ,Hyderabad</span></span>

                  <div className='font-medium py-3'>
                    <h5 className='  pb-1'>Description:</h5>
                    <h6 className='text-gray-500 text-md'>A Software Developer with 2 years of experience at Meta is responsible for designing, coding, and maintaining software applications. Leveraging their expertise gained from previous work, they collaborate with cross-functional teams to understand project requirements, write clean and efficient code, and ensure software reliability and performance.</h6>
                    <h5>Software Engineer - <span className='text-gray-500'>Meta</span> </h5>
                    <h5>Software Engineer Intern - <span className='text-gray-500'> Amazon</span></h5>
                    <div className='py-3 gap-y-2'>
                      <h2 className=' inline-block'>Skills:</h2>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                      <Link to='/Profile' className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5 md:ml-10 mt-3   rounded-xl'>View</Link>
                      <Link to='#' onClick={() => setShow(!show)} className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5  mt-3 mx-2  rounded-xl'><Message /></Link>
                    </div>
                  </div>
                </div>



                {/* ========================================REFER--============================================ */}

                {show ?
                  <div className="refer">
                    <div className="rounded-md shadow-lg p-6 mt-6 bg-white ">

                      <div className="flex justify-between font-semibold text-lg mb-3 cursor-pointer ">
                        <span>
                          <h5 className="text-xl font-semibold ">Send a Message</h5>
                        </span>
                        <span onClick={() => setShow(!show)} className='text-white font-bold duration-300 bg-black px-1.5 hover:text-black hover:bg-white'>
                          X
                        </span>
                      </div>

                      <form method="post" name="myForm" id="myForm" className="mt-4" onsubmit="return validateForm()">
                        <p className="mb-0" id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <div className="grid grid-cols-12 gap-2">
                          <div className="md:col-span-6 col-span-12">
                            <label for="name" className="font-semibold ">Your Name:</label>
                            <input name="name" id="name" type="text" className="form-input border w-full border-slate-100 dark:border-slate-800 mt-2" placeholder="Name :" />
                          </div>

                          <div className="md:col-span-6 col-span-12">
                            <label for="email" className="font-semibold ">Your Email:</label>
                            <input name="email" id="email" type="email" className="form-input border w-full border-slate-100 dark:border-slate-800 mt-2" placeholder="Email :" />
                          </div>

                          <div className="col-span-12">
                            <label for="subject" className="font-semibold ">Your Question:</label>
                            <input name="subject" id="subject" className="form-input border w-full border-slate-100 dark:border-slate-800 mt-2" placeholder="Subject :" />
                          </div>

                          <div className="col-span-12">
                            <label for="comments" className="font-semibold ">Your Comment:</label>
                            <textarea name="comments" id="comments" className="form-input border w-full h-32 border-slate-100 dark:border-slate-800 mt-2 textarea" placeholder="Message :"></textarea>
                          </div>
                        </div>

                        <button type="submit" id="submit" name="send" className="btn p-1.5 mt-3 bg-[#023066] hover:bg-[#A5CF38] duration-300 font-bold text-white rounded-md">Send Message</button>
                      </form>
                    </div>
                  </div>
                  : null}



                {/* ========================================REFER--============================================ */}










                {/* ================================================= =====================================================*/}
                <div className="candidate  px-6 py-4 bg-white border-blue-300 border   shadow-blue-100 shadow-lg rounded-md">
                  <span className='flex flex-wrap gap-1 text-lg font-bold  '> <span className='text-blue-600 cursor-pointer text-xl  underline'>Software developer </span><span className='text-gray-500 '> ,Hyderabad</span></span>

                  <div className='font-medium py-3'>
                    <h5 className='  pb-1'>Description:</h5>
                    <h6 className='text-gray-500 text-md'>A Software Developer with 2 years of experience at Meta is responsible for designing, coding, and maintaining software applications. Leveraging their expertise gained from previous work, they collaborate with cross-functional teams to understand project requirements, write clean and efficient code, and ensure software reliability and performance.</h6>
                    <h5>Software Engineer - <span className='text-gray-500'>Meta</span> </h5>
                    <h5>Software Engineer Intern - <span className='text-gray-500'> Amazon</span></h5>
                    <div className='py-3 gap-y-2'>
                      <h2 className=' inline-block'>Skills:</h2>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                      <Link to='/Profile' className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5 md:ml-10 mt-3   rounded-xl'>View</Link>
                      <Link to='#' onClick={() => setShow(!show)} className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5  mt-3 mx-2  rounded-xl'><Message /></Link>
                    </div>
                  </div>
                </div>



                {/* ================================================================================================================== */}


                {/* ================================================= =====================================================*/}
                <div className="candidate  px-6 py-4 bg-white border-blue-300 border   shadow-blue-100 shadow-lg rounded-md">
                  <span className='flex flex-wrap gap-1 text-lg font-bold  '> <span className='text-blue-600 cursor-pointer text-xl  underline'>Software developer </span><span className='text-gray-500 '> ,Hyderabad</span></span>

                  <div className='font-medium py-3'>
                    <h5 className='  pb-1'>Description:</h5>
                    <h6 className='text-gray-500 text-md'>A Software Developer with 2 years of experience at Meta is responsible for designing, coding, and maintaining software applications. Leveraging their expertise gained from previous work, they collaborate with cross-functional teams to understand project requirements, write clean and efficient code, and ensure software reliability and performance.</h6>
                    <h5>Software Engineer - <span className='text-gray-500'>Meta</span> </h5>
                    <h5>Software Engineer Intern - <span className='text-gray-500'> Amazon</span></h5>
                    <div className='py-3 gap-y-2'>
                      <h2 className=' inline-block'>Skills:</h2>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>

                      <Link to='/Profile' className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5 md:ml-10 mt-3   rounded-xl'>View</Link>
                      <Link to='#' onClick={() => setShow(!show)} className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5  mt-3 mx-2  rounded-xl'><Message /></Link>
                    </div>
                  </div>
                </div>



                {/* ================================================================================================================== */}

                {/* ================================================= =====================================================*/}
                <div className="candidate  px-6 py-4 bg-white border-blue-300 border  shadow-blue-100 shadow-lg rounded-md">
                  <span className='flex flex-wrap gap-1 text-lg font-bold  '> <span className='text-blue-600 cursor-pointer text-xl  underline'>Software developer </span><span className='text-gray-500 '> ,Hyderabad</span></span>

                  <div className='font-medium py-3'>
                    <h5 className='  pb-1'>Description:</h5>
                    <h6 className='text-gray-500 text-md'>I'm a Software Developer with 2 years of experience at Meta is responsible for designing, coding, and maintaining software applications. Leveraging their expertise gained from previous work, they collaborate with cross-functional teams to understand project requirements, write clean and efficient code, and ensure software reliability and performance.</h6>
                    <h5>Software Engineer - <span className='text-gray-500'>Meta</span> </h5>
                    <h5>Software Engineer Intern - <span className='text-gray-500'> Amazon</span></h5>
                    <div className='py-3 gap-y-2'>
                      <h2 className=' inline-block'>Skills:</h2>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">HTML</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">CSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SASS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">SCSS</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Photoshop</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Graphics</span>
                      <span className="bg-slate-100  inline-block text-slate-900  text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">Bootstrap</span>
                      <Link to='/Profile' className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5 md:ml-10 mt-3    rounded-xl'>View</Link>
                      <Link to='#' onClick={() => setShow(!show)} className='bg-[#023066] duration-300 hover:bg-[#bbe450d7] inline-block text-white font-semibold  px-2.5 py-1.5  mt-3 mx-2  rounded-xl'> <Message /></Link>


                    </div>
                  </div>
                </div>



                {/* ================================================================================================================== */}








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
          <div className="container-fluid md:mt-24 mt-16 ">
            <div className="container ">
              <div className="grid grid-cols-1 bg-white rounded-xl">
                <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-500">
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7">
                      <div className=" relative z-1">
                        <h3 className="text-2xl font-semibold text-left text-[#023066] mb-4">Find a Candidate!</h3>
                        <p className="text-slate-500 max-w-xl">Search all Resumes all over the world and find best Candidates.</p>
                      </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-5">
                      <div className=" relative z-1">
                        <Link to='/SignUp' className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066] dark:border-[#023066] text-white rounded-md p-1.5 duration-300">Apply Now</Link>
                        <Link to='/Post-Job' className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066] dark:border-[#023066] text-white rounded-md p-1.5 ms-2 duration-300">Post a Job</Link>
                        <a href="." className="btn bg-[#023066]/5 hover:bg-[#023066] border-[#023066]/10 hover:border-[#023066] text-[#023066] hover:text-white rounded-md ms-2 p-1.5 duration-300">Learn More</a>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>


      </section>






    </div>
  )
}

export default Resume
