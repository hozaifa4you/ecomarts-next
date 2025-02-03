"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import { FoodCollectionCard } from "./FoodCollectionSection";
import { foodCollectionData } from "@/utils/data/homepage-7";
import { titleEffect } from "../animation";

const StylishCollectionSection = () => {
   return (
      <section
         className="food-collection-section section-padding2 pt-0 fix"
         id="category"
      >
         <div className="container">
            <div className="row gy-3 justify-content-between">
               <div className="col-xl-6">
                  <motion.div
                     {...titleEffect}
                     className="section-title style-7"
                  >
                     <div className="subtitle">Collection</div>
                     <h2 className="title">Stylish Collection</h2>
                  </motion.div>
               </div>
               <div className="col-xl-2">
                  <motion.div {...titleEffect} className="array-button">
                     <button className="array-prev" id="stylish-7-prev">
                        <i className="far fa-chevron-left"></i>
                     </button>
                     <button className="array-next" id="stylish-7-next">
                        <i className="far fa-chevron-right"></i>
                     </button>
                  </motion.div>
               </div>
            </div>
            <Swiper
               loop
               autoplay
               navigation={{
                  nextEl: "#stylish-7-next",
                  prevEl: "#stylish-7-prev",
               }}
               breakpoints={{
                  1399: {
                     slidesPerView: 4,
                  },
                  1199: {
                     slidesPerView: 3,
                  },
                  991: {
                     slidesPerView: 3,
                  },
                  767: {
                     slidesPerView: 2,
                  },
                  575: {
                     slidesPerView: 1,
                  },
                  0: {
                     slidesPerView: 1,
                  },
               }}
               modules={[Autoplay, Navigation]}
            >
               {foodCollectionData.map((food) => (
                  <SwiperSlide key={food.id}>
                     <FoodCollectionCard {...food} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};

export { StylishCollectionSection };
