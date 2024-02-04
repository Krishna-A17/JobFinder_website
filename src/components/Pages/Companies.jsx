
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import bg2 from "../../assets/companies.jpg";
import slide_image from '../../assets/google_banners/200_200.png'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import c1 from '../../assets/images/svg/c4.jpg'
import c2 from '../../assets/images/svg/c3.avif'

import { Autoplay, Pagination } from 'swiper/modules';

const Companies = () => {
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-blue-950 ">
        <div
          className="relative table w-full py-28  bg-no-repeat  bg-cover    opacity-[0.8]"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* <div className="absolute inset-0 "></div> */}
          <div className="container">
            <div className="grid grid-cols-1 text-center mt-5 ">
              <h1 className="text-[#ff853a]  sm:text-3xl md:text-6xl  font-semibold focus:ring-4 ">
                Companies
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================== */}
      <div className="py-11 ">
        <Swiper

          effect={'coverflow'}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={6}
          coverflowEffect={{

            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}



          pagination={{
            clickable: true,
          }}
          navigation={true}

          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-full" src={slide_image} alt="slide_image" />
          </SwiperSlide>


        </Swiper>
      </div>


      {/* ================================================== */}

      <div className=" companies py-6  w-full px-11">
        <div className="xs:px-1 md:px-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-5 py-9 gap-5 w-full bg-pink-500/10 rounded-3xl shadow-lg">
          <img src={c1} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c2} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c1} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c2} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c1} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c2} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c1} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c2} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c1} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
          <img src={c2} alt="Company-img" className="w-full h-full hover:-mt-2 duration-500 hover:border-orange-500 border-[5px] rounded-xl"/>
         
        </div>
      </div>


    </div>
  )
}

export default Companies
