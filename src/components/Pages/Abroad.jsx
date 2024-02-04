import React from 'react'
import bg2 from "../../assets/abroad.jpg";
import { Link } from 'react-router-dom'
import clg1 from '../../assets/colleges/ppuniversity.png'
import clg2 from '../../assets/colleges/ttuniversity.png'
import { Pagination, } from "@mui/material";
import { KeyboardArrowDown } from '@mui/icons-material';

const Abroad = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0)
  };
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28 bg-no-repeat   bg-cover   opacity-[0.8]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* <div className="absolute inset-0 "></div> */}
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#ff853a] text-6xl font-semibold focus:ring-4">
                Abroad Study
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================================ */}

      <section className="relative md:py-24 py-14">
        <div className="container  bg-pink-300/10 py-6 rounded-3xl">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <div className="shadow dark:shadow-gray-700 p-6 rounded-md bg-white  sticky top-20">
                <form>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="font-semibold">Country </label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1 "> <KeyboardArrowDown />
                        <option value="USA">USA</option>
                        <option value="Russia">Russia</option>
                        <option value="Japan">Japan</option>
                        <option value="">Paris</option>
                        <option value="">Europe</option>
                        <option value="">Austrlia</option>
                      </select>
                    </div>


                    <div>
                      <label className="font-semibold">Select State</label>
                      <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1 ">

                        <option value="">Andhra pradesh</option>
                        <option value="">Telengana</option>
                        <option value="">Karnataka</option>
                      </select>
                    </div>

                    <div className="mt-2">
                      <label for="searchname" className="font-semibold ">
                        Search College
                      </label>
                      <input
                        name="College name"
                        id="searchname"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Search"
                      />
                    </div>




                    <div>
                      <label className="font-semibold">TOEFL Score Below</label>
                      <input
                        name="TOEFL Score"
                        id="Toelscore"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Enter TOEFL Score 0-120"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">IELTS Score Below</label>
                      <input
                        name="IELTS Score"
                        id="IELTSScore"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Enter IELTS Score 1.0-9.0"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">GRE Score Below</label>
                      <input
                        name="GRE Score Below"
                        id="GREscore"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Enter GRE Score 260-340"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">GMAT Score Below</label>
                      <input
                        name="GMAT Score Below"
                        id="GMATscore"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Enter GMAT Score 200-800"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">SAT Score Below</label>
                      <input
                        name="SAT Score Below"
                        id="SATscore"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Enter SAT Score 400-1600"
                      />
                    </div>


                    <div>
                      <label className="font-semibold">ACT Score Below</label>
                      <input
                        name="ACT Score Below"
                        id="ACTscore"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Enter ACT Score 1-36"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">GPA Score Below</label>
                      <input
                        name="GPA Score Below"
                        id="GPAscore"
                        type="text"
                        className="form-input border border-slate-100 dark:border-slate-800 ps-10 w-full"
                        placeholder="Enter GPA Score 200-800"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">English Medium Waiver</label>
                      <select className="form-select  form-input border border-slate-100 dark:border-slate-800 block w-full mt-1 ">

                        <option value="">Select English Medium Waiver</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-semibold">English Waiver Country</label>
                      <select className="form-select  form-input border border-slate-100 dark:border-slate-800 block w-full mt-1 ">

                        <option value="">Select Country</option>
                        <option value="">Yes</option>
                        <option value="">No</option>
                      </select>
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
                <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white  ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="">
                        <img src={clg2} className="h-24 w-36" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          TENNESSEE TECH UNIVERSITY
                        </a>
                        <span className="block text-sm text-slate-400">
                          Cookeville, TN
                        </span>
                      </div>
                    </div>

                    {/* <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Full Time
                    </span> */}
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="https://www.tntech.edu/"
                        className=" hover:text-[#023066] font-semibold text-md transition-all duration-500"
                      >
                        www.tntech.edu
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="">Apply</Link></button>
                    </div>
                    {/* <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Banglore
                    </h6> */}
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
                      {/* w-14 h-14 flex items-center justify-center bg-white  shadow dark:shadow-gray-700 rounded-md */}
                      <div className="">
                        <img src={clg1} className="h-24 w-36" alt="" />
                      </div>

                      <div className="ms-3">
                        <a
                          href="."
                          className="block text-[16px] font-semibold hover:text-[#023066] transition-all duration-500"
                        >
                          PITTSBURG STATE UNIVERSITY
                        </a>
                        <span className="block text-sm text-slate-400">
                          Pittsburg, KS
                        </span>
                      </div>
                    </div>

                    {/* <span className="bg-[#A5CF38]/10 group-hover:bg-[#023066] inline-block text-[#023066] group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                      Part Time
                    </span> */}
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between">
                      <a
                        href="https://www.pittstate.edu/"
                        className=" hover:text-[#023066] font-semibold text-md transition-all duration-500"
                      >
                        www.pittstate.edu
                      </a>
                      <button className="btn px-[6px] py-[4px] bg-[#023066] text-white font-semibold hover:bg-[#A5CF38] duration-300 rounded-lg"><Link to="">Apply</Link></button>
                    </div>
                    {/* <h6 className="text-base font-medium">
                      <i className="uil uil-map-marker"></i> Hyderabad
                    </h6> */}
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
                  <Pagination className="inline-flex items-center -space-x-px" count={15} variant="outlined"
                    onChange={e => handleChange(e.target.textContent)} />
                </div>
              </div>
            </div>




          </div>
          <div className="container-fluid md:mt-24 mt-16 ">
            <div className="container">
              <div className="grid grid-cols-1 bg-white">
                <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-500">
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7">
                      <div className=" relative z-1">
                        <h3 className="text-2xl font-semibold text-left text-[#023066] mb-4">Find a College and Study Abroad!</h3>
                        <p className="text-slate-400 max-w-xl">Search all Colleges. Read reviews on over 100+ Colleges worldwide.</p>
                      </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-5">
                      <div className=" relative z-1">
                        <Link to='/SignUp' className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066] dark:border-[#023066] text-white rounded-md p-1.5 duration-300">Apply Now</Link>
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

export default Abroad
