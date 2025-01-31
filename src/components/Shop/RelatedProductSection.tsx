import { beautyCareProductData } from "@/utils/data/homepage-4";
import { TopRatedCard } from "@/components/Homepage4/TopRatedSection";

const RelatedProductSection = () => {
   return (
      <section className="top-rated-section  fix">
         <div className="container">
            <div className="section-title text-start mb-50">
               <h3 className="title">Related Top Rated Products</h3>
            </div>
            <div className="row g-4">
               {beautyCareProductData.slice(0, 4).map((product) => (
                  <div key={product.id} className="col-xl-3 col-md-6">
                     <TopRatedCard {...product} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export { RelatedProductSection };
