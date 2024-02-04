import React from 'react'
import { Phone, ConnectWithoutContact, AccessTime } from "@mui/icons-material";

const Why_you = () => {
  return (
    <div>
      <div className="container md:mt-24 mt-16  bg-violet-400/10 py-6 rounded-3xl">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-3xl leading-normal font-semibold text-[#023066]">
              Here's why you'll love it JOBFINDER
            </h3>

            <p className="text-slate-500 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group p-6 shadow shadow-gray-700 rounded-md bg-white hover:bg-[#ededf3]   text-center transition-all duration-500">
              <div className="w-16 h-16 flex items-center  group-hover:text-[#A5CF38] justify-center mx-auto bg-[#A5CF38]/5 group-hover:bg-[#023066] shadow shadow-gray-700 rounded-lg transition-all duration-500">
                <Phone />
              </div>

              <div className="mt-4">
                <a
                  href="."
                  className="text-lg font-bold text-blue-800 transition-all duration-500"
                >
                  24/7 Support
                </a>

                <p className="text-slate-500 mt-3 mb-2">
                  Many desktop publishing now use and a search for job.
                </p>

                <a
                  href="."
                  className="hover:text-[#023066] font-medium transition-all duration-500"
                >
                  Read More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* <div className="group p-6 shadow shadow-gray-700 rounded-md bg-white hover:bg-[#A5CF38]/5  text-center transition-all duration-500">
              <div className="w-16 h-16 flex items-center group-hover:text-[#A5CF38] justify-center mx-auto bg-[#A5CF38]/5 group-hover:bg-[#023066] shadow shadow-gray-700 rounded-lg transition-all duration-500">
                <i className="uil uil-atom text-[30px] text-[#023066] group-hover:text-white"></i>
              </div>

              <div className="mt-4">
                <a href="." className="text-lg font-bold text-blue-800 transition-all duration-500">Tech & Startup Jobs</a>

                <p className="text-slate-500 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

                <a href="." className="hover:text-[#023066] font-medium transition-all duration-500">Read More <i className="uil uil-arrow-right"></i></a>
              </div>
            </div> */}

            <div className="group p-6 shadow shadow-gray-700 rounded-md bg-white hover:bg-[#ededf3]   text-center transition-all duration-500">
              <div className="w-16 h-16 flex items-center group-hover:text-[#A5CF38] justify-center mx-auto bg-[#A5CF38]/5 group-hover:bg-[#023066] shadow shadow-gray-700 rounded-lg transition-all duration-500">
                <ConnectWithoutContact />
              </div>

              <div className="mt-4">
                <a
                  href="."
                  className="text-lg font-bold text-blue-800 transition-all duration-500"
                >
                  Quick & Easy
                </a>

                <p className="text-slate-500 mt-3 mb-2">
                  Many desktop publishing now use and a search for job.
                </p>

                <a
                  href="."
                  className="hover:text-[#023066] font-medium transition-all duration-500"
                >
                  Read More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="group p-6 shadow shadow-gray-700 rounded-md bg-white hover:bg-[#ededf3]   text-center transition-all duration-500">
              <div className="w-16 h-16 flex items-center group-hover:text-[#A5CF38] justify-center mx-auto bg-[#A5CF38]/5 group-hover:bg-[#023066] shadow shadow-gray-700 rounded-lg transition-all duration-500">
                <AccessTime />
              </div>

              <div className="mt-4">
                <a
                  href="."
                  className="text-lg font-bold text-blue-800 transition-all duration-500"
                >
                  Save Time
                </a>

                <p className="text-slate-500 mt-3 mb-2">
                  Many desktop publishing now use and a search for job.
                </p>

                <a
                  href="."
                  className="hover:text-[#023066] font-medium transition-all duration-500"
                >
                  Read More <i className="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Why_you
