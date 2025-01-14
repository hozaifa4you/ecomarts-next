import { bestSellerData, BestSellerDataType } from "@/utils/data/homepage-3";
import Image from "next/image";
import React from "react";

const BestSellerSection = () => {
   return (
      <section className="best-seller-section section-padding3 pb-0 fix">
         <div className="container">
            <div className="row">
               <div className="section-title">
                  <div className="subtitle style3">THIS WEEK</div>
                  <h2 className="title style3">Best Sellers</h2>
               </div>
               {bestSellerData.map((item) => (
                  <div className="col-xl-4 col-md-6" key={item.id}>
                     <BestSellerCard {...item} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

const BestSellerCard = ({ img, name, price }: BestSellerDataType) => {
   return (
      <div className="best-seller-items-three">
         <div className="best-seller-items-three__thumb">
            <Image width={118} height={85} src={img} alt="thumb" />
         </div>
         <div className="best-seller-items-three__content">
            <h6>
               <a href="shop-details-one.html">{name}</a>
            </h6>
            <p>{price}</p>
            <div className="best-seller-items-three__content--star-wrap">
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
            </div>
         </div>
      </div>
   );
};

export { BestSellerSection };
