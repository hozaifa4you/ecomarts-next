import Image from "next/image";

import {
   featuredProductData,
   FeaturedProductDataType,
} from "@/utils/data/homepage-3";
import Link from "next/link";

const FeaturedProductSection = () => {
   return (
      <section className="featured-product-section section-padding3 fix">
         <div className="container">
            <div className="section-title mb-40">
               <div className="subtitle style3">THIS MONTH</div>
               <h2 className="title style3">Featured Products</h2>
            </div>
            <div className="row gy-5">
               {featuredProductData.map((item) => (
                  <div className="col-xl-3 col-md-6" key={item.id}>
                     <FeaturedProductCard {...item} />
                  </div>
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
