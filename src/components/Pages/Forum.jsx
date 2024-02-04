import React, { useState } from 'react'
import bg2 from "../../assets/b5.png";
import { Link } from 'react-router-dom'
import add from '../../assets/google_banners/200_200.png'
import p1 from '../../assets/images/svg/profile.avif'
import { ThumbUp, ThumbDown, Message, Share } from '@mui/icons-material'
const Forum = () => {

  const [show, setShow] = useState(false);

  // const [style, setStyle] = useState("light");

  //   const changeStyle = () => {
  //       console.log("you just clicked");
  //       if (style !== "light") setStyle("light");
  //       else setStyle("dark");
  //   };
  return (


    <div className='forum'>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28    opacity-[1.5]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="absolute inset-0 "></div>
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#ff853a] sm:text-3xl md:text-6xl  font-semibold focus:ring-4 ">
                Forum
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================================================================= */}



      <div className="d-flex " id="reserve-form ">
        <div className="md:w-6/12 mx-auto">
          <div className="lg:col-span-10 mt-8">
            <div className="bg-indigo-500/10 border-0 shadow rounded-md p-3 ">
              <form action="#">
                <div className="registration-form text-dark text-start ">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6 ">
                    <div className="filter-search-form relative filter-border md:col-span-2">
                      <input
                        name="name"
                        type="text"
                        className=" form-input h-[60px] pt-[13px] pb-[15px] text-[15px]  w-full filter-input-box bg-gray-50  border-0"
                        placeholder="What are you looking for: "
                      />
                    </div>


                    <input
                      type="submit"
                      id="search"
                      name="search"
                      style={{ height: "60px" }}
                      className="btn col-span-1 bg-[#023066] hover:bg-[#A5CF38] border-[#A5CF38] hover:border-[#A5CF38] text-white searchbtn submit-btn w-100 duration-300"
                      value="Search"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================================================================================== */}





      <div className="container my-5 ">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-4">
          <div className="col-span-1 md:col-span-9  ">
            <div className='border border-gray-300 my-6 '>
              <div className="flex bg-indigo-500/10  p-1.5 justify-between text-lg ">
                <div className='md:flex  gap-2 '>
                  <span to="/UserProfile"><img className='bg-[#023066] w-11   p-[1.5px] rounded-full  hover:bg-orange-400 duration-[0.5s] h-11' src={p1} alt="" /></span>
                  <span className='font-bold '>Tony

                    <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo explicabo nobis </p>

                  </span>

                </div>

                <div className='flex font-medium justify-end  gap-2 mt-3 p-2'>
                  <span>date</span>
                  <span>time</span>
                </div>
              </div>

              <div className='p-2 gap-3'>
                <h1 className='text-2xl font-bold text-blue-500 underline mb-3'>Mechanical Jobs</h1>
                <p className='text-slate-600 font-medium'>Mechanical engineering is an engineering discipline that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems. ... It is the branch of engineering that involves the design, production, and operation of machinery.</p>
              </div>


              <div className='p-3 bg-indigo-500/10   flex gap-6 text-gray-500 cursor-pointer'>
                <div className="grid place-content-center grid-cols-2 gap-1 ">
                  <ThumbUp className='btn' /> <span className=''>22</span>
                </div>
                {/* <ThumbDown className={style}   onClick={changeStyle}/> */}

                <ThumbDown className='btn' />
                <Message onClick={() => setShow(!show)} className='btn' />
                <Share className='btn' />

              </div>

              {show ?
                  <div className="comment">
                    <div className="rounded-md shadow-lg p-6 mt-1 bg-white ">

                      <div className="flex justify-end font-semibold text-lg mb-3 cursor-pointer ">
                        
                        <span onClick={() => setShow(!show)} className='text-white   font-bold duration-300 bg-black px-1.5 hover:text-black hover:bg-white'>
                          X
                        </span>
                      </div>

                      <form method="post" name="myForm" id="myForm" className="mt-4" onsubmit="return validateForm()">
                        <p className="mb-0" id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <div className="grid grid-cols-12 gap-2">
                          

                          <div className="col-span-12">
                            <label for="comments" className="font-semibold ">Your Comment:</label>
                            <textarea name="comments" id="comments" className="form-input border w-full h-56 border-slate-100 dark:border-slate-800 mt-2 textarea" placeholder="Message :"></textarea>
                          </div>
                        </div>

                        <button type="submit" id="submit" name="send" className="btn p-1.5 mt-3 bg-[#023066] hover:bg-[#A5CF38] duration-300 font-bold text-white rounded-md">Send Message</button>
                      </form>
                    </div>
                  </div>
                  : null}



            </div>

            <div className='border border-gray-300  my-6'>
              <div className="flex bg-indigo-500/10  p-1.5 justify-between text-lg ">
                <div className='md:flex  gap-2 '>
                  <span to="/UserProfile"><img className='bg-[#023066] w-11   p-[1.5px] rounded-full  hover:bg-orange-400 duration-[0.5s] h-11' src={p1} alt="" /></span>
                  <span className='font-bold '>Tony

                    <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo explicabo nobis </p>

                  </span>

                </div>

                <div className='flex font-medium justify-end  gap-2 mt-3 p-2'>
                  <span>date</span>
                  <span>time</span>
                </div>
              </div>

              <div className='p-2 gap-3'>
                <h1 className='text-2xl font-bold text-blue-500 underline mb-3'>Mechanical Jobs</h1>
                <p className='text-slate-600 font-medium'>Mechanical engineering is an engineering discipline that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems. ... It is the branch of engineering that involves the design, production, and operation of machinery.</p>
              </div>


              <div className='p-3 bg-indigo-500/10   flex gap-6 text-gray-500 cursor-pointer'>
                <div className="grid place-content-center grid-cols-2 gap-1 ">
                  <ThumbUp className='btn' /> <span className=''>22</span>
                </div>
                {/* <ThumbDown className={style}   onClick={changeStyle}/> */}

                <ThumbDown className='btn' />
                <Message onClick={() => setShow(!show)} className='btn' />
                <Share className='btn' />

              </div>



            </div>
           
          </div>

          <div className='lg:col-span-3 md:col-span-3  ' >
            <div className='header text-md font-bold borer text-[#1D87F0] grid grid-cols-1 text-center'>
              <div className="card-header shadow-md p-3 my-2 bg-white border-slate-500 rounded-md ">
                Advertaisments
              </div>
              <div className="card-body shadow-md p-3 bg-white border-slate-500 rounded-md ">
                Advertaisment Here!
              </div>
            </div>

            <div className="advertaisments  md:grid-flow-row  sm:grid grid-flow-col sm:gap-2 xs:grid xs:gap-2 place-items-center  ">
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              <div className="adds py-3 ">
                <img src={add} alt="" />
              </div>
              


            </div>


          </div>



        </div>

      </div>







    </div>
  )
}

export default Forum
