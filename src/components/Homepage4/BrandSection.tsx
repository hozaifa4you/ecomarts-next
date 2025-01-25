"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { brandData } from "@/utils/data/homepage-4";

const BrandSection = () => {
   return (
      <div className="brand-logo-slider-section">
         <div className="container">
            <div className="brand-logo-slider-wrapper-four">
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
                  {brandData.map((brand) => (
                     <SwiperSlide key={brand}>
                        <Image
                           src={brand}
                           width={150}
                           height={60}
                           alt="ecomarts-next"
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};
// data-slider-options='{"loop": true,"autoplay": true,"breakpoints":}'

export { BrandSection };
