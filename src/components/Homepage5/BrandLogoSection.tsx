"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { brandLogoData } from "@/utils/data/homepage-5";

const BrandLogoSection = () => {
   return (
      <div className="brand-logo-slider-section">
         <div className="container">
            <div className="brand-logo-slider-wrapper-four pt-0 pb-0">
               <Swiper
                  loop
                  autoplay
                  breakpoints={{
                     "0": { slidesPerView: 1 },
                     "576": { slidesPerView: 2 },
                     "767": { slidesPerView: 3 },
                     "1200": { slidesPerView: 6 },
                  }}
                  modules={[Autoplay]}
               >
                  {brandLogoData.map((brand) => (
                     <SwiperSlide key={brand}>
                        <Image
                           width={165}
                           height={65}
                           alt="ecomarts-next"
                           src={brand}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export { BrandLogoSection };
