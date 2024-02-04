import React from 'react'
import { Business, LocationOn, Person, Work, DesktopWindows, Book, AccessTime, CurrencyRupee } from "@mui/icons-material";
import icon from '../../assets/images/svg/icon.png'

const JobDetails = () => {
    return (
        <div className='Jobdetails'>
            <div className="container mt-10 py-7">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white ">
                            <img src={icon} className="rounded-full h-28 w-28 p-4 bg-white  shadow dark:shadow-gray-700" alt="" />

                            <div className="md:ms-4 md:mt-0 mt-6">
                                <h5 className="text-xl font-semibold">Back-End Developer</h5>
                                <div className="mt-2">
                                    <span className="text-slate-600 font-medium me-2 inline-block"><Business className='text-[18px] text-[#023066] me-1'/>Google</span>
                                    <span className="text-slate-600 font-medium me-2 inline-block"><LocationOn className='text-[18px] text-[#023066] me-1'/>Banglore</span>
                                </div>
                            </div>
                        </div>

                        <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

                        <p className="text-slate-600 mt-4">Google is looking for a highly skilled and passionate Backend Developer to join our world-class engineering team. As a Backend Developer, you will play a pivotal role in designing, developing, and maintaining the core systems that power our industry-leading products and services.</p>
                        <p className="text-slate-600 mt-4"> You will work on complex, large-scale projects, collaborate with cross-functional teams, and leverage your expertise in distributed systems and server-side technologies to drive innovation.</p>
                        <p className="text-slate-600 mt-4">Design and Develop Scalable Backend Systems: Create robust, efficient, and scalable backend systems that support Google's products and services, ensuring high performance and reliability.</p>

                        <h5 className="text-lg font-semibold mt-6">Responsibilities and Duties: </h5>
                        <p className="text-slate-600 mt-4">Code and Test: Write clean, maintainable, and well-documented code, conduct thorough testing, and troubleshoot issues to ensure software quality.</p>
                        <ul className="list-none">
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Participate in requirements analysis</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Write clean, scalable code using C# and .NET frameworks</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Test and deploy applications and systems</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Revise, update, refactor and debug code</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Improve existing software</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Develop documentation throughout the software development life cycle (SDLC)</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Serve as an expert on applications and provide technical support</li>
                        </ul>

                        <h5 className="text-lg font-semibold mt-6">Required Experience, Skills and Qualifications: </h5>
                        <p className="text-slate-600 mt-4">Proficiency in one or more programming languages, such as Java, Python, Go, or C++.
                            Strong understanding of database design, storage solutions, and data modeling.</p>
                        <ul className="list-none">
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Proven experience as a .NET Developer or Application Developer</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Experience designing, developing and creating RESTful web services and APIs</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Basic know how of Agile process and practices</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Good understanding of object-oriented programming.</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Good understanding of concurrent programming.</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Sound knowledge of application architecture and design.</li>
                            <li className="text-slate-600 mt-2"><i className="uil uil-arrow-right text-gray-500 me-1"></i>Excellent problem solving and analytical skills</li>
                        </ul>

                        <div className="mt-5">
                            <a href="." className="btn rounded-md bg-[#023066] hover:bg-[#A5CF38] text-white md:ms-2 w-full md:w-auto p-2">Apply Now</a>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6 ">
                        <div className="shadow-lg dark:shadow-gray-600 rounded-md bg-gray-100  sticky top-20">
                            <div className="p-6">
                                <h5 className="text-lg font-semibold">Job Information</h5>
                            </div>
                            <div className="p-6 border-t border-slate-100 dark:border-t-gray-700 ">
                                <ul className="list-none">
                                    <li className="flex items-center">
                                        <Person className='h-5 w-5 text-[#023066]'/>

                                        <div className="ms-4">
                                            <p className="font-medium">Employee Type:</p>
                                            <span className="text-gray-500 font-medium text-sm">Full Time</span>
                                        </div>
                                    </li>

                                    <li className="flex items-center mt-3">
                                        <LocationOn className='h-5 w-5 text-[#023066]'/>

                                        <div className="ms-4">
                                            <p className="font-medium ">Location:</p>
                                            <span className="text-gray-500 font-medium text-sm">Banglore</span>
                                        </div>
                                    </li>

                                    <li className="flex items-center mt-3">
                                        <DesktopWindows className='h-5 w-5 text-[#023066]'/>

                                        <div className="ms-4">
                                            <p className="font-medium">Job Type:</p>
                                            <span className="text-gray-500 font-medium text-sm">Back-end Developer</span>
                                        </div>
                                    </li>

                                    <li className="flex items-center mt-3">
                                         <Work className='h-5 w-5 text-[#023066]'/>

                                        <div className="ms-4">
                                            <p className="font-medium">Experience:</p>
                                            <span className="text-gray-500 font-medium text-sm">2+ years</span>
                                        </div>
                                    </li>

                                    <li className="flex items-center mt-3">
                                         <Book className='h-5 w-5 text-[#023066]'/>

                                        <div className="ms-4">
                                            <p className="font-medium">Qualifications:</p>
                                            <span className="text-gray-500 font-medium text-sm">MCA</span>
                                        </div>
                                    </li>

                                    <li className="flex items-center mt-3">
                                        <CurrencyRupee className='h-5 w-5 text-[#023066]'/>

                                        <div className="ms-4">
                                            <p className="font-medium">Salary:</p>
                                            <span className="text-gray-500 font-medium text-sm">3.5L - 4.5L</span>
                                        </div>
                                    </li>

                                    <li className="flex items-center mt-3">
                                        <AccessTime className='h-5 w-5 text-[#023066]'/>

                                        <div className="ms-4">
                                            <p className="font-medium">Date posted:</p>
                                            <span className="text-gray-500 font-medium text-sm">17th Mar, 2023</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
