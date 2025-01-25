import Image from "next/image";
import Link from "next/link";

import {
   beautyCareProductData,
   BeautyCareProductDataType,
} from "@/utils/data/homepage-4";

const BeautyCareProductSection = () => {
   return (
      <section className="beauty-care-product-section section-padding4 bg-color6 fix">
         <div className="beauty-care-product-container-wrapper style4">
            <div className="container">
               <div className="row gy-4 d-flex align-items-center mb-40">
                  <div className="col-xl-6">
                     <div className="section-title">
                        <div className="subtitle style4">TOP BRAND</div>
                        <h2 className="title">Beauty Care Products</h2>
                     </div>
                  </div>
                  <div className="col-xl-6 d-flex justify-content-md-end">
                     <div className="btn-wrapper">
                        <Link className="theme-btn style10" href="#">
                           View All
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="row g-4">
                  {beautyCareProductData.map((product) => (
                     <div className="col-xl-3 col-md-6" key={product.id}>
                        <BeautyCareProductCard {...product} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

const BeautyCareProductCard = ({
   category,
   img,
   name,
   offerPrice,
   price,
   tag,
}: BeautyCareProductDataType) => {
   return (
      <div className="best-seller-product-items-two style-seller-3">
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
            <Image width={img.w} height={img.h} src={img.url} alt="thumb" />
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

export { BeautyCareProductSection };
