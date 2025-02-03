"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { incredibleProductsData } from "@/utils/data/homepage-4";
import { titleEffect } from "../animation";

const IncredibleProductsSection = () => {
   return (
      <section className="gallery-section fix">
         <div className="container">
            <div className="gallery-wrapper-four">
               <motion.div
                  {...titleEffect}
                  className="section-title text-center mb-40"
               >
                  <div className="subtitle style4">Top Rated</div>
                  <h2 className="title">Incredible Products</h2>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="slider-area gallerySliderFour"
               >
                  <Swiper
                     loop
                     autoplay
                     spaceBetween={30}
                     breakpoints={{
                        "0": { slidesPerView: 1 },
                        "576": { slidesPerView: 2 },
                        "767": { slidesPerView: 3 },
                        "1200": { slidesPerView: 4 },
                     }}
                     modules={[Autoplay]}
                  >
                     {incredibleProductsData.map((img, index) => (
                        <SwiperSlide key={index}>
                           <IncredibleProductCard img={img} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

const IncredibleProductCard = ({ img }: { img: string }) => {
   return (
      <div className="gallery-thumb">
         <Image
            width={335}
            height={335}
            alt="ecomarts-next"
            src={img}
            className="object-fit-contain"
         />
         <div className="icon">
            <i className="fa-brands fa-instagram"></i>
         </div>
      </div>
   );
};

export { IncredibleProductsSection };
