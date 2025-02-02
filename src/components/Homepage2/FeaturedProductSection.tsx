import Image from "next/image";
import Link from "next/link";

import {
   featuredProductData,
   FeaturedProductDataType,
} from "@/utils/data/homepage-2";
import { Div } from "../animation";

const FeaturedProductSection = () => {
   return (
      <section className="feature-product-items-section section-padding2 bg-color2 fix">
         <div className="feature-product-items-container-wrapper style2">
            <div className="container">
               <div className="top-deals-wrapper style1 text-center mb-50">
                  <Div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true }}
                     className="section-title"
                  >
                     <div className="subtitle style2">Featured Items</div>
                     <h3 className="title">our featured products</h3>
                  </Div>
               </div>

               <div className="row g-4">
                  {featuredProductData.map((product, index) => (
                     <Div
                        initial={{ opacity: 0, y: -25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="col-xl-3 col-md-6"
                        key={product.id}
                     >
                        <FeaturedProductCard {...product} />
                     </Div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

const FeaturedProductCard = ({
   category,
   image,
   name,
   offerPrice,
   price,
}: FeaturedProductDataType) => {
   return (
      <div className="feature-product-items-two">
         <div className="feature-product-items-two__thumb">
            <Image
               width={image.with}
               height={image.height}
               src={image.img}
               alt={name}
            />
         </div>
         <div className="feature-product-items-two__content">
            <div className="feature-product-items-two__details">
               <p className="feature-product-items-two__details--subtitle">
                  {category}
               </p>
               <h6 className="feature-product-items-two__details--title">
                  <Link href="/shop-details-one">{name}</Link>
               </h6>
               <div className="feature-product-items-two__details--price">
                  <span className="offer-price">${offerPrice}</span>
                  <span className="original-price">${price}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { FeaturedProductSection };
