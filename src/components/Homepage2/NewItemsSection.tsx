"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { newItemData, NewItemDataType } from "@/utils/data/homepage-2";

const NewItemsSection = () => {
   return (
      <section className="feature-shop-section fix section-padding2">
         <div className="feature-shop-wrapper">
            <div className="row align-items-center">
               <div className="col-xl-6">
                  <div className="feature-shop-thumb">
                     <Image
                        width={940}
                        height={770}
                        src="/images/feature-shop.jpg"
                        alt="img"
                     />
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="feature-shop-wrapper mt-4 mt-lg-0">
                     <div className="section-title mb-40">
                        <div className="subtitle style1">New Products</div>
                        <h3 className="title text-white">Meet New Arrivals</h3>
                     </div>

                     <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                        loop
                        breakpoints={{
                           640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                           },
                           768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                           },
                           1400: {
                              slidesPerView: 3,
                              spaceBetween: 30,
                           },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                     >
                        {newItemData.map((item) => (
                           <SwiperSlide key={item.id}>
                              <NewItemCard {...item} />
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

const NewItemCard = ({
   category,
   img,
   name,
   offerPrice,
   price,
}: NewItemDataType) => {
   return (
      <div className="best-seller-product-items-two">
         <div className="icon-box2">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
               <i className="fa-regular fa-eye"></i>
            </button>
            <a href="wishlist.html">
               <i className="fa-regular fa-heart"></i>
            </a>
            <a href="cart.html">
               <i className="fa-light fa-bag-shopping"></i>
            </a>
         </div>
         <div className="best-seller-product-items-two__thumb">
            <Image width={138} height={255} src={img} alt="thumb" />
         </div>
         <div className="best-seller-product-items-two__content">
            <div className="best-seller-product-items-two__details">
               <p className="best-seller-product-items-two__details--subtitle">
                  {category}
               </p>
               <h6 className="best-seller-product-items-two__details--title">
                  <Link href="/shop-details-one">{name}</Link>
               </h6>
               <div className="best-seller-product-items-two__details--price">
                  <span className="offer-price">${offerPrice}</span>
                  <span className="original-price">${price}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { NewItemsSection };
