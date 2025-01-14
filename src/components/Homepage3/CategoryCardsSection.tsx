"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
   categoryCardsData,
   CategoryCardsDataType,
} from "@/utils/data/homepage-3";

const CategoryCardsSection = () => {
   return (
      <section className="product-section section-padding3 pb-0 fix">
         <div className="product-contianer-wrapper style3">
            <div className="container">
               <div className="row">
                  <Swiper
                     loop
                     autoplay
                     navigation={{
                        prevEl: "#categorySliderPrev",
                        nextEl: "#categorySliderNext",
                     }}
                     breakpoints={{
                        "0": { slidesPerView: 1 },
                        "576": {
                           slidesPerView: 2,
                           centeredSlides: true,
                           spaceBetween: 20,
                        },
                        "768": { slidesPerView: 3, spaceBetween: 30 },
                        "992": { slidesPerView: 4, spaceBetween: 30 },
                        "1200": { slidesPerView: 6, spaceBetween: 30 },
                     }}
                     modules={[Autoplay, Navigation]}
                  >
                     {categoryCardsData.map((item) => (
                        <SwiperSlide key={item.id}>
                           <CategoryCard {...item} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>

            <div className="arrow-btn">
               <button
                  className="slider-arrow slider-prev"
                  id="categorySliderPrev"
               >
                  <i className="fa-sharp fa-light fa-chevron-left"></i>
               </button>
               <button
                  className="slider-arrow slider-next"
                  id="categorySliderNext"
               >
                  <i className="fa-sharp fa-light fa-chevron-right"></i>
               </button>
            </div>
         </div>
      </section>
   );
};

const CategoryCard = ({ name, qty, icon }: CategoryCardsDataType) => {
   return (
      <div className="product-box-items-three">
         <div className="product-box-items-three__icon">
            <Image width={40} height={40} src={icon} alt="icon" />
         </div>
         <div className="product-box-items-three__content">
            <h6>{name}</h6>
            <p>{qty}</p>
         </div>
      </div>
   );
};

export { CategoryCardsSection };
