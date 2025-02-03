import Image from "next/image";
import Link from "next/link";

import {
   beautyCareProductData,
   BeautyCareProductDataType,
} from "@/utils/data/homepage-4";
import { Div } from "../animation";

const TopRatedSection = () => {
   return (
      <section className="top-rated-section section-padding4 fix">
         <div className="container">
            <Div
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="section-title text-center mb-40"
            >
               <div className="subtitle style4">Top Rated</div>
               <h2 className="title">Incredible Products</h2>
            </Div>
            <div className="row g-4">
               {beautyCareProductData.slice(4, 8).map((product, index) => (
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.1 * index }}
                     viewport={{ once: true }}
                     className="col-xl-3 col-md-6"
                     key={product.id}
                  >
                     <TopRatedCard {...product} />
                  </Div>
               ))}
            </div>
         </div>
      </section>
   );
};

export const TopRatedCard = ({
   category,
   img,
   name,
   offerPrice,
   price,
   tag,
}: BeautyCareProductDataType) => {
   return (
      <div className="best-seller-product-items-two style-seller-3 style-border">
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
            <Image src={img.url} width={img.w} height={img.h} alt="thumb" />
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
                  <span className="offer-price">${offerPrice}</span>{" "}
                  <span className="original-price">${price}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { TopRatedSection };
