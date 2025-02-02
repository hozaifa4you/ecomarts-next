import Image from "next/image";
import Link from "next/link";

import { Div } from "@/components/animation";
import {
   featuredProductData,
   FeaturedProductDataType,
} from "@/utils/data/homepage-3";

const FeaturedProductSection = () => {
   return (
      <section className="featured-product-section section-padding3 fix">
         <div className="container">
            <Div
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="section-title mb-40"
            >
               <div className="subtitle style3">THIS MONTH</div>
               <h2 className="title style3">Featured Products</h2>
            </Div>
            <div className="row gy-5">
               {featuredProductData.map((item, index) => (
                  <Div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className="col-xl-3 col-md-6"
                     key={item.id}
                  >
                     <FeaturedProductCard {...item} />
                  </Div>
               ))}
            </div>
         </div>
      </section>
   );
};

export const FeaturedProductCard = ({
   img,
   name,
   price,
}: FeaturedProductDataType) => {
   return (
      <div className="featured-product-items-three">
         <div className="featured-product-items-three__thumb">
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
         <div className="featured-product-items-three__content">
            <h6>
               <Link href="/shop-details-one">{name}</Link>
            </h6>
            <div className="featured-product-items-three__content--star-wrap">
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

export { FeaturedProductSection };
