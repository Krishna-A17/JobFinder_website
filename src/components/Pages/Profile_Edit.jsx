import React from 'react'
import bg from '../../assets/images/team/banner2.png'
import img from '../../assets/images/team/01.jpg'
// import { Facebook, AddLink, LinkedIn, Instagram, Twitter, YouTube } from '@mui/icons-material'

const Profile_Edit = () => {
  return (
    <div>
      <section className="relative lg:mt-24 mt-[74px] pb-16">
        <div className="container  ">
          <div className="profile-banner relative text-transparent">
            <input id="pro-banner" name="profile-banner" type="file" className="hidden" onchange="loadFile(event)" />
            <div className="relative shrink-0 ">
              <img src={bg} className="h-64  w-full object-fill lg:rounded-xl shadow " id="profile-banner" alt="" />
              <label className="absolute inset-0 cursor-pointer" for="pro-banner"></label>
            </div>
          </div>
          {/* <!-- <div className="relative shrink-0">
                    <img src="assets/images/hero/bg5.jpg" className="h-64 w-full object-cover lg:rounded-xl shadow " alt="">
                </div> --> */}

          <div className="md:flex mx-4 -mt-12 ">
            <div className="container  ">
              <div className="relative flex items-end">
                <div className="profile-pic text-center">
                  <input id="pro-img" name="profile-image" type="file" className="hidden" onchange="loadFile(event)" />
                  <div>
                    <div className="relative h-28 w-28 max-w-[112px] max-h-[112px] mx-auto">
                      <img src={img} className="rounded-full shadow  ring-4 ring-slate-50 " id="profile-image" alt="" />
                      <label className="absolute inset-0 cursor-pointer" for="pro-img"></label>
                    </div>
                  </div>
                </div>
                <div className="ms-4">
                  <h5 className="text-lg font-semibold">Mr. Calvin carlo</h5>
                  <p className="text-slate-400">Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-16 bg-slate-100 py-11">
          <div className="grid grid-cols-1 gap-[30px]">
            <div className="p-6 rounded-md shadow  bg-white ">
              <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
              <form>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                    <input type="text" className="w-full form-input border border-slate-100  mt-2" placeholder="First Name:" id="firstname" name="name" required="" />
                  </div>
                  <div>
                    <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                    <input type="text" className="w-full form-input border border-slate-100  mt-2" placeholder="Last Name:" id="lastname" name="name" required="" />
                  </div>
                  <div>
                    <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                    <input type="email" className="w-full form-input border border-slate-100  mt-2" placeholder="Email" name="email" required="" />
                  </div>

                  <div>
                    <label className="form-label font-medium">DOB: <span className="text-red-600">*</span></label>
                    <input type="date" className="w-full form-input border border-slate-100  mt-2" placeholder="DOB" name="DOB" required="" />
                  </div>

                  <div>
                    <label className="form-label font-medium">Address: <span className="text-red-600">*</span></label>
                    <input type="text" className="w-full form-input border border-slate-100  mt-2" placeholder="Address" name="address" required="" />
                  </div>

                  <div>
                    <label className="form-label font-medium">Pincode: <span className="text-red-600">*</span></label>
                    <input type="number" className="w-full form-input border border-slate-100  mt-2" placeholder="Pincode" name="pincode" required="" />
                  </div>

                  <div>
                    <label className="form-label font-medium">Country:</label>
                    <select className="form-select form-input border border-slate-100  block w-full mt-2">
                      <option value="">USA</option>
                      <option value="">Japan</option>
                      <option value="">Paris</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label font-medium">City:</label>
                    <select className="form-select form-input border border-slate-100  block w-full mt-2">
                      <option value="">California</option>
                      <option value="">Florida</option>
                      <option value="">Texas</option>

                    </select>
                  </div>
                  <div>
                    <label className="form-label font-medium">Occupation :</label>
                    <select className="form-select form-input border border-slate-100  block w-full mt-2">
                      <option value="WD">Web Designer</option>
                      <option value="WD">Web Developer</option>
                      <option value="UI">UI / UX Desinger</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label font-medium" for="multiple_files">Upload Resume:</label>
                    <input className="w-full relative form-input border border-slate-100  file:h-10 file:-mx-3 file:-my-2 file:cursor-pointer file:rounded-none file:border-0 file:px-3 file:text-neutral-700 bg-clip-padding px-3 py-1.5 file:me-3 mt-2" id="multiple_files" type="file" multiple />
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="mt-5">
                    <label className="form-label font-medium">About me: </label>
                    <textarea name="comments" id="comments" className="w-full form-input border border-slate-100  mt-2 textarea h-40" placeholder="About me :"></textarea>
                  </div>
                </div>

                <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
              </form>
            </div>
            {/* ===================================================================================================== */}

            <div className="p-6 rounded-md shadow  bg-white ">
              <div className="w-2/4 ">
                <div>
                  <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>

                  <form>

                    <div className='mb-2'>
                      <label className="form-label font-medium">Mobile No :</label>
                      <input name="Phone" id="number" type="Phone" className="w-full form-input border border-slate-100  mt-2" placeholder="number:" />
                    </div>

                    <div>
                      <label className="form-label font-medium">Website :</label>
                      <input name="url" id="url" type="url" className="w-full form-input border border-slate-100  mt-2" placeholder="Url :" />
                    </div>


                    {/* <button className="btn bg-[#023066] p-1.5 hover:bg- text-white rounded-md mt-5">Add</button> */}
                  </form>
                </div>



              </div>
            </div>

            {/* ================================================================================================= */}

            <div className="p-6 rounded-md shadow  bg-white ">
              <div className="w-2/4 ">
                <div>
                  <h5 className="text-lg font-semibold mb-4">Education:</h5>

                  <form>

                    <div className='mb-2'>
                      <label className="form-label font-medium">Education Name:</label>
                      <select className="form-select form-input border border-slate-100  block w-full mt-2">
                        <option value="">Select</option>
                        <option value="">BTech</option>
                        <option value="">BBA</option>
                        <option value="">MCA</option>
                        <option value="">Mtech</option>
                      </select>
                    </div>

                    <div className='mb-2'>
                      <label className="form-label font-medium">College Name:</label>
                      <select className="form-select form-input border border-slate-100  block w-full mt-2">
                        <option value="">Select</option>
                        <option value="">Jawaharlal Nehru University</option>
                        <option value="">CBIT</option>
                        <option value="">PARUL University</option>
                        <option value="">SV University</option>
                      </select>
                    </div>

                    <div className='mb-2'>
                      <label className="form-label font-medium">Passed Out Year:</label>
                      <select className="form-select form-input border border-slate-100  block w-full mt-2">
                        <option value="">Select</option>
                        <option value="">2023</option>
                        <option value="">2022</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
                        <option value="">2018</option>
                        <option value="">2017</option>
                      </select>

                    </div>
                    <div className="md:w-1/3">
                      <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
                    </div>

                  </form>
                </div>



              </div>
            </div>











            {/* ================================================================================================= */}
            <div className="p-6 rounded-md shadow  bg-white ">
              <h5 className="text-lg font-semibold mb-2">Projects:</h5>



              <div className="md:flex mt-3 ">


                <div className="md:w-2/3 mt-2 md:mt-0">
                  <form>
                    <div className="form-icon relative">
                      <input type="text" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Project Name" name="name" required="" />
                      <div className="grid grid-cols-1">
                        <div className="mt-5">
                          <label className="form-label font-medium">Project details: </label>
                          <textarea name="comments" id="comments" className="w-full form-input border border-slate-100  mt-2 textarea h-40" placeholder="Project details: :"></textarea>
                        </div>
                      </div>
                      <input type="url" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Project url" name="name" required="" />
                    </div>
                  </form>

                  <p className="text-slate-400 mt-1">Add your Project url.</p>
                </div>
              </div>



              <div className="md:flex">
                <div className="md:w-1/3">
                  <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
                </div>
              </div>
            </div>

            {/* ================================================================================================= */}

            <div className="certificates p-6 rounded-md shadow  bg-white ">
              <h5 className="text-lg font-semibold mb-2">Certificates:</h5>



              <div className="md:flex mt-3 ">


                <div className="md:w-2/3 mt-2 md:mt-0">
                  <form>
                    <div className="form-icon relative">
                      <input type="text" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Certificate Name" name="name" required="" />

                      <input type="url" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Certificate  url" name="name" required="" />
                    </div>
                  </form>


                </div>
              </div>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
                </div>
              </div>
            </div>
            {/* ================================================================================================= */}






            <div className="skills p-6 shadow bg-white ">
              <div className=" font-semibold text-lg mb-3 cursor-pointer mt-2">
                <span>
                  Skills
                </span>

              </div>

              <div className="md:w-2/3">
                <input type="text" placeholder='Skill Name' className='w-full form-input border border-slate-100  mt-2 mb-2' />
                <div>
                  <label className="form-label font-medium">Skill level:</label>
                  <select className="form-select form-input border border-slate-100  block w-full mt-2">
                    <option value="">Select</option>
                    <option value="">Beginner</option>
                    <option value="">Intermediate</option>
                    <option value="">Expert</option>
                  </select>
                </div>

              </div>

              <div className="md:w-1/3">
                <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
              </div>


            </div>
            {/* ================================================================================================= */}


            <div className="experience shadow p-6 bg-white ">
              <div className="flex justify-between font-semibold text-lg mb-3 cursor-pointer ">
                <span>
                  Experience :
                </span>
                {/* <span className='text-[#275DF5]'>
                                        Add Experience
                                    </span> */}
              </div>

              <div className="flex mt-6">
                <div className="text-slate-600 font-semibold min-w-[80px] text-center">
                  <div className="profile-pic text-center">
                    <input id="pro-img" name="profile-image" type="file" className="hidden" onchange="loadFile(event)" />
                    <div>
                      <div className="relative  w-28 max-w-[112px]  mx-auto">
                        <img src="" className="shadow h-12 w-12 mx-auto  block" id="profile-image" alt="img" />
                        <label className="absolute inset-0 cursor-pointer" for="pro-img"></label>



                      </div>
                      <input type="text" placeholder='years' className='text-center w-full mt-3' />

                    </div>
                  </div>
                </div>

                <div className="ms-4">

                  <input type="text" className="text-lg font-medium mb-0 w-full form-input border border-slate-100  mt-2 " placeholder='Enter Role' />
                  <input type="text" className="text-lg font-medium mb-0 w-full form-input border border-slate-100  mt-2 " placeholder='Enter Company name' />
                  <textarea name="comments" id="comments" className="w-full form-input border border-slate-100  mt-2 textarea h-40" placeholder="Description:"></textarea>
                </div>


              </div>
              <div className="md:w-1/3">
                <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
              </div>

            </div>

            {/* ================================================================================================= */}

            <div className="media  p-6 rounded-md shadow  bg-white ">
              <h5 className="text-lg font-semibold mb-4">Social Media :</h5>



              <div className="md:flex mt-8 ">
                <div className="md:w-2/12">
                  <span className="font-medium ">Facebook</span>
                </div>

                <div className="md:w-2/3 mt-4 md:mt-0">
                  <form>
                    <div className="form-icon relative">

                      <input type="text" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Facebook" id="facebook_name" name="name" required="" />
                    </div>
                  </form>

                  <p className="text-slate-400 mt-1">Add your Facebook url.</p>
                </div>
              </div>

              <div className="md:flex mt-8">
                <div className="md:w-2/12">
                  <span className="font-medium">Instagram</span>
                </div>

                <div className="md:w-2/3 mt-4 md:mt-0">
                  <form>
                    <div className="form-icon relative">
                      <input type="text" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Instagram" id="insta_name" name="name" required="" />
                    </div>
                  </form>

                  <p className="text-slate-400 mt-1">Add your Instagram url.</p>
                </div>
              </div>

              <div className="md:flex mt-8">
                <div className="md:w-2/12">
                  <span className="font-medium">Linkedin</span>
                </div>

                <div className="md:w-2/3 mt-4 md:mt-0">
                  <form>
                    <div className="form-icon relative">

                      <input type="text" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Linkedin" id="linkedin_name" name="name" required="" />
                    </div>
                  </form>

                  <p className="text-slate-400 mt-1">Add your linkedin url.</p>
                </div>
              </div>

              <div className="md:flex mt-8">
                <div className="md:w-2/12">
                  <span className="font-medium">Youtube</span>
                </div>

                <div className="md:w-2/3 mt-4 md:mt-0">
                  <form>
                    <div className="form-icon relative">
                      {/* <YouTube style={{ fontSize: "33px" }} /> */}
                      <input type="url" className="w-full form-input border border-slate-100  mt-2 ps-12" placeholder="Youtube url" id="you_url" name="url" required="" />
                    </div>
                  </form>

                  <p className="text-slate-400 mt-1">Add your Youtube url.</p>
                </div>
              </div>

              <div className="md:flex">
                <div className="md:w-1/3">
                  <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
                </div>
              </div>
            </div>

            {/* ================================================================================================= */}

            <div className="languages rounded-md shadow p-6 mt-6 bg-white ">
              <div className="flex justify-between mt-2 text-xl font-semibold">

                <span>
                  Languages :

                </span>
                <span className='text-[#275DF5] cursor-pointer'>Add Languages</span>

              </div>


              <div className="grid grid-cols-4 font-medium text-gray-500 mt-6 gap-2" >
                <span>Language Name</span>
                <span>Speak</span>
                <span>Read</span>
                <span>Write</span>

              </div>
              <hr />
              <div className=' py-2 grid grid-cols-4  font-medium mt-3 gap-2 '>
                <span><input type="text" placeholder='Language' className='border p-1.5  w-[100px]' /></span>
                <span><input type="checkbox" className="form-checkbox rounded border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 " /></span>
                <span><input type="checkbox" className="form-checkbox rounded border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 " /></span>
                <span><input type="checkbox" className="form-checkbox rounded border-gray-800 text-[#023066] focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 " /></span>

                <div className="md:w-1/3">
                  <input type="submit" id="submit" name="send" className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5" value="Save Changes" />
                </div>
              </div>






            </div>

            {/* ================================================================================================= */}

            <div className='password shadow p-6 bg-white '>
              <h5 className="text-lg font-semibold mb-4">Change password :</h5>
              <form>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="form-label font-medium">Old password :</label>
                    <input type="password" className="w-full form-input border border-slate-100  mt-2" placeholder="Old password" required="" />
                  </div>

                  <div>
                    <label className="form-label font-medium">New password :</label>
                    <input type="password" className="w-full form-input border border-slate-100  mt-2" placeholder="New password" required="" />
                  </div>

                  <div>
                    <label className="form-label font-medium">Re-type New password :</label>
                    <input type="password" className="w-full form-input border border-slate-100  mt-2" placeholder="Re-type New password" required="" />
                  </div>
                </div>

                <button className="btn bg-[#023066]  hover:bg-[#A5CF38] duration-300 text-white rounded-md mt-5 p-1.5">Save password</button>
              </form>
            </div>

            {/* ================================================================================================= */}




            <div className="p-6 rounded-md shadow  bg-white ">
              <h5 className="text-lg font-semibold mb-5 text-red-600">Delete Account :</h5>

              <p className="text-slate-400 mb-4">Do you want to delete the account? Please press below "Delete" button</p>

              <a href="#." className="btn bg-red-600 hover:bg-red-700 text-white rounded-md p-1.5">Delete</a>
            </div>



            {/* ================================================================================================= */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile_Edit
