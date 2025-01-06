"use client";
import { categoryData, CategoryType } from "@/utils/data/homepage-1";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CategoryCards = () => {
   return (
      <section className="product-section section-padding fix">
         <div className="product-contianer-wrapper style1">
            <div className="container">
               <div className="row">
                  <Swiper
                     id="productSliderOne"
                     className="gt-slider productSliderOne"
                     loop
                     slidesPerView={2}
                     spaceBetween={10}
                     pagination={{
                        clickable: true,
                     }}
                     breakpoints={{
                        640: {
                           slidesPerView: 3,
                           spaceBetween: 20,
                        },
                        768: {
                           slidesPerView: 3,
                           spaceBetween: 30,
                        },
                        1024: {
                           slidesPerView: 5,
                           spaceBetween: 30,
                        },
                        1400: {
                           slidesPerView: 6,
                           spaceBetween: 30,
                        },
                     }}
                     autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                     navigation={{
                        nextEl: "#category-slider-next",
                        prevEl: "#category-slider-prev",
                     }}
                     modules={[Autoplay, Navigation]}
                  >
                     {categoryData.map((category) => (
                        <SwiperSlide key={category.id}>
                           <CategoryCard {...category} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>

            <div className="arrow-btn">
               <button
                  data-slider-prev="#productSliderOne"
                  className="slider-arrow slider-prev"
                  id="category-slider-prev"
               >
                  <i className="fa-sharp fa-light fa-chevron-left"></i>
               </button>
               <button
                  data-slider-next="#productSliderOne"
                  className="slider-arrow slider-next"
                  id="category-slider-next"
               >
                  <i className="fa-sharp fa-light fa-chevron-right"></i>
               </button>
            </div>
         </div>
      </section>
   );
};

const CategoryCard = ({ category, count, svg }: CategoryType) => {
   return (
      <div className="product-box-items-one">
         <div className="product-box-items-one__icon">{svg}</div>
         <div className="product-box-items-one__content">
            <h6>{category}</h6>
            <p>{count}</p>
         </div>
      </div>
   );
};

export { CategoryCards };
