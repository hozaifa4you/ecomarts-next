"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { titleEffect } from "../animation";

const TestimonialSection = () => {
   return (
      <section className="testimonial-section section-padding4 fix">
         <div className="container">
            <motion.div
               {...titleEffect}
               className="section-title text-center mb-40"
            >
               <div className="subtitle style4">TESTIMONIAL</div>
               <h2 className="title">What Our Clients Say</h2>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.75 }}
               viewport={{ once: true }}
               className="slider-area testimonialSliderFour"
            >
               <Swiper
                  loop
                  autoplay
                  navigation={{
                     nextEl: "#testimonial4-prev",
                     prevEl: "#testimonial-next",
                  }}
                  modules={[Autoplay, Navigation]}
               >
                  <SwiperSlide>
                     <TestimonialSlide />
                  </SwiperSlide>
                  <SwiperSlide>
                     <TestimonialSlide />
                  </SwiperSlide>
               </Swiper>

               <div className="arrow-btn">
                  <button
                     id="testimonial4-prev"
                     className="slider-arrow slider-prev"
                  >
                     <i className="fa-sharp fa-light fa-arrow-left"></i>
                  </button>
                  <button
                     id="testimonial-next"
                     className="slider-arrow slider-next"
                  >
                     <i className="fa-sharp fa-light fa-arrow-right"></i>
                  </button>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

// data-slider-options='{"loop": true,"autoplay": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1}}}'

const TestimonialSlide = () => {
   return (
      <div className="testimonial-card-items-four">
         <p>
            “Nulla bibendum volutpat nisl, in ullamcorper sem vehicula non.
            Vestibulum quis ipsum elementum, pulvinar enim eget, suscipit nisl.
            Nullam aliquam est a vulputate placerat. Ut quis lectus sodales,
            laoreet nisi ut, ultricies ex Maecenas consequat nunc purus, non
            maximus nunc gravida nec.”
         </p>
         <div className="testimonial-card-items-four_thumb">
            <Image
               width={80}
               height={80}
               src="/images/testimonial/testimonialProfileThumb4_1.jpg"
               alt="thumb"
            />
            <div className="bg">
               <Image
                  width={185}
                  height={132}
                  src="/images/testimonial/testimonialProfileThumbbg4_1.jpg"
                  alt="thumbbg"
               />
            </div>
         </div>
      </div>
   );
};

export { TestimonialSection };
