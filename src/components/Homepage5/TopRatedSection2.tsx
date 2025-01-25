import { topRatedProductsData } from "@/utils/data/homepage-5";
import React from "react";
import { TopRatedProductCard } from "./TopRatedSection";

const TopRatedSection2 = () => {
   return (
      <section className="top-rated-section section-padding2 fix">
         <div className="container">
            <div className="section-title style-5 text-center">
               <div className="subtitle">Top Rated </div>
               <h2 className="title">Trending Product</h2>
            </div>
            <div className="row">
               {topRatedProductsData.slice(0, 4).map((product) => (
                  <div className="col-xl-3 col-md-6 col-lg-4" key={product.id}>
                     <TopRatedProductCard {...product} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export { TopRatedSection2 };
