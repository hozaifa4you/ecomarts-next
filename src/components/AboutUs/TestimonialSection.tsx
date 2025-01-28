"use client";

import { testimonialData, TestimonialType } from "@/utils/data/about-us";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSection = () => {
   return (
      <section className="testimonial-section fix bg-color3 section-padding">
         <div className="container">
            <div className="row gy-4 d-flex align-items-center mb-50">
               <div className="col-xl-6">
                  <div className="section-title">
                     <div className="subtitle style2">Testimonial</div>
                     <h2 className="title">This Is What Our Customers Say</h2>
                  </div>
               </div>
               <div className="col-xl-6 d-flex justify-content-md-end">
                  <div className="btn-wrapper">
                     <a className="theme-btn style9" href="testimonial.html">
                        View All
                     </a>
                  </div>
               </div>
            </div>
            <div className="row">
               <Swiper
                  loop
                  autoplay
                  spaceBetween={30}
                  breakpoints={{
                     "0": { slidesPerView: 1 },
                     "576": { slidesPerView: 1, centeredSlides: true },
                     "768": { slidesPerView: 2 },
                     "992": { slidesPerView: 3 },
                     "1200": { slidesPerView: 3 },
                  }}
                  modules={[Autoplay]}
               >
                  {testimonialData.map((testimonial) => (
                     <SwiperSlide key={testimonial.id}>
                        <TestimonialCardSlider {...testimonial} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </section>
   );
};

const TestimonialCardSlider = ({
   designation,
   img,
   name,
   reviews,
}: TestimonialType) => {
   return (
      <div className="testimonial-card-items-two">
         <div className="testimonial-card-items-two__star-wrapper">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-regular fa-star"></i>
         </div>
         <div className="testimonial-card-items-two__content">
            <p className="testimonial-card-items-two__content--text">
               {reviews}
            </p>
         </div>
         <div className="testimonial-card-items-two__client-info d-flex align-items-center justify-content-between">
            <div className="testimonial-card-items-two__client-info__thumb">
               <Image width={60} height={60} src={img} alt="client-thumb" />
               <div className="testimonial-card-items-two__client-info__client-content">
                  <h6>{name}</h6>
                  <p>{designation}</p>
               </div>
            </div>
            <div className="testimonial-card-items-two__client-info">
               <i className="icon-quote"></i>
            </div>
         </div>
      </div>
   );
};

export { TestimonialSection };
