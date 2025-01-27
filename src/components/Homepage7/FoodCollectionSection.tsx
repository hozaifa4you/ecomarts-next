import Image from "next/image";
import Link from "next/link";

import {
   foodCollectionData,
   FoodCollectionType,
} from "@/utils/data/homepage-7";

const FoodCollectionSection = () => {
   return (
      <section
         className="food-collection-section section-padding4 fix section-bg-7"
         id="category"
      >
         <div className="container">
            <div className="section-title text-center style-7">
               <div className="subtitle">Collection</div>
               <h2 className="title">Find Animal Food by Category</h2>
            </div>
            <div className="row">
               {foodCollectionData.map((food) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={food.id}>
                     <FoodCollectionCard {...food} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export const FoodCollectionCard = ({
   img,
   name,
   offerPrice,
   price,
}: FoodCollectionType) => {
   return (
      <div className="best-seller-product-items-two style-seller-3 style-border style-7">
         <div className="icon-box2">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
               <i className="fa-regular fa-eye"></i>
            </button>
            <a href="wishlist.html">
               <i className="fa-regular fa-heart"></i>
            </a>
            <a href="cart.html">
               <i className="fa-light fa-bag-shopping"></i>
            </a>
         </div>
         <div className="best-seller-product-items-two__thumb">
            <Image width={330} height={350} src={img} alt="thumb" />
         </div>
         <div className="best-seller-product-items-two__content">
            <div className="best-seller-product-items-two__details">
               <div className="best-seller-product-items-two__details--price">
                  <span className="original-price">${price}</span>{" "}
                  <span className="offer-price">${offerPrice}</span>
               </div>
               <h6 className="best-seller-product-items-two__details--title">
                  <Link href="/shop-details-one">{name}</Link>
               </h6>
               <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star color-2"></i>
               </div>
            </div>
         </div>
      </div>
   );
};

export { FoodCollectionSection };
