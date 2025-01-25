"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { incredibleProductsData } from "@/utils/data/homepage-4";

const IncredibleProductsSection = () => {
   return (
      <section className="gallery-section fix">
         <div className="container">
            <div className="gallery-wrapper-four">
               <div className="section-title text-center mb-40">
                  <div className="subtitle style4">Top Rated</div>
                  <h2 className="title">Incredible Products</h2>
               </div>

               <div className="slider-area gallerySliderFour">
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
                     {incredibleProductsData.map((img) => (
                        <SwiperSlide key={img}>
                           <IncredibleProductCard img={img} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
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
