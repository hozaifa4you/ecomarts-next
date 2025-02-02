"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Div } from "../animation";

const BrandSection = () => {
   return (
      <div className="brand-slider-section fix section-padding2 pt-0">
         <div className="container">
            <div className="brand-wrapper-two style1">
               <Swiper
                  autoplay={{ delay: 2500 }}
                  loop
                  slidesPerView={2}
                  breakpoints={{
                     576: { slidesPerView: 2 },
                     768: { slidesPerView: 3 },
                     992: { slidesPerView: 4 },
                     1200: { slidesPerView: 5 },
                  }}
                  modules={[Autoplay]}
               >
                  <SwiperSlide>
                     <Div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75 }}
                        viewport={{ once: true }}
                        className="brand-img-two"
                     >
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_1.png"
                           alt="brand-logo"
                        />
                     </Div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="brand-img-two"
                     >
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_2.png"
                           alt="brand-logo"
                        />
                     </Div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="brand-img-two"
                     >
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_3.png"
                           alt="brand-logo"
                        />
                     </Div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="brand-img-two"
                     >
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_4.png"
                           alt="brand-logo"
                        />
                     </Div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <Div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, delay: 0.25 }}
                        viewport={{ once: true }}
                        className="brand-img-two"
                     >
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_5.png"
                           alt="brand-logo"
                        />
                     </Div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="brand-img-two">
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_1.png"
                           alt="brand-logo"
                        />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="brand-img-two">
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_2.png"
                           alt="brand-logo"
                        />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="brand-img-two">
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_3.png"
                           alt="brand-logo"
                        />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="brand-img-two">
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_4.png"
                           alt="brand-logo"
                        />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="brand-img-two">
                        <Image
                           width={195}
                           height={30}
                           src="/images/brand-logo/brand-logo2_5.png"
                           alt="brand-logo"
                        />
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export { BrandSection };
