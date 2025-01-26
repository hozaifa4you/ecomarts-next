import Image from "next/image";
import Link from "next/link";

import {
   featuredProductData,
   type FeaturedProductType,
} from "@/utils/data/homepage-6";

const FeaturedProductSection = () => {
   return (
      <section className="beauty-care-product-section section-padding2 fix">
         <div className="beauty-care-product-container-wrapper style4">
            <div className="container">
               <div className="row gy-4 d-flex align-items-center mb-40">
                  <div className="col-xl-6">
                     <div className="section-title style-6">
                        <div className="subtitle style4">Products</div>
                        <h2 className="title">Our Featured Products</h2>
                     </div>
                  </div>
                  <div className="col-xl-6 d-flex justify-content-md-end">
                     <div className="btn-wrapper">
                        <Link className="theme-btn style15" href="/shop">
                           View All <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="row g-0">
                  {featuredProductData.map((product) => (
                     <div
                        className="col-xl-3 col-lg-6 col-md-6"
                        key={product.id}
                     >
                        <FeaturedProductCard {...product} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

const FeaturedProductCard = ({
   OfferPrice,
   img,
   name,
   price,
   tag,
}: FeaturedProductType) => {
   return (
      <div className="best-seller-product-items-two style-seller-3 style-11">
         <div className="icon-box2">
            <button>
               <i className="fa-regular fa-eye"></i>
            </button>
            <Link href="/wishlist">
               <i className="fa-regular fa-heart"></i>
            </Link>
            <Link href="/cart">
               <i className="fa-light fa-bag-shopping"></i>
            </Link>
         </div>
         <div className="badge2">{tag}</div>
         <div className="product-thumb">
            <Image width={264} height={240} src={img} alt="img" />
         </div>
         <div className="product-content">
            <div className="product-details">
               <p className="subtitle">{name}</p>
               <div className="pricee">
                  <div className="text">
                     <span className="offer-price">${OfferPrice}</span>
                     <span className="original-price">${price}</span>
                  </div>
               </div>
            </div>
            <div className="star">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star color"></i>
            </div>
         </div>
      </div>
   );
};

export { FeaturedProductSection };
