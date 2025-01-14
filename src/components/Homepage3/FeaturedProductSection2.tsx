import React from "react";

const FeaturedProductSection2 = () => {
   return (
      <section className="featured-product-section section-padding3 fix">
         <div className="container">
            <div className="section-title mb-40">
               <div className="subtitle style3">THIS MONTH</div>
               <h2 className="title style3">Featured Products</h2>
            </div>
            <div className="row gy-5">
               <div className="col-xl-3 col-md-6">
                  <div className="featured-product-items-three">
                     <div className="featured-product-items-three__thumb">
                        <img
                           src="/images/featured-item/featuredItemThumb3_1.png"
                           alt="thumb"
                        />
                        <div className="icon">
                           <button
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2"
                           >
                              <i className="fa-regular fa-eye"></i>
                           </button>
                           <a href="wishlist.html">
                              <i className="fa-regular fa-heart"></i>
                           </a>
                           <a href="cart.html">
                              <i className="fa-light fa-bag-shopping"></i>
                           </a>
                        </div>
                     </div>
                     <div className="featured-product-items-three__content">
                        <h6>
                           <a href="shop-details-one.html">A Organic Avocado</a>
                        </h6>
                        <div className="featured-product-items-three__content--star-wrap">
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                        </div>
                        <p>USD 20.00</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="featured-product-items-three">
                     <div className="featured-product-items-three__thumb">
                        <img
                           src="/images/featured-item/featuredItemThumb3_2.png"
                           alt="thumb"
                        />
                        <div className="icon">
                           <button
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2"
                           >
                              <i className="fa-regular fa-eye"></i>
                           </button>
                           <a href="wishlist.html">
                              <i className="fa-regular fa-heart"></i>
                           </a>
                           <a href="cart.html">
                              <i className="fa-light fa-bag-shopping"></i>
                           </a>
                        </div>
                     </div>
                     <div className="featured-product-items-three__content">
                        <h6>
                           <a href="shop-details-one.html">Cheddar Fries</a>
                        </h6>
                        <div className="featured-product-items-three__content--star-wrap">
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                        </div>
                        <p>USD 20.00</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="featured-product-items-three">
                     <div className="featured-product-items-three__thumb">
                        <img
                           src="/images/featured-item/featuredItemThumb3_3.png"
                           alt="thumb"
                        />
                        <div className="icon">
                           <button
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2"
                           >
                              <i className="fa-regular fa-eye"></i>
                           </button>
                           <a href="wishlist.html">
                              <i className="fa-regular fa-heart"></i>
                           </a>
                           <a href="cart.html">
                              <i className="fa-light fa-bag-shopping"></i>
                           </a>
                        </div>
                     </div>
                     <div className="featured-product-items-three__content">
                        <h6>
                           <a href="shop-details-one.html">Broccoli Organic</a>
                        </h6>
                        <div className="featured-product-items-three__content--star-wrap">
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                        </div>
                        <p>USD 20.00</p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="featured-product-items-three">
                     <div className="featured-product-items-three__thumb">
                        <img
                           src="/images/featured-item/featuredItemThumb3_4.png"
                           alt="thumb"
                        />
                        <div className="icon">
                           <button
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal2"
                           >
                              <i className="fa-regular fa-eye"></i>
                           </button>
                           <a href="wishlist.html">
                              <i className="fa-regular fa-heart"></i>
                           </a>
                           <a href="cart.html">
                              <i className="fa-light fa-bag-shopping"></i>
                           </a>
                        </div>
                     </div>
                     <div className="featured-product-items-three__content">
                        <h6>
                           <a href="shop-details-one.html">Broccoli Farms</a>
                        </h6>
                        <div className="featured-product-items-three__content--star-wrap">
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                           <i className="fa-regular fa-star"></i>
                        </div>
                        <p>USD 20.00</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeaturedProductSection2;
