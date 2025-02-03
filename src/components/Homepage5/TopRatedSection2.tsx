import { topRatedProductsData } from "@/utils/data/homepage-5";
import { TopRatedProductCard } from "./TopRatedSection";
import { Div, titleEffect } from "../animation";

const TopRatedSection2 = () => {
   return (
      <section className="top-rated-section section-padding2 fix">
         <div className="container">
            <Div {...titleEffect} className="section-title style-5 text-center">
               <div className="subtitle">Top Rated </div>
               <h2 className="title">Trending Product</h2>
            </Div>
            <div className="row">
               {topRatedProductsData.slice(0, 4).map((product, index) => (
                  <Div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 * index }}
                     viewport={{ once: true }}
                     className="col-xl-3 col-md-6 col-lg-4"
                     key={product.id}
                  >
                     <TopRatedProductCard {...product} />
                  </Div>
               ))}
            </div>
         </div>
      </section>
   );
};

export { TopRatedSection2 };
