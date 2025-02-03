"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import {
   popularCategoryDate,
   PopularCategoryDateType,
} from "@/utils/data/homepage-4";

const PopularCategorySection = () => {
   return (
      <motion.section
         initial={{ opacity: 0, y: 25 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
         className="popular-category-section section-padding4 fix"
         id="category"
      >
         <div className="container">
            <div className="row gy-5">
               <div className="section-title text-center">
                  <div className="subtitle style4">SHOP BY CATEGORIES</div>
                  <h2 className="title">Popular Categories</h2>
               </div>
               <Swiper
                  loop
                  autoplay={{ delay: 2500 }}
                  breakpoints={{
                     1199: {
                        slidesPerView: 4,
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
                  modules={[Autoplay]}
               >
                  {popularCategoryDate.map((category) => (
                     <SwiperSlide key={category.id}>
                        <PopularCategoryCard {...category} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </motion.section>
   );
};

const PopularCategoryCard = ({ count, img, name }: PopularCategoryDateType) => {
   return (
      <div className="popular-category-items-four">
         <div className="popular-category-items-four__thumb">
            <Image width={330} height={468} src={img} alt="thumb" />
         </div>
         <div className="popular-category-items-four__content">
            <div className="popular-category-items-four__content--title">
               {name}
            </div>
            <p>{count}</p>
         </div>
      </div>
   );
};

export { PopularCategorySection };
