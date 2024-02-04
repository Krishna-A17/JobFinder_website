import React from 'react'
import bg2 from "../../assets/b3.png";
import Datatable from "../datatable.jsx";
import Profiles from '../Top_profiles';
import Jobs from '../Companies';
import JoinUs from '../Join_us';
const Sponshirship = () => {
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div container
          className="relative table w-full py-28    opacity-[1.5]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* <div className="absolute inset-0 "></div> */}
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#A5CF38] text-6xl font-semibold focus:ring-4">
                Sponshirship
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      <div className="jobs">
        <Jobs/>
      </div>

      {/* ===================================================================================== */}
      {/* <div className=' '>
        <div className=" ">
          <Datatable />
        </div>

      </div> */}
      {/* ================================================================================== */}

      <div className="profiles">
      <Profiles/>
      </div>


      <div className="Join-us">
        <JoinUs/>
      </div>
    </div>
  )
}

export default Sponshirship
