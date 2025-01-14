"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
   trendyProductData,
   TrendyProductDataType,
} from "@/utils/data/homepage-3";

type FilterItemsType = "all" | "new in" | "top rated" | "tensing items";

const TrendySection = () => {
   const [filter, setFilter] = useState<FilterItemsType>("all");

   const shuffleArray = (array: TrendyProductDataType[]) => {
      return array.sort(() => Math.random() - 0.5);
   };

   return (
      <section className="trendy-section section-padding3 pb-0 fix">
         <div className="container">
            <div className="row gy-3 d-flex align-items-end">
               <div className="col-xl-6">
                  <div className="section-title">
                     <div className="subtitle style3">THIS MONTH</div>
                     <h2 className="title style3">Trendy Collection</h2>
                  </div>
               </div>
               <div className="col-xl-6">
                  <ul
                     className="nav nav-pills mb-3"
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
                           {filter === "all" && <TabProverb count={8} />}
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`nav-link ${
                              filter === "new in" ? "active" : ""
                           }`}
                           type="button"
                           role="tab"
                           aria-controls="pills-new-in"
                           aria-selected="false"
                           onClick={() => setFilter("new in")}
                        >
                           New In
                           {filter === "new in" && <TabProverb count={10} />}
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`nav-link ${
                              filter === "top rated" ? "active" : ""
                           }`}
                           type="button"
                           role="tab"
                           aria-controls="pills-top-rated"
                           aria-selected="false"
                           onClick={() => setFilter("top rated")}
                        >
                           Top Rated
                           {filter === "top rated" && <TabProverb count={19} />}
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className={`nav-link ${
                              filter === "tensing items" ? "active" : ""
                           }`}
                           type="button"
                           role="tab"
                           aria-controls="pills-tensing"
                           aria-selected="false"
                           onClick={() => setFilter("tensing items")}
                        >
                           Tensing Items
                           {filter === "tensing items" && (
                              <TabProverb count={9} />
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
                        {shuffleArray(trendyProductData).map((item) => (
                           <div className="col-xl-3 col-md-6" key={item.id}>
                              <TrendyCard {...item} />
                           </div>
                        ))}
                     </div>
                  </div>
               )}
               {filter === "new in" && (
                  <div
                     className="tab-pane fade show active"
                     id="pills-all-collection"
                     role="tabpanel"
                     aria-labelledby="pills-all-collection-tab"
                  >
                     <div className="row">
                        {shuffleArray(trendyProductData).map((item) => (
                           <div className="col-xl-3 col-md-6" key={item.id}>
                              <TrendyCard {...item} />
                           </div>
                        ))}
                     </div>
                  </div>
               )}
               {filter === "tensing items" && (
                  <div
                     className="tab-pane fade show active"
                     id="pills-all-collection"
                     role="tabpanel"
                     aria-labelledby="pills-all-collection-tab"
                  >
                     <div className="row">
                        {shuffleArray(trendyProductData).map((item) => (
                           <div className="col-xl-3 col-md-6" key={item.id}>
                              <TrendyCard {...item} />
                           </div>
                        ))}
                     </div>
                  </div>
               )}
               {filter === "top rated" && (
                  <div
                     className="tab-pane fade show active"
                     id="pills-all-collection"
                     role="tabpanel"
                     aria-labelledby="pills-all-collection-tab"
                  >
                     <div className="row">
                        {shuffleArray(trendyProductData).map((item) => (
                           <div className="col-xl-3 col-md-6" key={item.id}>
                              <TrendyCard {...item} />
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

const TabProverb = ({ count }: { count: number }) => {
   return (
      <span className="badge">
         <span className="shape">
            <Image
               width={8}
               height={6}
               src="/images/shape/badge-shape.png"
               alt="shape"
            />
         </span>
         {count}
      </span>
   );
};

const TrendyCard = ({ img, name, price }: TrendyProductDataType) => {
   return (
      <div className="trendy-product-items-three">
         <div className="trendy-product-items-three__thumb">
            <Image width={224} height={168} src={img} alt="thumb" />

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
         <div className="trendy-product-items-three__content">
            <h6>
               <Link href="/shop-details-one">{name}</Link>
            </h6>
            <div className="trendy-product-items-three__content--star-wrap">
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
            </div>
            <p>{price}</p>
         </div>
      </div>
   );
};

export { TrendySection };
