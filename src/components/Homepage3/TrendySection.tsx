import React from "react";

const TrendySection = () => {
   return (
      <section className="trendy-section section-padding3 pb-0 fix">
         <div className="container">
            <div className="row gy-3 d-flex align-items-end">
               <div className="col-xl-6">
                  <div className="section-title">
                     <div className="subtitle style3">THIS MONTH</div>
                     <h2 className="title style3">Trendy Collection</h2>
                  </div>
               </div>
               <div className="col-xl-6">
                  <ul
                     className="nav nav-pills mb-3"
                     id="pills-tab"
                     role="tablist"
                  >
                     <li className="nav-item" role="presentation">
                        <button
                           className="nav-link active"
                           id="pills-all-collection-tab"
                           data-bs-toggle="pill"
                           data-bs-target="#pills-all-collection"
                           type="button"
                           role="tab"
                           aria-controls="pills-all-collection"
                           aria-selected="true"
                        >
                           All Collection
                           <span className="badge">
                              <span className="shape">
                                 <img
                                    src="/images/shape/badge-shape.png"
                                    alt="shape"
                                 />
                              </span>
                              8
                           </span>
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className="nav-link"
                           id="pills-new-in-tab"
                           data-bs-toggle="pill"
                           data-bs-target="#pills-new-in"
                           type="button"
                           role="tab"
                           aria-controls="pills-new-in"
                           aria-selected="false"
                        >
                           New In
                           <span className="badge">
                              <span className="shape">
                                 <img
                                    src="/images/shape/badge-shape.png"
                                    alt="shape"
                                 />
                              </span>
                              8
                           </span>
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className="nav-link"
                           id="pills-top-rated-tab"
                           data-bs-toggle="pill"
                           data-bs-target="#pills-top-rated"
                           type="button"
                           role="tab"
                           aria-controls="pills-top-rated"
                           aria-selected="false"
                        >
                           Top Rated
                           <span className="badge">
                              <span className="shape">
                                 <img
                                    src="/images/shape/badge-shape.png"
                                    alt="shape"
                                 />
                              </span>
                              8
                           </span>
                        </button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button
                           className="nav-link"
                           id="pills-tensing-tab"
                           data-bs-toggle="pill"
                           data-bs-target="#pills-tensing"
                           type="button"
                           role="tab"
                           aria-controls="pills-tensing"
                           aria-selected="false"
                        >
                           Tensing Items
                           <span className="badge">
                              <span className="shape">
                                 <img
                                    src="/images/shape/badge-shape.png"
                                    alt="shape"
                                 />
                              </span>
                              8
                           </span>
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
               <div
                  className="tab-pane fade show active"
                  id="pills-all-collection"
                  role="tabpanel"
                  aria-labelledby="pills-all-collection-tab"
               >
                  <div className="row">
                     <div className="col-xl-3 col-md-6">
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_1.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    A Organic Avocado
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_2.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Cheddar Fries
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_3.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Organic
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_4.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Farms
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_5.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Fresh Orange
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_6.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    apricot fruit
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_7.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Pink Sugar</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_8.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Read apple</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
               <div
                  className="tab-pane fade"
                  id="pills-new-in"
                  role="tabpanel"
                  aria-labelledby="pills-new-in-tab"
               >
                  <div className="row">
                     <div className="col-xl-3 col-md-6">
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_1.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    A Organic Avocado
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_2.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Cheddar Fries
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_3.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Organic
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_4.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Farms
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_5.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Fresh Orange
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_6.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    apricot fruit
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_7.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Pink Sugar</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_8.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Read apple</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
               <div
                  className="tab-pane fade"
                  id="pills-top-rated"
                  role="tabpanel"
                  aria-labelledby="pills-top-rated-tab"
               >
                  <div className="row">
                     <div className="col-xl-3 col-md-6">
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_1.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    A Organic Avocado
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_2.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Cheddar Fries
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_3.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Organic
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_4.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Farms
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_5.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Fresh Orange
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_6.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    apricot fruit
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_7.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Pink Sugar</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_8.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Read apple</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
               <div
                  className="tab-pane fade"
                  id="pills-tensing"
                  role="tabpanel"
                  aria-labelledby="pills-tensing-tab"
               >
                  <div className="row">
                     <div className="col-xl-3 col-md-6">
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_1.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    A Organic Avocado
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_2.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Cheddar Fries
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_3.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Organic
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_4.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Broccoli Farms
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_5.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    Fresh Orange
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_6.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">
                                    apricot fruit
                                 </a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_7.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Pink Sugar</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
                        <div className="trendy-product-items-three">
                           <div className="trendy-product-items-three__thumb">
                              <img
                                 src="/images/trendy/trendyCardThumb3_8.png"
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
                           <div className="trendy-product-items-three__content">
                              <h6>
                                 <a href="shop-details-one.html">Read apple</a>
                              </h6>
                              <div className="trendy-product-items-three__content--star-wrap">
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
            </div>
         </div>
      </section>
   );
};

export { TrendySection };
