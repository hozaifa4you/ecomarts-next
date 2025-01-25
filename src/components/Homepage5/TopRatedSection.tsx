import React from "react";

const TopRatedSection = () => {
   return (
      <section className="top-rated-section section-padding2 fix pt-0">
         <div className="container">
            <div className="row gy-3 d-flex align-items-end">
               <div className="col-xl-6">
                  <div className="section-title style-5">
                     <div className="subtitle before-none">New Arrivals</div>
                     <h2 className="title">Discover New Arrivals</h2>
                  </div>
               </div>
               <div className="col-xl-6">
                  <ul
                     className="nav nav-pills style-5 mb-3"
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
                                    src="/images/shape/badge-shape-2.png"
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
                                    src="/images/shape/badge-shape-2.png"
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
                                    src="/images/shape/badge-shape-2.png"
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
                                    src="/images/shape/badge-shape-2.png"
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
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/01.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/02.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/03.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/04.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/05.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/06.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/07.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/08.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
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
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/01.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/02.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/03.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/04.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/05.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/06.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/07.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/08.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
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
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/01.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/02.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/03.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/04.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/05.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/06.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/07.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/08.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
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
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/01.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/02.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/03.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/04.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/05.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/06.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/07.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-md-6 col-lg-4">
                        <div className="best-seller-product-items-two style-seller-3 style-border style-5">
                           <div className="icon-box2">
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
                           <div className="best-seller-product-items-two__badge1">
                              NEW
                           </div>
                           <div className="best-seller-product-items-two__thumb">
                              <img
                                 src="/images/home-5/product/08.png"
                                 alt="thumb"
                              />
                           </div>
                           <div className="best-seller-product-items-two__content">
                              <div className="best-seller-product-items-two__details">
                                 <p className="best-seller-product-items-two__details--subtitle">
                                    Golden ring
                                 </p>
                                 <h6 className="best-seller-product-items-two__details--title">
                                    <a href="shop-details-one.html">
                                       Elite Whitening Serum
                                    </a>
                                 </h6>
                                 <div className="best-seller-product-items-two__details--price">
                                    {" "}
                                    <span className="original-price">
                                       $99.00
                                    </span>
                                    <span className="offer-price">$79.00</span>
                                 </div>
                              </div>
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

export { TopRatedSection };
