"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { GalleryData } from "@/utils/data/homepage-2";
import { Div } from "../animation";

const GallerySection = () => {
   return (
      <section className="gallery-section fix">
         <div className="container">
            <div className="gallery-wrapper-two">
               <Div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="section-title text-center mb-50"
               >
                  <div className="subtitle style2">Top Rated</div>
                  <h3 className="title">Incredible Products</h3>
               </Div>

               <div className="slider-area gallerySliderTwo">
                  <Swiper
                     loop
                     autoplay={{ delay: 3000 }}
                     slidesPerView={"auto"}
                     spaceBetween={10}
                     breakpoints={{
                        0: { slidesPerView: 2, spaceBetween: 10 },
                        767: { slidesPerView: 3, spaceBetween: 30 },
                        1290: { slidesPerView: 4, spaceBetween: 30 },
                        1400: { slidesPerView: 5, spaceBetween: 30 },
                     }}
                     modules={[Autoplay]}
                  >
                     {GalleryData.map((item, index) => (
                        <SwiperSlide key={index}>
                           <GalleryCard img={item} index={index} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
};

const GalleryCard = ({ img, index }: { img: string; index: number }) => {
   return (
      <Div
         initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.1 * index }}
         viewport={{ once: true }}
         className="gallery-thumb"
      >
         <Image width={262} height={340} src={img} alt="thumb" />
         <div className="icon">
            <i className="fa-brands fa-instagram"></i>
         </div>
      </Div>
   );
};

export { GallerySection };
