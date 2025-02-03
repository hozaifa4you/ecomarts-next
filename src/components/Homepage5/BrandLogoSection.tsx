"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { brandLogoData } from "@/utils/data/homepage-5";

const BrandLogoSection = () => {
   return (
      <div className="brand-logo-slider-section">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="container"
         >
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
                  {brandLogoData.map((brand, index) => (
                     <SwiperSlide key={index}>
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
         </motion.div>
      </div>
   );
};

export { BrandLogoSection };
