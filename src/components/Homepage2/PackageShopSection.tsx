"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { packageShopData, PackageShopDataType } from "@/utils/data/homepage-2";

const PackageShopSection = () => {
   return (
      <section className="package-shop-section section-padding2 fix">
         <div className="container">
            <div className="section-top-wrapper mb-20">
               <div className="row gy-4 pb-3">
                  <div className="col-md-6">
                     <div className="section-title">
                        <div className="subtitle style1">Package and save</div>
                        <h3 className="title">Shop This Look</h3>
                     </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-end">
                     <Link
                        className="theme-btn style7"
                        href="/shop-left-sidebar"
                     >
                        View all <i className="fa-solid fa-chevron-right"></i>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="row gy-30 gx-30">
               <div className="col-xxl-3 col-md-6">
                  {packageShopData.slice(0, 4).map((item) => (
                     <PackageCard key={item.id} {...item} />
                  ))}
               </div>
               <div className="col-xxl-3 col-md-6">
                  {packageShopData.slice(4, 8).map((item) => (
                     <PackageCard key={item.id} {...item} />
                  ))}
               </div>
               <div className="col-xxl-6 col-md-12">
                  <div className="package-shop-preview">
                     <Swiper
                        loop
                        navigation={{
                           prevEl: "#packageSliderPrev",
                           nextEl: "#packageSliderNext",
                        }}
                        autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                        modules={[Navigation, Autoplay]}
                     >
                        <SwiperSlide>
                           <PackageCardSlider
                              name="Fashionable Bags For <br /> Women"
                              img="/images/package-shop/package-shop-preview.png"
                              price={125.21}
                           />
                        </SwiperSlide>
                        <SwiperSlide>
                           <PackageCardSlider
                              name="Fashionable Bags For <br /> Women"
                              img="/images/package-shop/package-shop-preview.png"
                              price={125.21}
                           />
                        </SwiperSlide>
                     </Swiper>
                     <div className="arrow-btn">
                        <button
                           id="packageSliderPrev"
                           className="slider-arrow slider-prev"
                        >
                           <i className="fa-sharp fa-light fa-chevron-left"></i>
                        </button>
                        <button
                           id="packageSliderNext"
                           className="slider-arrow slider-next"
                        >
                           <i className="fa-sharp fa-light fa-chevron-right"></i>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

const PackageCard = ({
   img,
   name,
   offerPrice,
   price,
   reviews,
}: PackageShopDataType) => {
   return (
      <div className="package-shop-one mb-30">
         <div className="package-shop-one__thumb">
            <Image width={125} height={125} src={img} alt="thumb" />
         </div>
         <div className="package-shop-one__content">
            <h4 className="package-shop-one__content-title">
               <Link href="/shop-details-one">{name}</Link>
            </h4>
            <div className="package-shop-one__star-wrap">
               <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
               </div>
               <span>{reviews}</span>
            </div>
            <h4 className="package-shop-one__content-price">
               <span className="offer-price">${offerPrice}</span>
               <span className="original-price">${price}</span>
            </h4>
            <div className="package-shop-one__icons">
               <Link href="/wishlist">
                  <i className="fa-light fa-heart"></i>
               </Link>
               <Link href="/cart">
                  <i className="fa-light fa-bag-shopping"></i>
               </Link>
            </div>
         </div>
      </div>
   );
};

const PackageCardSlider = ({
   img,
   name,
   price,
}: {
   img: string;
   price: number;
   name: string;
}) => {
   return (
      <div className="swiper-slide packges-thumb">
         <Image width={540} height={605} src={img} alt="thumb" />
         <div className="content">
            <h4 dangerouslySetInnerHTML={{ __html: name }}></h4>
            <p>${price}</p>
         </div>
      </div>
   );
};

export { PackageShopSection };

{
   /* <div className="swiper-slide packges-thumb">
   <img src="/images/package-shop/package-shop-preview.png" alt="thumb" />
   <div className="content">
      <h4>
         Fashionable Bags For <br />
         Women
      </h4>
      <p>$179.00</p>
   </div>
</div>; */
}
