"use client";
import { bestSellerData, BestSellerType } from "@/utils/data/homepage-1";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BestSeller = () => {
   const [filter, setFilter] = useState<"latest" | "popular" | "on-sale">(
      "latest"
   );

   function shuffleArray(array: BestSellerType[]) {
      for (let i = array.length - 1; i > 0; i--) {
         const randomIndex = Math.floor(Math.random() * (i + 1));

         [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      }
      return array;
   }

   const handleSelectChange = () => {
      shuffleArray(bestSellerData);
   };

   return (
      <section className="best-seller-section section-padding fix bg-1">
         <div className="container">
            <div className="section-top-wrapper">
               <div className="row gy-3">
                  <div className="col-lg-3">
                     <div className="section-title">
                        <div className="subtitle style1">Best deals</div>
                        <h2 className="title">Best Sellers</h2>
                     </div>
                  </div>
                  <div className="col-lg-9 d-flex justify-content-xl-end">
                     <div className="best-seller-tab-btn-wrapper">
                        <ul
                           className="nav nav-pills"
                           id="pills-tab"
                           role="tablist"
                        >
                           <li className="nav-item" role="presentation">
                              <button
                                 className={`nav-link ${
                                    filter === "latest" ? "active" : ""
                                 }`}
                                 id="pills-home-tab"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-home"
                                 aria-selected="true"
                                 onClick={() => setFilter("latest")}
                              >
                                 Latest
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className={`nav-link ${
                                    filter === "popular" ? "active" : ""
                                 }`}
                                 id="pills-profile-tab"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-profile"
                                 aria-selected="false"
                                 onClick={() => setFilter("popular")}
                              >
                                 Popular
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className={`nav-link ${
                                    filter === "on-sale" ? "active" : ""
                                 }`}
                                 id="pills-contact-tab"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-contact"
                                 aria-selected="false"
                                 onClick={() => setFilter("on-sale")}
                              >
                                 On-sale
                              </button>
                           </li>
                           <li className="nav-item">
                              <div className="form">
                                 <select
                                    name="price-range"
                                    id="price-range"
                                    className="price-range-select"
                                    onChange={handleSelectChange}
                                 >
                                    <option value="">Price</option>
                                    <option value="50.0">$50.0</option>
                                    <option value="32.75">$32.75</option>
                                    <option value="79.52">$79.52</option>
                                    <option value="25.78">$25.78</option>
                                 </select>
                              </div>
                           </li>
                           <li className="nav-item" role="presentation">
                              <Link
                                 className="theme-btn style7"
                                 href="/shop-right-sidebar"
                              >
                                 View all
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="tab-content" id="pills-tabContent">
                     {filter === "latest" && (
                        <div
                           className="fade show active"
                           id="pills-home"
                           role="tabpanel"
                           aria-labelledby="pills-home-tab"
                           tabIndex={0}
                        >
                           <div className="best-seller-tab-content-wrapper">
                              <div className="row g-4">
                                 {shuffleArray(bestSellerData).map((item) => (
                                    <div
                                       className="col-xl-3 col-md-6"
                                       key={item.id}
                                    >
                                       <BestSellerCard {...item} />
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )}
                     {filter === "popular" && (
                        <div
                           className="show fade"
                           id="pills-profile"
                           role="tabpanel"
                           aria-labelledby="pills-profile-tab"
                           tabIndex={0}
                        >
                           <div className="best-seller-tab-content-wrapper">
                              <div className="row g-4">
                                 {shuffleArray(bestSellerData).map((item) => (
                                    <div
                                       key={item.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <BestSellerCard {...item} />
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )}
                     {filter === "on-sale" && (
                        <div
                           className="fade show"
                           id="pills-contact"
                           role="tabpanel"
                           aria-labelledby="pills-contact-tab"
                           tabIndex={0}
                        >
                           <div className="best-seller-tab-content-wrapper">
                              <div className="row g-4">
                                 {shuffleArray(bestSellerData).map((item) => (
                                    <div
                                       key={item.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <BestSellerCard {...item} />
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
            <div
               className="video-container bg-img"
               style={{ backgroundImage: "url(/images/video/video-bg.jpg)" }}
            >
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="video-content">
                        <div className="video-box">
                           <Link
                              href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                              className="play-btn popup-video"
                           >
                              <i className="fa-sharp fa-solid fa-play"></i>
                           </Link>
                        </div>
                        <div className="section-title">
                           <h3 className="title">See The Worlds Like Birds</h3>
                        </div>
                        <Link className="theme-btn style3" href="/cart">
                           View All Products
                        </Link>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="video-thumb">
                        <Image
                           width={610}
                           height={330}
                           src="/images/video/drone.png"
                           alt="Thumb"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

const BestSellerCard = ({
   mainPrice,
   name,
   offerPrice,
   reviews,
   img,
}: BestSellerType) => {
   return (
      <div className="best-seller-one">
         <div className="best-seller-one__thumb">
            <Image width={100} height={100} src={img} alt="thumb" />
         </div>
         <div className="best-seller-one__content">
            <h4 className="best-seller-one__content-title">
               <Link href="/shop-details-one">{name}</Link>
            </h4>
            <div className="best-seller-one__star-wrap">
               <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
               </div>
               <span>{reviews}</span>
            </div>
            <h4 className="best-seller-one__content-price">
               <span className="offer-price">${offerPrice}</span>
               <span className="original-price">${mainPrice}</span>
            </h4>
            <div className="best-seller-one__icons">
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

export { BestSeller };
