import React from 'react'
import bg2 from "../../assets/pricing.jpg";
import { Link } from 'react-router-dom';
import Whyyou from '../Why_you';
const Pricing = () => {
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28  bg-no-repeat  bg-cover     opacity-[0.8]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* <div className="absolute inset-0 "></div> */}
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#ff853a] text-6xl font-semibold focus:ring-4">
                Pricing
              </h1>
            </div>
          </div>
        </div>
      </section>


      {/* ================================================================================================================== */}
      <section className="relative lg:py-20 py-11">
        <div className="container">
        <h1 className='text-center font-bold text-4xl mb-6 text-[#023066]'>Pricing Plans</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-[20px]">
            <div className="group hover:border-2 hover:border-[#023066]  relative shadow-lg hover:shadow-2xl  rounded-md bg-green-400/10  duration-500  ">
              <div className="p-6 py-8">
                <h6 className="text-lg font-bold uppercase mb-5 text-[#023066]">Free</h6>

                <div className="flex mb-5">
                  <span className="text-xl font-semibold">₹</span>
                  <span className="price text-4xl font-bold mb-0">0</span>
                  <span className="text-xl font-semibold self-end mb-1">/mo</span>
                </div>

                <ul className="list-none text-slate-500 border-t border-gray-100 dark:border-gray-700 pt-5">
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> Full Access</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i>(10 Posts)</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i>--</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i>--</li>
                </ul>
                <div className="button mt-6">
                  <Link to='/Signup' className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066]  text-white rounded-md mt-5 p-1.5">Get Started</Link>
                </div>
              </div>
            </div>

            <div className="group hover:border-2 hover:border-[#023066]  relative shadow-lg hover:shadow-2xl  rounded-md bg-yellow-500/10  duration-500  ">
              <div className="p-6 py-8">
                <h6 className="text-lg font-bold uppercase mb-5 text-[#023066]">Basic</h6>

                <div className="flex mb-5">
                  <span className="text-xl font-semibold">₹</span>
                  <span className="price text-4xl font-bold mb-0">199</span>
                  <span className="text-xl font-semibold self-end mb-1">/2mo</span>
                </div>

                <ul className="list-none text-slate-500 border-t border-gray-100 dark:border-gray-700 pt-5">
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> Full Access</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> (50 Posts)</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> Free Appointments</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i>  24/7 support</li>
                </ul>
                <div className="button mt-6">
                  <a href="#." className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066]  text-white rounded-md mt-5 p-1.5">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="group hover:border-2 hover:border-[#023066]  relative shadow-lg hover:shadow-2xl  rounded-md bg-blue-500/10  duration-500  ">
              <div className="p-6 py-8">
                <h6 className="text-lg font-bold uppercase mb-5 text-[#023066]">Premium</h6>

                <div className="flex mb-5">
                  <span className="text-xl font-semibold">₹</span>
                  <span className="price text-4xl font-bold mb-0">299</span>
                  <span className="text-xl font-semibold self-end mb-1">/3mo</span>
                </div>

                <ul className="list-none text-slate-500 border-t border-gray-100 dark:border-gray-700 pt-5">
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> Full Access</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> (100 Posts)</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> Free Appointments</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i>  24/7 support</li>
                </ul>
                <div className="button mt-6">
                  <a href="#." className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066]  text-white rounded-md mt-5 p-1.5">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="group hover:border-2 hover:border-[#023066]  relative shadow-lg hover:shadow-2xl  rounded-md bg-pink-400/10  duration-500  ">
              <div className="p-6 py-8">
                <h6 className="text-lg font-bold uppercase mb-5 text-[#023066]">Unlimited Resume Search</h6>

                <div className="flex mb-5">
                  <span className="text-xl font-semibold">₹</span>
                  <span className="price text-4xl font-bold mb-0">399</span>
                  <span className="text-xl font-semibold self-end mb-1">/4mo</span>
                </div>

                <ul className="list-none text-slate-500 border-t border-gray-100 dark:border-gray-700 pt-5 ">
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> Full Access</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> (50 Posts)</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> Free Appointments</li>
                  <li className="my-2 flex"><i className="uil uil-check-circle text-[#023066] text-xl me-2"></i> 24/7 support</li>
                </ul>
                <div className="button mt-6">
                  <a href="#." className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066]  text-white rounded-md mt-5 p-1.5">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

       <div className="why-you-love">
        <Whyyou/>
       </div>

        <div className="container-fluid md:mt-24 mt-16">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-xl">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className=" relative z-1">
                      <h3 className="text-2xl font-semibold text-left text-[#023066] mb-4">Explore a job now!</h3>
                      <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 10000+ companies worldwide.</p>
                    </div>
                  </div>

                  <div className="lg:col-span-4 md:col-span-5">
                    <div className=" relative z-1">
                      <Link to='/SignUp' className="btn bg-[#023066] hover:bg-[#A5CF38] border-[#023066] dark:border-[#023066] text-white rounded-md p-1.5 duration-500 ">Apply Now</Link>
                      <a href="/Home" className="btn bg-[#023066]/5 hover:bg-[#023066] border-[#023066]/10 hover:border-[#023066] text-[#023066] hover:text-white rounded-md ms-2 p-1.5 duration-500 ">Learn More</a>
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

export default Pricing
