// import React from 'react'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import 'swiper/css/grid';
// import slide_image from '../assets/google_banners/200_200.png'
// const Slider = () => {

//     return (
//         <div className='  hidden md:flex'>
//             <div className="container ]">
//                 {/* <h1 className="heading p-3">Ads</h1> */}
//                 <Swiper
//                     cssMode={true}
//                     autoHeight={true}
//                     spaceBetween={50}
//                     slidesPerView={5}
//                     onSlideChange={() => console.log('slide change')}
//                     onSwiper={(swiper) => console.log(swiper)}
//                     autoplay={{
//                         delay: 1500,
//                         disableOnInteraction: false,
//                     }}



//                     pagination={{ el: '.swiper-pagination', clickable: true }}
//                     navigation={{
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                         clickable: true,
//                     }}
//                     modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//                     className="swiper_container  gap-5"
//                 >
//                     <SwiperSlide>
//                         <img src={slide_image} className='' alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={slide_image} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={slide_image} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={slide_image} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={slide_image} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={slide_image} alt="slide_image" />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={slide_image} alt="slide_image" />
//                     </SwiperSlide>

//                     <div className="slider-controler">
//                         <div className="swiper-button-prev slider-arrow ">
//                             <ion-icon name="arrow-back-outline"></ion-icon>
//                         </div>
//                         <div className="swiper-button-next slider-arrow">
//                             <ion-icon name="arrow-forward-outline"></ion-icon>
//                         </div>
//                         <div className="swiper-pagination mt-24"></div>
//                     </div>
//                 </Swiper>
//             </div>
//         </div>
//     )
// }

// export default Slider


import React from 'react'
import slide_image from '../assets/google_banners/200_200.png'

const Slider = () => {
  return (
    <div className='mt-4'>
      <div className="container">
      <div className="grid md:grid-cols-6 sm:grid-cols-3 xs:grid-cols-2 gap-6 justify-center">
      <img src={slide_image} alt="" srcset="" />
      <img src={slide_image} alt="" srcset="" />
      <img src={slide_image} alt="" srcset="" />
      <img src={slide_image} alt="" srcset="" />
      <img src={slide_image} alt="" srcset="" />
      <img src={slide_image} alt="" srcset="" />
      
      
     
      </div>
      </div>
    </div>
  )
}

export default Slider
