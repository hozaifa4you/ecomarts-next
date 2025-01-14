"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { GalleryData } from "@/utils/data/homepage-2";

const GallerySection = () => {
   return (
      <section className="gallery-section fix">
         <div className="container">
            <div className="gallery-wrapper-two">
               <div className="section-title text-center mb-50">
                  <div className="subtitle style2">Top Rated</div>
                  <h3 className="title">Incredible Products</h3>
               </div>

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
                           <GalleryCard img={item} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   );
};

const GalleryCard = ({ img }: { img: string }) => {
   return (
      <div className="gallery-thumb">
         <Image width={262} height={340} src={img} alt="thumb" />
         <div className="icon">
            <i className="fa-brands fa-instagram"></i>
         </div>
      </div>
   );
};

export { GallerySection };
