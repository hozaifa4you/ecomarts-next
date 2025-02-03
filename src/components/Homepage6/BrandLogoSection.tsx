"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { brandLogoData } from "@/utils/data/homepage-6";

const BrandLogoSection = () => {
   return (
      <div className="brand-logo-slider-section section-padding2 pt-0">
         <div className="container">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.75, ease: "easeInOut" }}
               viewport={{ once: true }}
               className="brand-logo-slider-wrapper-four pt-0 pb-0"
            >
               <Swiper
                  loop
                  autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                  spaceBetween={20}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 2 },
                     767: { slidesPerView: 3 },
                     1200: { slidesPerView: 6 },
                  }}
                  modules={[Autoplay]}
               >
                  {brandLogoData.map((img, i) => (
                     <SwiperSlide key={i}>
                        <BrandLogoSlider img={img} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </motion.div>
         </div>
      </div>
   );
};

const BrandLogoSlider = ({ img }: { img: string }) => {
   return <Image width={165} height={65} src={img} alt="ecomarts-next" />;
};

export { BrandLogoSection };
