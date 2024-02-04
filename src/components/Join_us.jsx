import React from 'react'
import bg2 from "../assets/b5.png";

const Join_us = () => {
  return (
    
      <section className="bg-gradient-to-r from-black to-black bg-cover  ">
          <div
            className="relative  w-full py-28    opacity-[1.5] bg-cover"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            {/* <div className="absolute inset-0 "></div> */}
            <div className="container">
              <div className="grid grid-cols-1 text-center  ">
                <h1 className="text-[#A5CF38]  text-5xl shadow-lg font-[655]">
                  Join Us Today Without Any Hesitation
                </h1>
                <p className="font-medium py-5 text-white">
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 10000+
                  companies worldwide.
                </p>

                <div className="join-buttons  ">
                  <button className=" center rounded-lg bg-[#023066] py-3  px-6 font-sans text-xs font-bold uppercase text-white hover:bg-orange-500 hover:duration-[0.4s] hover:shadow-lg ">
                    Im a Candidate
                  </button>

                  <button className=" center rounded-lg bg-[#023066] py-3 px-6 ml-3 font-sans text-xs font-bold uppercase text-white hover:bg-orange-500 hover:duration-[0.4s] hover:shadow-lg ">
                    request free demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
   
  )
}

export default Join_us
