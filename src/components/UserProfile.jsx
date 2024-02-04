import React, { useState } from "react";
import bg from "../assets/images/team/banner2.png";
import img from "../assets/images/team/01.jpg";
import {
  Edit,
  CheckCircleOutline,
  Facebook,
  AddLink,
  LinkedIn,
  Instagram,
  Mail,
  CalendarMonth,
  House,
  LocationOn,
  Language,
  Phone,
  MyLocation,
  YouTube,
} from "@mui/icons-material";
import meta from "../assets/images/company/meta.png";
import microsoft from "../assets/images/company/Microsoft.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = () => {
    if (isSelected === true) {
      alert("File uploded");
    } else {
      alert("upload a file");
    }
  };
  return (
    <div>
      <section className="relative py-9">
        <div className="container container-fluid">
          <div className="relative shrink-0">
            <img
              src={bg}
              className="h-64 w-full object-fill lg:rounded-xl shadow "
              alt=""
            />
          </div>

          <div className="md:flex mx-4 -mt-12">
            <div className="md:w-full">
              <div className="relative flex items-end justify-between">
                <div className="relative flex items-end">
                  <img
                    src={img}
                    className="h-36 w-36 rounded-full  bg-no-repeat  shadow  ring-4 ring-slate-50 "
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="text-lg font-bold">Tony</h5>
                    <p className="text-slate-600">Software developer</p>
                  </div>
                </div>

                <div className="">
                  <Link
                    to="/Profile-Edit"
                    className="btn btn-icon rounded-md font-bold bg-[#023066]/10 hover:bg-[#023066] border-[#023066]/10 px-2 hover:text-white py-1.5">
                    <Edit
                      className=" pb-1 cursor-pointer "
                      style={{ fontSize: "25px" }}
                    />{" "}
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================= */}

      <section className="relative mt-12 md:pb-24 pb-16">
        <div className="container bg-indigo-400/10 py-6 rounded-3xl">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-9 md:col-span-7 bg-white p-6 rounded-3xl">
              <div className="about">
                <h5 className="text-xl font-semibold">
                  About me :{" "}
                  <Edit
                    className="text-gray-700 pb-1 cursor-pointer "
                    style={{ fontSize: "25px" }}
                  />
                </h5>
                <p className="text-slate-600 mt-4">
                  I'm a Software Developer with 2 years of experience at Meta is
                  responsible for designing, coding, and maintaining software
                  applications. Leveraging their expertise gained from previous
                  work, they collaborate with cross-functional teams to
                  understand project requirements, write clean and efficient
                  code, and ensure software reliability and performance.
                </p>
                <p className="text-slate-600 mt-4">
                  A Software Developer with 2 years of experience at Meta is a
                  valuable asset, bringing practical insights and skills to
                  create impactful solutions in the ever-evolving field of
                  software development.
                </p>
              </div>

              {/* =============================================================================================== */}

              <div className="Upload-Resume rounded-md shadow p-6 mt-6 border-dashed border-2 border-gray-400 ">
                <form className="text-center text-slate-600 font-semibold">
                  <input
                    className=" py-2"
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                  {isSelected ? (
                    <div>
                      <h2>File Details</h2>
                      <p>Filename: {selectedFile.name}</p>
                      <p>Filetype: {selectedFile.type}</p>
                      <p>Size in bytes: {selectedFile.size}</p>
                      <p>
                        lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                      </p>
                    </div>
                  ) : (
                    <p className="text-[#275DF5] ">Upload Your Resume </p>
                  )}
                  <div>
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                </form>
              </div>

              {/* ======================================================================================= */}

              <div className="Education   mt-6  ">
                <div className="flex justify-between font-semibold text-lg mb-3 cursor-pointer">
                  <span>
                    Education :
                    <Edit
                      className="text-gray-700 pb-1 cursor-pointer "
                      style={{ fontSize: "25px" }}
                    />
                  </span>
                  <span className="text-[#275DF5]">Add Education</span>
                </div>

                <div className="text-slate-500  font-semibold ">
                  <h2>Btech (Course Name)</h2>
                  <h2>
                    {" "}
                    JNTU College of Engineering, Anantapur (College Name)
                  </h2>
                  <h2 className="font-normal">2019-2023 Year of Completion</h2>
                </div>

                <div className="edu-form"></div>
              </div>

              {/* ================================================================================ */}

              <div className="Projects   mt-6  ">
                <div className="flex justify-between font-semibold text-lg mb-3 cursor-pointer">
                  <span>
                    Projects :
                    <Edit
                      className="text-gray-700 pb-1 cursor-pointer "
                      style={{ fontSize: "25px" }}
                    />
                  </span>
                  <span className="text-[#275DF5]">Add Projects</span>
                </div>

                <div className="text-slate-500  font-semibold ">
                  <h2>Projects (Projects Name)</h2>
                  <h2>Developed using Html,css,Js (Project details)</h2>
                  <a href="#." className="text-[#275DF5]">
                    (Project Link)
                  </a>
                  <h2 className="font-normal">
                    {" "}
                    2 Months (Project Completion time)
                  </h2>
                </div>
              </div>

              {/* ================================================================================ */}

              <div className="Certificate   mt-6  ">
                <div className="flex justify-between font-semibold text-lg mb-3 cursor-pointer">
                  <span>
                    Certificates :
                    <Edit
                      className="text-gray-700 pb-1 cursor-pointer "
                      style={{ fontSize: "25px" }}
                    />
                  </span>
                  <span className="text-[#275DF5]">Add</span>
                </div>

                <div className="text-slate-500  font-semibold ">
                  <h2> (Certificate Name)</h2>

                  <a href="#." className="text-[#275DF5]">
                    (Certificate Link)
                  </a>
                </div>
              </div>

              {/* ======================================================================================= */}

              <div className="skills">
                <div className="flex justify-between font-semibold text-lg mb-3 cursor-pointer mt-6">
                  <span>
                    Skills :
                    <Edit
                      className="text-gray-700 pb-1 cursor-pointer "
                      style={{ fontSize: "25px" }}
                    />
                  </span>
                  <span className="text-[#275DF5]">Add Skills</span>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                  <div>
                    <div className="flex justify-between  mb-2">
                      <span className="text-slate-400">WordPress</span>
                      <span className="text-slate-400">80%</span>
                    </div>
                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between  mb-2">
                      <span className="text-slate-400">JavaScript</span>
                      <span className="text-slate-400">70%</span>
                    </div>
                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "70%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between  mb-2">
                      <span className="text-slate-400">HTML</span>
                      <span className="text-slate-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between  mb-2">
                      <span className="text-slate-400">Figma</span>
                      <span className="text-slate-400">80%</span>
                    </div>
                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between  mb-2">
                      <span className="text-slate-400">Photoshop</span>
                      <span className="text-slate-400">70%</span>
                    </div>
                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "70%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between  mb-2">
                      <span className="text-slate-400">Illustration</span>
                      <span className="text-slate-400">60%</span>
                    </div>
                    <div className="w-full bg-gray-100  rounded-full h-[6px]">
                      <div
                        className="bg-[#023066] h-[6px] rounded-full"
                        style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-semibold text-lg mb-3 cursor-pointer mt-6">
                  <span>
                    Experience :
                    <Edit
                      className="text-gray-700 pb-1 cursor-pointer "
                      style={{ fontSize: "25px" }}
                    />
                  </span>
                  <span className="text-[#275DF5]">Add Experience</span>
                </div>

                <div className="flex mt-6">
                  <div className="text-slate-600 font-semibold min-w-[80px] text-center">
                    <img
                      src={meta}
                      className="shadow-xl  h-12 w-12 mx-auto mb-2 block"
                      alt=""
                    />{" "}
                    2019-22
                  </div>

                  <div className="ms-4">
                    <h5 className="text-lg font-medium mb-0">
                      Software Developer
                    </h5>
                    <span className=" font-medium text-lg">Meta</span>
                    <p className="text-slate-600 mt-2 mb-0">
                      I'm a Software Developer with 2 years of experience at
                      Meta is responsible for designing, coding, and maintaining
                      software applications. Leveraging their expertise gained
                      from previous work, they collaborate with cross-functional
                      teams to understand project requirements, write clean and
                      efficient code, and ensure software reliability and
                      performance.{" "}
                    </p>
                  </div>
                </div>

                <div className="flex mt-6">
                  <div className="text-slate-600 font-semibold min-w-[80px] text-center ">
                    <img
                      src={microsoft}
                      className=" shadow-xl h-12 w-12 mx-auto mb-2 block"
                      alt=""
                    />{" "}
                    2017-19
                  </div>

                  <div className="ms-4">
                    <h5 className="text-lg font-medium mb-0">UI-UX Designer</h5>
                    <span className=" font-medium text-lg">Microsoft</span>
                    <p className="text-slate-600 mt-2 mb-0">
                      I'm a UI-UX Designer with 2 years of experience at
                      Microsoft is responsible for designing, coding, and
                      maintaining software applications. Leveraging their
                      expertise gained from previous work, they collaborate with
                      cross-functional teams to understand project requirements,
                      write clean and efficient code, and ensure software
                      reliability and performance.{" "}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================================================================================ */}

              <div className="languages rounded-md shadow py-3 px-2 mt-6 ">
                <div className="flex justify-between mt-6 text-xl font-semibold">
                  <span>
                    Languages :{" "}
                    <Edit
                      className="text-gray-700 pb-1 cursor-pointer "
                      style={{ fontSize: "25px" }}
                    />
                  </span>
                  <span className="text-[#275DF5] cursor-pointer">
                    Add Languages
                  </span>
                </div>

                <div className="grid grid-cols-4 font-medium text-gray-500 mt-6 gap-2">
                  <span>Languages</span>
                  <span>Speak</span>
                  <span>Read</span>
                  <span>Write</span>
                </div>
                <hr />
                <div className=" py-2 grid grid-cols-4 font-medium mt-3 gap-2 ">
                  <span>Telugu</span>
                  <span>
                    <CheckCircleOutline className="text-gray-600" />
                  </span>
                  <span>
                    <CheckCircleOutline className="text-gray-600" />
                  </span>
                  <span>
                    <CheckCircleOutline className="text-gray-600" />
                  </span>

                  <span>English</span>
                  <span>
                    <CheckCircleOutline className="text-gray-600" />
                  </span>
                  <span>
                    <CheckCircleOutline className="text-gray-600" />
                  </span>
                  <span>
                    <CheckCircleOutline className="text-gray-600" />
                  </span>
                </div>
              </div>

              {/* ================================================================================ */}
            </div>

            {/* ================================================================================ */}
            <div className="lg:col-span-3 md:col-span-5 text-center ">
              <div className="bg-slate-50  rounded-md shadow  p-6 sticky top-20">
                <h5 className="text-lg font-semibold">Personal Detail:</h5>
                <ul className="list-none mt-4">
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <Mail className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">Email :</span>
                    </span>

                    <span>
                      <a href="#.">tony@gmail.com</a>{" "}
                    </span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <CalendarMonth className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">D.O.B. :</span>
                    </span>

                    <span>17th Mar, 2001</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <House className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">Address :</span>
                    </span>

                    <span>Jublihills</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <LocationOn className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">City :</span>
                    </span>

                    <span> Hyderabad</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <Language className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">Country :</span>
                    </span>

                    <span>India</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <MyLocation className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">Postal Code :</span>
                    </span>

                    <span>500005</span>
                  </li>
                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <Phone className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">Mobile :</span>
                    </span>

                    <span>(+91) 984805566</span>
                  </li>

                  <li className="flex justify-between mt-3 items-center font-medium">
                    <span>
                      <AddLink className="me-3 text-gray-400 pb-1" />
                      <span className="text-slate-400 me-3">Social :</span>
                    </span>

                    <ul className="list-none ">
                      <li className="inline">
                        <Link target="_blank" className="btn  text-[#0866FF]">
                          <Facebook style={{ fontSize: "30px" }} />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link target="_blank" className="btn  text-[#0077B5]">
                          <LinkedIn style={{ fontSize: "30px" }} />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link target="_blank" className="btn  text-[#E7495B]">
                          <Instagram style={{ fontSize: "30px" }} />
                        </Link>
                      </li>
                      <li className="inline">
                        <Link target="_blank" className="btn  text-[#E7495B]">
                          <YouTube style={{ fontSize: "33px" }} />
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li class="mt-3  bg-white p-3 rounded-md shadow ">
                    <div class=" text-center mb-3">
                      <span class="font-medium text-center">Resume.pdf</span>
                    </div>

                    <a
                      href="#."
                      className=" p-1.5  bg-[#023066] hover:bg-[#A5CF38] duration-300 font-bold text-white rounded-md w-full">
                      {" "}
                      Download CV
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ================================================================================ */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
