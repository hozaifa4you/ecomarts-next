"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import { testimonialData, TestimonialType } from "@/utils/data/homepage-1";

const TestimonialsSection = () => {
   return (
      <section className="testimonial-section fix section-padding margin-bottom-40">
         <div className="container">
            <div className="section-title">
               <div className="subtitle style1">Testimonial</div>
               <h2 className="title">What our client say</h2>
            </div>
            <div className=" testimonial-slider-one">
               <Swiper
                  loop
                  slidesPerView={1}
                  spaceBetween={10}
                  breakpoints={{
                     640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                     },
                     768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                     },
                     1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                     },
                  }}
                  autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                  modules={[Autoplay]}
               >
                  {testimonialData.map((testimonial) => (
                     <SwiperSlide key={testimonial.id}>
                        <TestimonialCard {...testimonial} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </section>
   );
};

const TestimonialCard = ({ author, comment }: TestimonialType) => {
   return (
      <div className="testimonial-card-items-one">
         <p>{comment}</p>
         <div className="client-info-wrapper d-flex align-items-center justify-content-between">
            <div className="client-info">
               <div
                  className="client-img bg-cover"
                  style={{
                     backgroundImage: "url('" + author.avatar + "')",
                  }}
               >
                  <div className="icon">
                     <Image
                        width={95}
                        height={95}
                        className="shape"
                        src="/images/shape/shape.svg"
                        alt="img"
                     />
                  </div>
               </div>
               <div className="content">
                  <h3>{author.name}</h3>
                  <span>{author.designation}</span>
                  <div className="star">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-regular fa-star"></i>
                     <i className="fa-regular fa-star"></i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export { TestimonialsSection };
