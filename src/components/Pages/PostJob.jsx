import React from 'react'
import bg2 from "../../assets/b5.png";
// import { CurrencyRupee } from '@mui/icons-material'

const PostJob = () => {
  return (
    <div>
       <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28    opacity-[1.5]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="absolute inset-0 "></div>
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#A5CF38] sm:text-3xl md:text-6xl  font-semibold focus:ring-4 ">
               Post Jobs
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================================== */}


      <section className="relative bg-slate-50  lg:py-24 py-16">
            <div className="container">
                <div className="lg:flex justify-center">
                    <div className="lg:w-3/4">
                        <div className="p-6 bg-white shadow-xl border-2 rounded-md">
                            <form className="text-left">
                                <div className="grid grid-cols-1">
                                    <h5 className="text-lg font-semibold">Job Details:</h5>
                                </div>

                                <div className="grid grid-cols-12 gap-4 mt-4">
                                    <div className="col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" for="RegisterName">Job Title:</label>
                                        <input id="RegisterName" type="text" className="w-full form-input border border-slate-100  mt-1" placeholder="Web Developer" />
                                    </div>

                                    <div className="col-span-12 ltr:text-left rtl:text-right">
                                        <label for="comments" className="font-semibold">Job Description:</label>
                                        <textarea name="comments" id="comments" className="w-full form-input border border-slate-100  mt-1 textarea" placeholder="Write Job Description :"></textarea>
                                    </div>

                                    <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold">Job Categories:</label>
                                        <select className="form-select form-input border border-slate-100  block w-full mt-1">
                                            <option value="WD">Web Designer</option>
                                            <option value="WD">Web Developer</option>
                                            <option value="UI">UI / UX Desinger</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold">Job Type:</label>
                                        <select className="form-select form-input border border-slate-100  block w-full mt-1">
                                            <option value="FT">Full Time</option>
                                            <option value="PT">Part Time</option>
                                            <option value="WFH">Work From Home</option>
                                            <option value="RJ">Remote Job</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold">Salary:</label>
                                        <select className="form-select form-input border border-slate-100  block w-full mt-1">
                                            
                                            <option value="MONTH">Monthly</option>
                                            <option value="HOURL">Hourly</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold md:invisible md:block hidden">Min:</label>
                                        <div className="relative mt-1">
                                            {/* <span className="w-10 h-10 bg-slate-50  border border-slate-100  absolute top-0 start-0 overflow-hidden rounded">
                                                <CurrencyRupee/>
                                            </span> */}
                                            <input type="number" className="w-full form-input border border-slate-100  ps-12" placeholder=" ₹ min" name="minsalary" />
                                        </div>
                                    </div>

                                    <div className="md:col-span-3 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold md:invisible md:block hidden">Max:</label>
                                        <div className="relative mt-1">
                                            {/* <span className="w-10 h-10 bg-slate-50  border border-slate-100  absolute top-0 start-0 overflow-hidden rounded">
                                                <CurrencyRupee/>
                                            </span> */}
                                            <input type="number" className=" w-full form-input border border-slate-100  ps-12" placeholder=" ₹ max" name="maxsalary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-8">
                                    <h5 className="text-lg font-semibold">Skill & Experience:</h5>
                                </div>

                                <div className="grid grid-cols-12 gap-4 mt-4">
                                    <div className="col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" for="Skillname">Skills:</label>
                                        <input id="Skillname" type="text" className="w-full form-input border border-slate-100  mt-1" placeholder="Web Developer" />
                                    </div>

                                    <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" for="Qualificationname">Qualifications:</label>
                                        <input id="Qualificationname" type="text" className="w-full form-input border border-slate-100  mt-1" placeholder="Qualifications" />
                                    </div>

                                    <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" for="Experiencename">Experience:</label>
                                        <input id="Experiencename" type="text" className="w-full form-input border border-slate-100  mt-1" placeholder="Experience" />
                                    </div>

                                    <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right ">
                                        <label className="font-semibold">Industry:</label>
                                        <select className=" form-select form-input border border-slate-100  block w-full mt-1">
                                            <option value="">IT & Services</option>
                                            <option value="">IOT</option>
                                            <option value="">Cloud Emerging Technolgies</option>
                                            <option value="">Beverages</option>
                                            <option value="">Chemicals</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-6 col-span-12 ltr:text-left rtl:text-right ">
                                        <label className="font-semibold">Education:</label>
                                        <select className=" form-select form-input border border-slate-100  block w-full mt-1">
                                            <option value="">BTech</option>
                                            <option value="">BBA</option>
                                            <option value="">B.SC</option>
                                            
                                        </select>
                                    </div>
                                </div>

                             

                                <div className="grid grid-cols-12 gap-4 mt-6">
                                    <div className="col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold" for="Address">Address:</label>
                                        <input id="Address" type="text" className="w-full form-input border border-slate-100  mt-1" placeholder="Address" />
                                    </div>
                                    
                                    <div className="md:col-span-4 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold">Country:</label>
                                        <select className="form-select form-input border border-slate-100  block w-full mt-1">
                                            <option value="">India</option>
                                            <option value="">USA</option>
                                            <option value="">China</option>
                                            <option value="">Japan</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-4 col-span-12 ltr:text-left rtl:text-right">
                                        <label className="font-semibold">State:</label>
                                        <select className="form-select form-input border border-slate-100  block w-full mt-1">
                                            <option value="CAL">AndhraPradesh</option>
                                            <option value="TEX">Telangana</option>
                                            <option value="FLOR">Karnataka</option>
                                        </select>
                                    </div>

                                    <div className="col-span-12 ltr:text-left rtl:text-right">
                                        <div className="w-full leading-[0] border-0">
                                       
                                        <iframe frameborder="0" title='location'   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9050953727!2d78.24323113439742!3d17.412608642828793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699427686264!5m2!1sen!2sin" className="w-full h-[200px] rounded shadow" allowfullscreen></iframe>
                                           
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 mt-4">
                                    <div>
                                        <button type="submit" id="submit" name="send" className="btn p-1.5 rounded-md bg-[#023066] cursor-pointer hover:bg-[#A5CF38] border-[#A5CF38] hover:border-[#A5CF38] text-white">Post Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>













    </div>
  )
}

export default PostJob
