import Image from "next/image";
import Link from "next/link";

import { topCategoryData, TopCategoryType } from "@/utils/data/homepage-6";

const TopCategorySection = () => {
   return (
      <section className="product-section section-padding2 pt-0 fix">
         <div className="product-contianer-wrapper style3">
            <div className="container">
               <div className="section-title style-6 text-center mb-50">
                  <div className="subtitle">Category</div>
                  <h2>Shop by Top Categories</h2>
               </div>
               <div className="row g-4">
                  {topCategoryData.map((category) => (
                     <div
                        className="col-xl-2 col-lg-4 col-md-6 col-sm-6"
                        key={category.id}
                     >
                        <TopCategoryCard {...category} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

const TopCategoryCard = ({ img, name }: TopCategoryType) => {
   return (
      <div className="product-box-items-three style-2">
         <div className="product-image">
            <Image src={img} width={130} height={130} alt="ecomarts-category" />
         </div>
         <div className="product-content">
            <h6>
               <Link href="/shop-details-one">{name}</Link>
            </h6>
         </div>
      </div>
   );
};

export { TopCategorySection };
