"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
   topRatedProductsData,
   TopRatedProductType,
} from "@/utils/data/homepage-5";

type FilterType = "all" | "new-in" | "top-rated" | "tensing";

const TopRatedSection = () => {
   const [filter, setFilter] = useState<FilterType>("all");

   const shuffleArray = (array: TopRatedProductType[]) => {
      let currentIndex = array.length,
         randomIndex;
      while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex--;
         [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
         ];
      }
      return array;
   };

   return (
      <section className="top-rated-section section-padding2 fix pt-0">
         <div className="container">
            <div className="row gy-3 d-flex align-items-end">
               <div className="col-xl-6">
                  <div className="section-title style-5">
                     <div className="subtitle before-none">New Arrivals</div>
                     <h2 className="title">Discover New Arrivals</h2>
                  </div>
               </div>
               <div className="col-xl-6">
                  <ul
                     className="nav nav-pills style-5 mb-3"
                     id="pills-tab"
                     role="tablist"
                  >
                     <li className="nav-item" role="presentation">
                        <button
                           className={`nav-link ${
                              filter === "all" ? "active" : ""
                           }`}
                           type="button"
                           role="tab"
                           aria-controls="pills-all-collection"
                           aria-selected="true"
                           onClick={() => setFilter("all")}
                        >
                           All Collection
                           {filter === "all" && (
                              <span className="badge">
                                 <span className="shape">
                                    <Image
                                       width={8}
                                       height={6}
                                       src="/images/shape/badge-shape-2.png"
                                       alt="shape"
                                    />
                                 </span>
                                 8
                              </span>
                           )}
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`nav-link ${
                              filter === "new-in" ? "active" : ""
                           }`}
                           type="button"
                           role="tab"
                           aria-controls="pills-new-in"
                           aria-selected="false"
                           onClick={() => setFilter("new-in")}
                        >
                           New In
                           {filter === "new-in" && (
                              <span className="badge">
                                 <span className="shape">
                                    <Image
                                       width={8}
                                       height={6}
                                       src="/images/shape/badge-shape-2.png"
                                       alt="shape"
                                    />
                                 </span>
                                 8
                              </span>
                           )}
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`nav-link ${
                              filter === "top-rated" ? "active" : ""
                           }`}
                           type="button"
                           role="tab"
                           aria-controls="pills-top-rated"
                           aria-selected="false"
                           onClick={() => setFilter("top-rated")}
                        >
                           Top Rated
                           {filter === "top-rated" && (
                              <span className="badge">
                                 <span className="shape">
                                    <Image
                                       width={8}
                                       height={6}
                                       src="/images/shape/badge-shape-2.png"
                                       alt="shape"
                                    />
                                 </span>
                                 8
                              </span>
                           )}
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`nav-link ${
                              filter === "tensing" ? "active" : ""
                           }`}
                           type="button"
                           role="tab"
                           aria-controls="pills-tensing"
                           aria-selected="false"
                           onClick={() => setFilter("tensing")}
                        >
                           Tensing Items
                           {filter === "tensing" && (
                              <span className="badge">
                                 <span className="shape">
                                    <Image
                                       width={8}
                                       height={6}
                                       src="/images/shape/badge-shape-2.png"
                                       alt="shape"
                                    />
                                 </span>
                                 8
                              </span>
                           )}
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
               {filter === "all" && (
                  <div
                     className="tab-pane fade show active"
                     id="pills-all-collection"
                     role="tabpanel"
                     aria-labelledby="pills-all-collection-tab"
                  >
                     <div className="row">
                        {shuffleArray(topRatedProductsData).map((product) => (
                           <div
                              className="col-xl-3 col-md-6 col-lg-4"
                              key={product.id}
                           >
                              <TopRatedProductCard {...product} />
                           </div>
                        ))}
                     </div>
                  </div>
               )}
               {filter === "new-in" && (
                  <div
                     className="tab-pane fade show active"
                     id="pills-all-collection"
                     role="tabpanel"
                     aria-labelledby="pills-all-collection-tab"
                  >
                     <div className="row">
                        {shuffleArray(topRatedProductsData).map((product) => (
                           <div
                              className="col-xl-3 col-md-6 col-lg-4"
                              key={product.id}
                           >
                              <TopRatedProductCard {...product} />
                           </div>
                        ))}
                     </div>
                  </div>
               )}
               {filter === "tensing" && (
                  <div
                     className="tab-pane fade show active"
                     id="pills-all-collection"
                     role="tabpanel"
                     aria-labelledby="pills-all-collection-tab"
                  >
                     <div className="row">
                        {shuffleArray(topRatedProductsData).map((product) => (
                           <div
                              className="col-xl-3 col-md-6 col-lg-4"
                              key={product.id}
                           >
                              <TopRatedProductCard {...product} />
                           </div>
                        ))}
                     </div>
                  </div>
               )}
               {filter === "top-rated" && (
                  <div
                     className="tab-pane fade show active"
                     id="pills-all-collection"
                     role="tabpanel"
                     aria-labelledby="pills-all-collection-tab"
                  >
                     <div className="row">
                        {shuffleArray(topRatedProductsData).map((product) => (
                           <div
                              className="col-xl-3 col-md-6 col-lg-4"
                              key={product.id}
                           >
                              <TopRatedProductCard {...product} />
                           </div>
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

export const TopRatedProductCard = ({
   category,
   img,
   name,
   offerPrice,
   price,
   tag,
}: TopRatedProductType) => {
   return (
      <div className="best-seller-product-items-two style-seller-3 style-border style-5">
         <div className="icon-box2">
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
         <div className="best-seller-product-items-two__badge1">{tag}</div>
         <div className="best-seller-product-items-two__thumb">
            <Image width={200} height={200} src={img} alt="thumb" />
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
                  {" "}
                  <span className="original-price">${price}</span>
                  <span className="offer-price">${offerPrice}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { TopRatedSection };
