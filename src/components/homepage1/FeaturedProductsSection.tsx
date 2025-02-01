"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
   featuredProductData,
   FeaturedProductType,
} from "@/utils/data/homepage-1";
import Link from "next/link";

const FeaturedProductsSection = () => {
   const [filter, setFilter] = useState<
      "all" | "oven" | "computer" | "watch" | "camera" | "drone"
   >("all");

   function shuffleArray(array: FeaturedProductType[]) {
      for (let i = array.length - 1; i > 0; i--) {
         const randomIndex = Math.floor(Math.random() * (i + 1));

         [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      }
      return array;
   }

   return (
      <section className="featured-product-section section-padding fix">
         <div className="container">
            <div className="featured-product-wrapper style1">
               <div className="top-deals-wrapper style1 text-center mb-30">
                  <div className="section-title">
                     <div className="subtitle style1">featured products</div>
                     <h2 className="title">Our featured products</h2>
                  </div>
               </div>
               <div className="feature-flex-tab-wrapper">
                  <div className="feature-tab-btn-wrapper">
                     <ul
                        className="nav nav-pills"
                        id="pills-tab2"
                        role="tablist"
                     >
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "all" ? "active" : ""
                              }`}
                              onClick={() => setFilter("all")}
                              id="pills-one-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-one"
                              aria-selected="true"
                           >
                              All
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "oven" ? "active" : ""
                              }`}
                              onClick={() => setFilter("oven")}
                              id="pills-two-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-two"
                              aria-selected="false"
                           >
                              Oven
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "computer" ? "active" : ""
                              }`}
                              onClick={() => setFilter("computer")}
                              id="pills-three-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-three"
                              aria-selected="false"
                           >
                              Computer
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "watch" ? "active" : ""
                              }`}
                              onClick={() => setFilter("watch")}
                              id="pills-four-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-four"
                              aria-selected="true"
                           >
                              Watch
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "camera" ? "active" : ""
                              }`}
                              onClick={() => setFilter("camera")}
                              id="pills-five-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-five"
                              aria-selected="false"
                           >
                              Camera
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "drone" ? "active" : ""
                              }`}
                              onClick={() => setFilter("drone")}
                              id="pills-six-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-six"
                              aria-selected="false"
                           >
                              Drone
                           </button>
                        </li>
                     </ul>
                  </div>
                  <div className="feature-select">
                     <div className="nav-item">
                        <div className="form">
                           <select className="single-select w-100">
                              <option>Select Brand Name</option>
                              <option>Apple</option>
                              <option>Dell</option>
                              <option>LG</option>
                              <option>ASUS</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="tab-content" id="pills-tabContent2">
                  {filter === "all" && (
                     <div
                        className="fade show"
                        id="pills-one"
                        role="tabpanel"
                        aria-labelledby="pills-one-tab"
                     >
                        <div className="feature-tab-content">
                           <div className="row g-4">
                              {shuffleArray(featuredProductData).map(
                                 (product) => (
                                    <div
                                       key={product.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <FeatureCard {...product} />
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                  )}
                  {filter === "camera" && (
                     <div
                        className="fade show"
                        id="pills-one"
                        role="tabpanel"
                        aria-labelledby="pills-one-tab"
                     >
                        <div className="feature-tab-content">
                           <div className="row g-4">
                              {shuffleArray(featuredProductData).map(
                                 (product) => (
                                    <div
                                       key={product.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <FeatureCard {...product} />
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                  )}
                  {filter === "computer" && (
                     <div
                        className="fade show"
                        id="pills-one"
                        role="tabpanel"
                        aria-labelledby="pills-one-tab"
                     >
                        <div className="feature-tab-content">
                           <div className="row g-4">
                              {shuffleArray(featuredProductData).map(
                                 (product) => (
                                    <div
                                       key={product.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <FeatureCard {...product} />
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                  )}
                  {filter === "drone" && (
                     <div
                        className="fade show"
                        id="pills-one"
                        role="tabpanel"
                        aria-labelledby="pills-one-tab"
                     >
                        <div className="feature-tab-content">
                           <div className="row g-4">
                              {shuffleArray(featuredProductData).map(
                                 (product) => (
                                    <div
                                       key={product.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <FeatureCard {...product} />
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                  )}
                  {filter === "oven" && (
                     <div
                        className="fade show"
                        id="pills-one"
                        role="tabpanel"
                        aria-labelledby="pills-one-tab"
                     >
                        <div className="feature-tab-content">
                           <div className="row g-4">
                              {shuffleArray(featuredProductData).map(
                                 (product) => (
                                    <div
                                       key={product.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <FeatureCard {...product} />
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                  )}
                  {filter === "watch" && (
                     <div
                        className="fade show"
                        id="pills-one"
                        role="tabpanel"
                        aria-labelledby="pills-one-tab"
                     >
                        <div className="feature-tab-content">
                           <div className="row g-4">
                              {shuffleArray(featuredProductData).map(
                                 (product) => (
                                    <div
                                       key={product.id}
                                       className="col-xl-3 col-md-6"
                                    >
                                       <FeatureCard {...product} />
                                    </div>
                                 )
                              )}
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

const FeatureCard = ({
   discount,
   img,
   name,
   offerPrice,
   price,
   reviews,
}: FeaturedProductType) => {
   return (
      <div className="featured-product-item-one">
         <div className="featured-product-item-one__thumb">
            <Image width={150} height={185} src={img} alt={name} />
            <div className="badge">{discount}</div>
            <div className="icon">
               <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                  <i className="fa-regular fa-eye"></i>
               </button>
               <Link href="/wishlist">
                  <i className="fa-regular fa-heart"></i>
               </Link>
               <Link href="/cart">
                  <i className="fa-light fa-bag-shopping"></i>
               </Link>
            </div>
         </div>
         <div className="featured-product-item-one__content">
            <div className="featured-product-item-one__content--details-wrapper">
               <div className="price">
                  <h6>
                     <Link href="/shop-details-one">{name}</Link>
                  </h6>
                  <div className="star-wrapper">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <span>{reviews}</span>
                  </div>
                  <span className="price">
                     USD {offerPrice}
                     <small>$ {price}</small>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { FeaturedProductsSection };
