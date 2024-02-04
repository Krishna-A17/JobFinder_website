import React from 'react'
import bg from '../assets/images/team/banner2.png'
import img from '../assets/images/team/01.jpg'
import { CheckCircleOutline, Facebook, AddLink, LinkedIn, Instagram, Mail, CalendarMonth, House, LocationOn, Language, Phone, MyLocation } from '@mui/icons-material'
import meta from "../assets/images/company/meta.png";
import microsoft from "../assets/images/company/Microsoft.png";
import { Link } from 'react-router-dom'

const Profiles = () => {

    
   
    return (
        <div >
        <section className="relative py-9">
            <div className="container container-fluid">
                <div className="relative shrink-0">
                    <img src={bg} className="h-64 w-full object-fill lg:rounded-xl shadow " alt="" />
                </div>

                <div className="md:flex mx-4 -mt-12">
                    <div className="md:w-full">
                        <div className="relative flex items-end justify-between">
                            <div className="relative flex items-end">
                                <img src={img} className="h-28 w-28 rounded-full  bg-no-repeat  shadow  ring-4 ring-slate-50 " alt="" />
                                <div className="ms-4">
                                    <h5 className="text-lg font-semibold">Tony</h5>
                                    <p className="text-slate-400">Software developer</p>
                                </div>
                            </div>

                            {/* <div className="">
            <Link className="btn btn-icon rounded-md font-bold bg-[#023066]/10 hover:bg-[#023066] border-[#023066]/10 px-2 hover:text-white py-1.5"> Edit</Link>
            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* ============================================================================= */}

        <section className="relative mt-12 md:pb-24 pb-16 ">
            <div className="container    ">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]  ">
                    <div className="lg:col-span-9 md:col-span-7 ">
                        <h5 className="text-xl font-semibold">About me :</h5>
                        <p className="text-slate-600 mt-4">I'm a Software Developer with 2 years of experience at Meta is responsible for designing, coding, and maintaining software applications. Leveraging their expertise gained from previous work, they collaborate with cross-functional teams to understand project requirements, write clean and efficient code, and ensure software reliability and performance.</p>
                        <p className="text-slate-600 mt-4">A Software Developer with 2 years of experience at Meta is a valuable asset, bringing practical insights and skills to create impactful solutions in the ever-evolving field of software development.</p>

                        <h4 className="mt-6 text-xl font-semibold">Skills :</h4>
                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6 ">
                            <div>
                                <div className="flex justify-between  mb-2">
                                    <span className="text-slate-400">WordPress</span>
                                    <span className="text-slate-400">80%</span>
                                </div>
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div className="bg-[#023066] h-[6px] rounded-full" style={{ width: "80%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between  mb-2">
                                    <span className="text-slate-400">JavaScript</span>
                                    <span className="text-slate-400">70%</span>
                                </div>
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div className="bg-[#023066] h-[6px] rounded-full" style={{ width: "70%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between  mb-2">
                                    <span className="text-slate-400">HTML</span>
                                    <span className="text-slate-400">95%</span>
                                </div>
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div className="bg-[#023066] h-[6px] rounded-full" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between  mb-2">
                                    <span className="text-slate-400">Figma</span>
                                    <span className="text-slate-400">80%</span>
                                </div>
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div className="bg-[#023066] h-[6px] rounded-full" style={{ width: "80%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between  mb-2">
                                    <span className="text-slate-400">Photoshop</span>
                                    <span className="text-slate-400">70%</span>
                                </div>
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div className="bg-[#023066] h-[6px] rounded-full" style={{ width: "70%" }}></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between  mb-2">
                                    <span className="text-slate-400">Illustration</span>
                                    <span className="text-slate-400">60%</span>
                                </div>
                                <div className="w-full bg-gray-100  rounded-full h-[6px]">
                                    <div className="bg-[#023066] h-[6px] rounded-full" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className='languages rounded-md shadow p-6 mt-6'>
                            <div className="flex justify-between mt-6 text-xl font-semibold">
                                <h4 className="">Experience :</h4>
                                {/* <span className='text-[#275DF5] cursor-pointer'>Add</span> */}
                            </div>


                            <div className="flex mt-6">
                                <div className="text-slate-600 font-semibold min-w-[80px] text-center">
                                    <img src={meta} className="shadow-xl  h-12 w-12 mx-auto mb-2 block" alt="" /> 2019-22
                                </div>

                                <div className="ms-4">
                                    <h5 className="text-lg font-medium mb-0">Software Developer</h5>
                                    <span className=" font-medium text-lg">Meta</span>
                                    <p className="text-slate-600 mt-2 mb-0">I'm a Software Developer with 2 years of experience at Meta is responsible for designing, coding, and maintaining software applications. Leveraging their expertise gained from previous work, they collaborate with cross-functional teams to understand project requirements, write clean and efficient code, and ensure software reliability and performance. </p>
                                </div>
                            </div>

                            <div className="flex mt-6">
                                <div className="text-slate-600 font-semibold min-w-[80px] text-center ">
                                    <img src={microsoft} className=" shadow-xl h-12 w-12 mx-auto mb-2 block" alt="" /> 2017-19
                                </div>

                                <div className="ms-4">
                                    <h5 className="text-lg font-medium mb-0">UI-UX Designer</h5>
                                    <span className=" font-medium text-lg">Microsoft</span>
                                    <p className="text-slate-600 mt-2 mb-0">I'm a  UI-UX Designer  with 2 years of experience at Microsoft is responsible for designing, coding, and maintaining software applications. Leveraging their expertise gained from previous work, they collaborate with cross-functional teams to understand project requirements, write clean and efficient code, and ensure software reliability and performance. </p>
                                </div>
                            </div>
                        </div>


                        <div className="languages rounded-md shadow p-6 mt-6 ">
                            <div className="flex justify-between mt-6 text-xl font-semibold">

                                <span>Languages</span>
                                {/* <span className='text-[#275DF5] cursor-pointer'>Add Languages</span> */}

                            </div>


                            <div className="grid grid-cols-4 font-medium text-gray-500 mt-6 gap-2" >
                                <span>Languages</span>
                                <span>Speak</span>
                                <span>Read</span>
                                <span>Write</span>

                            </div>
                            <hr />
                            <div className=' py-2 grid grid-cols-4 font-medium mt-3 gap-2 '>
                                <span>Telugu</span>
                                <span><CheckCircleOutline className='text-gray-600' /></span>
                                <span><CheckCircleOutline className='text-gray-600' /></span>
                                <span><CheckCircleOutline className='text-gray-600' /></span>

                                <span>English</span>
                                <span><CheckCircleOutline className='text-gray-600' /></span>
                                <span><CheckCircleOutline className='text-gray-600' /></span>
                                <span><CheckCircleOutline className='text-gray-600' /></span>
                            </div>





                        </div>

                        <div className="rounded-md shadow p-6 mt-6">
                                <h5 className="text-xl font-semibold ">Contact Me:</h5>

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
                    <div className="lg:col-span-3 md:col-span-5 text-center ">
                        <div className="bg-slate-50  rounded-md shadow  p-6 sticky top-20">
                            <h5 className="text-lg font-semibold">Personal Detail:</h5>
                            <ul className="list-none mt-4">
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><Mail className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">Email  :</span></span>

                                    <span><a href="#.">tony@gmail.com</a> </span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><CalendarMonth className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">D.O.B. :</span></span>

                                    <span>17th Mar, 2001</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><House className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">Address :</span></span>

                                    <span>Jublihills</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><LocationOn className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">City :</span></span>

                                    <span> Hyderabad</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><Language className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">Country :</span></span>

                                    <span>India</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><MyLocation className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">Postal Code :</span></span>

                                    <span>500005</span>
                                </li>
                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><Phone className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">Mobile :</span></span>

                                    <span>(+91) 984805566</span>
                                </li>

                                <li className="flex justify-between mt-3 items-center font-medium">
                                    <span><AddLink className='me-3 text-gray-400 pb-1' /><span className="text-slate-400 me-3">Social :</span></span>


                                    <ul className="list-none ">
                                        <li className="inline"><Link target="_blank" className="btn  text-[#0866FF]"><Facebook style={{ fontSize: "30px" }} /></Link></li>
                                        <li className="inline"><Link target="_blank" className="btn  text-[#0077B5]"><LinkedIn style={{ fontSize: "30px" }} /></Link></li>
                                        <li className="inline"><Link target="_blank" className="btn  text-[#E7495B]"><Instagram style={{ fontSize: "30px" }} /></Link></li>

                                    </ul>
                                </li>

                                <li class="mt-3  bg-white p-3 rounded-md shadow ">
                                        <div class=" text-center mb-3">

                                            <span class="font-medium text-center">Resume.pdf</span>
                                        </div>

                                        <a href="#." className=" p-1.5  bg-[#023066] hover:bg-[#A5CF38] duration-300 font-bold text-white rounded-md w-full" ><i class="uil uil-file-download-alt"></i> Download CV</a>
                                    </li>


                            </ul>
                        </div>
                    </div>



                </div>
            </div>




        </section>

    </div>
    )
}

export default Profiles
