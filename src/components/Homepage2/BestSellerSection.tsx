"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { bestSellerData, BestSellerDataType } from "@/utils/data/homepage-2";

const BestSellerSection = () => {
   const [filter, setFilter] = useState<
      "all" | "casual" | "formal" | "workwear" | "party" | "ethnic"
   >("all");

   const shuffleArray = (array: BestSellerDataType[]) => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
   };

   return (
      <section className="best-seller-product-items-section section-padding2 bg-color3 fix">
         <div className="best-seller-product-items-container-wrapper style4">
            <div className="container">
               <div className="best-seller-product-items-wrapper style1 text-center mb-30">
                  <motion.div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true }}
                     className="section-title"
                  >
                     <div className="subtitle style1">Trendy Items</div>
                     <h3 className="title">our trendy fashion products</h3>
                  </motion.div>
               </div>
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="feature-flex-tab-wrapper"
               >
                  <div className="feature-tab-btn-wrapper">
                     <ul
                        className="nav nav-pills"
                        id="pills-tab"
                        role="tablist"
                     >
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "all" ? "active" : ""
                              }`}
                              id="pills-one-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-one"
                              aria-selected="true"
                              onClick={() => setFilter("all")}
                           >
                              All
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "casual" ? "active" : ""
                              }`}
                              id="pills-two-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-two"
                              aria-selected="false"
                              onClick={() => setFilter("casual")}
                           >
                              Casual
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "formal" ? "active" : ""
                              }`}
                              id="pills-three-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-three"
                              aria-selected="false"
                              onClick={() => setFilter("formal")}
                           >
                              Formal
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "party" ? "active" : ""
                              }`}
                              id="pills-four-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-four"
                              aria-selected="true"
                              onClick={() => setFilter("party")}
                           >
                              Party
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "workwear" ? "active" : ""
                              }`}
                              id="pills-five-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-five"
                              aria-selected="false"
                              onClick={() => setFilter("workwear")}
                           >
                              Workwear
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className={`nav-link ${
                                 filter === "ethnic" ? "active" : ""
                              }`}
                              id="pills-six-tab"
                              type="button"
                              role="tab"
                              aria-controls="pills-six"
                              aria-selected="false"
                              onClick={() => setFilter("ethnic")}
                           >
                              Ethnic
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
               </motion.div>

               <div className="tab-content" id="pills-tabContent">
                  {filter === "all" && (
                     <div
                        className="active"
                        id="pills-one"
                        role="tabpanel"
                        aria-labelledby="pills-one-tab"
                     >
                        <div className="row g-4">
                           {shuffleArray(bestSellerData).map(
                              (product, index) => (
                                 <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                       duration: 0.75,
                                       delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    key={product.id}
                                    className="col-xl-3 col-md-6"
                                 >
                                    <BestSellerCard {...product} />
                                 </motion.div>
                              )
                           )}
                        </div>
                     </div>
                  )}
                  {filter === "casual" && (
                     <div
                        className="active"
                        id="pills-two"
                        role="tabpanel"
                        aria-labelledby="pills-two-tab"
                     >
                        <div className="row g-4">
                           {shuffleArray(bestSellerData).map((product) => (
                              <div
                                 key={product.id}
                                 className="col-xl-3 col-md-6"
                              >
                                 <BestSellerCard {...product} />
                              </div>
                           ))}
                        </div>
                     </div>
                  )}
                  {filter === "ethnic" && (
                     <div
                        className="active"
                        id="pills-three"
                        role="tabpanel"
                        aria-labelledby="pills-three-tab"
                     >
                        <div className="row g-4">
                           {shuffleArray(bestSellerData).map((product) => (
                              <div
                                 key={product.id}
                                 className="col-xl-3 col-md-6"
                              >
                                 <BestSellerCard {...product} />
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  {filter === "formal" && (
                     <div
                        className="active"
                        id="pills-four"
                        role="tabpanel"
                        aria-labelledby="pills-four-tab"
                     >
                        <div className="row g-4">
                           {shuffleArray(bestSellerData).map((product) => (
                              <div
                                 key={product.id}
                                 className="col-xl-3 col-md-6"
                              >
                                 <BestSellerCard {...product} />
                              </div>
                           ))}
                        </div>
                     </div>
                  )}
                  {filter === "party" && (
                     <div
                        className="active"
                        id="pills-five"
                        role="tabpanel"
                        aria-labelledby="pills-five-tab"
                     >
                        <div className="row g-4">
                           {shuffleArray(bestSellerData).map((product) => (
                              <div
                                 key={product.id}
                                 className="col-xl-3 col-md-6"
                              >
                                 <BestSellerCard {...product} />
                              </div>
                           ))}
                        </div>
                     </div>
                  )}
                  {filter === "workwear" && (
                     <div
                        className="active"
                        id="pills-six"
                        role="tabpanel"
                        aria-labelledby="pills-six-tab"
                     >
                        <div className="row g-4">
                           {shuffleArray(bestSellerData).map((product) => (
                              <div
                                 key={product.id}
                                 className="col-xl-3 col-md-6"
                              >
                                 <BestSellerCard {...product} />
                              </div>
                           ))}
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

const BestSellerCard = ({
   category,
   img,
   name,
   offer,
   offerPrice,
   originalPrice,
   w,
}: BestSellerDataType) => {
   return (
      <div className="best-seller-product-items-two">
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
         <div className="best-seller-product-items-two__badge1">{offer}</div>
         <div className="best-seller-product-items-two__thumb">
            <Image width={w} height={255} src={img} alt="thumb" />
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
                  <span className="original-price">${originalPrice}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { BestSellerSection };
