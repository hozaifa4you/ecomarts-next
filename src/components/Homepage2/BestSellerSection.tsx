import React from "react";

const BestSellerSection = () => {
   return (
      <section className="best-seller-product-items-section section-padding2 bg-color3 fix">
         <div className="best-seller-product-items-container-wrapper style4">
            <div className="container">
               <div className="best-seller-product-items-wrapper style1 text-center mb-30">
                  <div className="section-title">
                     <div className="subtitle style1">Trendy Items</div>
                     <h3 className="title">our trendy fasion products</h3>
                  </div>
               </div>
               <div className="feature-flex-tab-wrapper">
                  <div className="feature-tab-btn-wrapper">
                     <ul
                        className="nav nav-pills"
                        id="pills-tab"
                        role="tablist"
                     >
                        <li className="nav-item" role="presentation">
                           <button
                              className="nav-link active"
                              id="pills-one-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-one"
                              type="button"
                              role="tab"
                              aria-controls="pills-one"
                              aria-selected="true"
                           >
                              All
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className="nav-link"
                              id="pills-two-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-two"
                              type="button"
                              role="tab"
                              aria-controls="pills-two"
                              aria-selected="false"
                           >
                              Oven
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className="nav-link"
                              id="pills-three-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-three"
                              type="button"
                              role="tab"
                              aria-controls="pills-three"
                              aria-selected="false"
                           >
                              Computer
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className="nav-link"
                              id="pills-four-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-four"
                              type="button"
                              role="tab"
                              aria-controls="pills-four"
                              aria-selected="true"
                           >
                              Watch
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className="nav-link"
                              id="pills-five-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-five"
                              type="button"
                              role="tab"
                              aria-controls="pills-five"
                              aria-selected="false"
                           >
                              Camera
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              className="nav-link"
                              id="pills-six-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-six"
                              type="button"
                              role="tab"
                              aria-controls="pills-six"
                              aria-selected="false"
                           >
                              Drone
                           </button>
                        </li>
                     </ul>
                  </div>
                  <div className="feature-select">
                     <div className="nav-item">
                        <div className="form">
                           <select className="single-select w-100">
                              <option>Select Brand Name</option>
                              <option>Apple</option>
                              <option>Dell</option>
                              <option>LG</option>
                              <option>ASUS</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="tab-content" id="pills-tabContent">
                  <div
                     className="tab-pane fade show active"
                     id="pills-one"
                     role="tabpanel"
                     aria-labelledby="pills-one-tab"
                  >
                     <div className="row g-4">
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_1.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_2.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_3.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_4.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_5.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_6.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_7.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_8.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="pills-two"
                     role="tabpanel"
                     aria-labelledby="pills-two-tab"
                  >
                     <div className="row g-4">
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_1.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_2.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_3.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_4.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_5.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_6.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_7.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_8.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="pills-three"
                     role="tabpanel"
                     aria-labelledby="pills-three-tab"
                  >
                     <div className="row g-4">
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_1.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_2.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_3.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_4.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_5.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_6.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_7.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_8.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="pills-four"
                     role="tabpanel"
                     aria-labelledby="pills-four-tab"
                  >
                     <div className="row g-4">
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_1.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_2.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_3.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_4.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_5.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_6.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_7.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_8.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="pills-five"
                     role="tabpanel"
                     aria-labelledby="pills-five-tab"
                  >
                     <div className="row g-4">
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_1.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_2.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_3.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_4.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_5.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_6.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_7.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_8.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="pills-six"
                     role="tabpanel"
                     aria-labelledby="pills-six-tab"
                  >
                     <div className="row g-4">
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_1.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_2.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_3.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_4.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_5.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          High-Neck puff jacket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 TRANDING
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_6.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Relax Fit Leggings
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                    src="/images/best-seller/bestSellerProductThumb2_7.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Overshirt With Pocket
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                           <div className="best-seller-product-items-two">
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
                                 25% off
                              </div>
                              <div className="best-seller-product-items-two__thumb">
                                 <img
                                    src="/images/best-seller/bestSellerProductThumb2_8.png"
                                    alt="thumb"
                                 />
                              </div>
                              <div className="best-seller-product-items-two__content">
                                 <div className="best-seller-product-items-two__details">
                                    <p className="best-seller-product-items-two__details--subtitle">
                                       FASHION BAG
                                    </p>
                                    <h6 className="best-seller-product-items-two__details--title">
                                       <a href="shop-details-one.html">
                                          Rose Printed Hoodie
                                       </a>
                                    </h6>
                                    <div className="best-seller-product-items-two__details--price">
                                       <span className="original-price">
                                          $99.00
                                       </span>
                                       <span className="offer-price">
                                          $79.00
                                       </span>
                                    </div>
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

export { BestSellerSection };
