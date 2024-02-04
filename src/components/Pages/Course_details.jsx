import React from 'react'
import { Business, LocationOn, Person, Work, DesktopWindows, Book, AccessTime, CurrencyRupee } from "@mui/icons-material";
import icon from '../../assets/images/svg/icon.png'

const Course_details = () => {
    return (
        <div>
            <div className='Jobdetails  py-6   px-11 '>
                <div className="container  bg-red-400/10 rounded-3xl py-6  ">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6 bg-white p-4 rounded-md shadow-md shadow-gray-500">
                            <div className="md:flex items-center p-6 shadow shadow-gray-700  rounded-md bg-white ">
                                <img src={icon} className="rounded-full h-28 w-28 p-4 bg-white  shadow shadow-gray-700" alt="" />

                                <div className="md:ms-4 md:mt-0 mt-6">
                                    <h5 className="text-xl font-semibold">Amazon Web Services (AWS) </h5>
                                    {/* <div className="mt-2">
                                        <span className="text-slate-600 font-medium me-2 inline-block"><Business className='text-[18px] text-[#023066] me-1' />AWS</span>
                                        <span className="text-slate-600 font-medium me-2 inline-block"><LocationOn className='text-[18px] text-[#023066] me-1' />Banglore</span>
                                    </div> */}
                                </div>
                            </div>

                            <h5 className="text-lg font-semibold mt-6">About this Course</h5>

                            <p className="text-slate-600 mt-4">In this comprehensive AWS course led by industry experts, you will learn skills such as AWS Elastic Cloud Compute, Simple Storage Service, VPC, Aurora database service, Load Balancing, Auto Scaling, AWS S3, etc. This AWS training will also prepare you for the AWS Solutions Architect certification exam.</p>
                            <p className="text-slate-600 mt-4">AWS Solutions Architect Certification</p>
                            <p className="text-slate-600 mt-4">Design and Develop Scalable Backend Systems: Create robust, efficient, and scalable backend systems that support Google's products and services, ensuring high performance and reliability.</p>

                            <h5 className="text-lg font-semibold mt-6">What will you learn in the online AWS training? </h5>
                            <p className="text-slate-600 mt-4">Code and Test: Write clean, maintainable, and well-documented code, conduct thorough testing, and troubleshoot issues to ensure software quality.</p>
                            <ul className="list-none">
                                <li className="text-slate-600 mt-2">Efficient design and deployment of the AWS system</li>
                                <li className="text-slate-600 mt-2">Cost-evaluation and cost-control mechanisms</li>
                                <li className="text-slate-600 mt-2">Elastic Load Balancing on multiple EC2 instances</li>
                                <li className="text-slate-600 mt-2">Data ingress and egress on AWS</li>
                                <li className="text-slate-600 mt-2">Identifying relevant and suitable uses of AWS architecture</li>
                                <li className="text-slate-600 mt-2">Develop documentation throughout the software development life cycle (SDLC)</li>
                                <li className="text-slate-600 mt-2">Serve as an expert on applications and provide technical support</li>
                            </ul>

                            <h5 className="text-lg font-semibold mt-6">Skills </h5>
                            <li className="text-slate-600 mt-2">EBS, EFS, and FS</li>
                            <li className="text-slate-600 mt-2">AWS Databases</li>
                            <li className="text-slate-600 mt-2">AWS EC2 and</li>
                            <li className="text-slate-600 mt-2">Elastic Beanstalk </li>
                            <li className="text-slate-600 mt-2">Amazon S3, AWS Lambda</li>
                            <li className="text-slate-600 mt-2">AWS RDS and DynamoDB</li>
                            <li className="text-slate-600 mt-2">CloudWatch and IAM</li>

                            <ul className="list-none">
                                <h5 className="text-lg font-semibold mt-6">What are the advantages of this AWS certification course?</h5>
                                <li className="text-slate-600 mt-2">POur AWS training program is designed to help you master the AWS Cloud from the basics and pass the AWS exam on your first try. You can build a successful career in AWS with our well-designed course, which gives you access to our extensive AWS community, lifetime access to course materials with upgrades, and more.</li>

                                <h5 className="text-lg font-semibold mt-6">What are the prerequisites for taking up AWS training and certification?</h5>
                                <li className="text-slate-600 mt-2">Although there are no prerequisites for this AWS Cloud training, basic knowledge of any programming language and prior experience in cloud computing platforms will be beneficial.</li>
                                <h5 className="text-lg font-semibold mt-6">Why should you go for this AWS course?</h5>
                                <li className="text-slate-600 mt-2">Today, cloud computing is no longer optional. It is critical to the success of any of the biggest enterprises on earth. Various companies are adopting the cloud infrastructure and hence, getting AWS training and certification can open up doors for you to virtually unlimited job opportunities that are offering highly competitive salaries. Our AWS courses are completely oriented toward practical industry applications, and hence they give you a clear advantage.</li>
                                <h5 className="text-lg font-semibold mt-6">What are the different career paths in AWS after Completing this AWS certification training?</h5>
                                <li className="text-slate-600 mt-2">AWS Cloud Architect,AWS Cloud Engineer,AWS Developer,AWS Security Engineer</li>
                            </ul>


                        </div>

                        <div className="lg:col-span-4 md:col-span-6 ">
                            <div className="shadow-lg shadow-gray-600 rounded-md  sticky top-20  bg-white">
                                <div className="p-6">
                                    <h5 className="text-lg font-semibold">Course Information</h5>
                                </div>
                                <div className="p-6 border-t border-slate-100 border-t-gray-700 ">
                                    <ul className="list-none">
                                        <li className="flex items-center">
                                            <Person className='h-5 w-5 text-[#023066]' />

                                            <div className="ms-4">
                                                <p className="font-medium">Course Type</p>
                                                <span className="text-gray-500 font-medium text-sm">Offline </span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <LocationOn className='h-5 w-5 text-[#023066]' />

                                            <div className="ms-4">
                                                <p className="font-medium ">Location</p>
                                                <span className="text-gray-500 font-medium text-sm">Hyderbad</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <AccessTime className='h-5 w-5 text-[#023066]' />

                                            <div className="ms-4">
                                                <p className="font-medium">Course Timings</p>
                                                <span className="text-gray-500 font-medium text-sm">10am to 4pm</span>
                                            </div>
                                        </li>





                                        <li className="flex items-center mt-3">
                                            <CurrencyRupee className='h-5 w-5 text-[#023066]' />

                                            <div className="ms-4">
                                                <p className="font-medium">Fees</p>
                                                <span className="text-gray-500 font-medium text-sm">30k</span>
                                            </div>
                                        </li>

                                        <li className=" items-center mt-3 grid place-items-center">
                                            <div className="mt-5">
                                                <a href="." className="btn  rounded-md duration-200 bg-[#023066] hover:bg-[#A5CF38] text-white md:ms-2 w-full md:w-auto p-2">Buy Now</a>
                                            </div>
                                        </li>






                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course_details
