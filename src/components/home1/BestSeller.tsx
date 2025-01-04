import React from "react";

const BestSeller = () => {
   return (
      <section className="best-seller-section section-padding fix bg-1">
         <div className="container">
            <div className="section-top-wrapper">
               <div className="row gy-3">
                  <div className="col-lg-3">
                     <div className="section-title">
                        <div className="subtitle style1">Best deals</div>
                        <h2 className="title">Best Sellers</h2>
                     </div>
                  </div>
                  <div className="col-lg-9 d-flex justify-content-xl-end">
                     <div className="best-seller-tab-btn-wrapper">
                        <ul
                           className="nav nav-pills"
                           id="pills-tab"
                           role="tablist"
                        >
                           <li className="nav-item" role="presentation">
                              <button
                                 className="nav-link active"
                                 id="pills-home-tab"
                                 data-bs-toggle="pill"
                                 data-bs-target="#pills-home"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-home"
                                 aria-selected="true"
                              >
                                 Latest
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className="nav-link"
                                 id="pills-profile-tab"
                                 data-bs-toggle="pill"
                                 data-bs-target="#pills-profile"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-profile"
                                 aria-selected="false"
                              >
                                 Popular
                              </button>
                           </li>
                           <li className="nav-item" role="presentation">
                              <button
                                 className="nav-link"
                                 id="pills-contact-tab"
                                 data-bs-toggle="pill"
                                 data-bs-target="#pills-contact"
                                 type="button"
                                 role="tab"
                                 aria-controls="pills-contact"
                                 aria-selected="false"
                              >
                                 On-sale
                              </button>
                           </li>
                           <li className="nav-item">
                              <div className="form">
                                 <select className="single-select w-100">
                                    <option>price</option>
                                    <option>$50:00</option>
                                    <option>$32:75</option>
                                    <option>$79:52</option>
                                    <option>25:78</option>
                                 </select>
                              </div>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a className="theme-btn style7" href="#!">
                                 View all
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="tab-content" id="pills-tabContent">
                     <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex={0}
                     >
                        <div className="best-seller-tab-content-wrapper">
                           <div className="row g-4">
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_1.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Android phone
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_2.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Vlc speaker
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_3.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             iPhone 16max pro
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_4.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Wirless mouse
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_5.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Smart drone plus
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_6.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Macbook M2
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_7.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Charging lights
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_8.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Smart CC camera
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex={0}
                     >
                        <div className="best-seller-tab-content-wrapper">
                           <div className="row g-4">
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_1.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Android phone
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_2.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Vlc speaker
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_3.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             iPhone 16max pro
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_4.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Wirless mouse
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_5.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Smart drone plus
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_6.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Macbook M2
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_7.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Charging lights
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_8.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Smart CC camera
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabIndex={0}
                     >
                        <div className="best-seller-tab-content-wrapper">
                           <div className="row g-4">
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_1.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Android phone
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_2.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Vlc speaker
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_3.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             iPhone 16max pro
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_4.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Wirless mouse
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_5.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Smart drone plus
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_6.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Macbook M2
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_7.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Charging lights
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-md-6">
                                 <div className="best-seller-one">
                                    <div className="best-seller-one__thumb">
                                       <img
                                          src="/images/top-deals-item/topDealsItemThumb1_8.png"
                                          alt="thumb"
                                       />
                                    </div>
                                    <div className="best-seller-one__content">
                                       <h4 className="best-seller-one__content-title">
                                          <a href="shop-details-one.html">
                                             Smart CC camera
                                          </a>
                                       </h4>
                                       <div className="best-seller-one__star-wrap">
                                          <div className="star">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                          </div>
                                          <span>0 Review</span>
                                       </div>
                                       <h4 className="best-seller-one__content-price">
                                          <span className="offer-price">
                                             $25.00
                                          </span>
                                          <span className="original-price">
                                             $85.00
                                          </span>
                                       </h4>
                                       <div className="best-seller-one__icons">
                                          <a href="wishlist.html">
                                             <i className="fa-light fa-heart"></i>
                                          </a>
                                          <a href="cart.html">
                                             <i className="fa-light fa-bag-shopping"></i>
                                          </a>
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
            <div
               className="video-container bg-img"
               style={{ backgroundImage: "url(/images/video/video-bg.jpg)" }}
            >
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="video-content">
                        <div className="video-box">
                           <a
                              href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                              className="play-btn popup-video"
                           >
                              <i className="fa-sharp fa-solid fa-play"></i>
                           </a>
                        </div>
                        <div className="section-title">
                           <h3 className="title">See The Worlds Like Birds</h3>
                        </div>
                        <a className="theme-btn style3" href="cart.html">
                           View All Products
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="video-thumb">
                        <img src="/images/video/drone.png" alt="Thumb" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { BestSeller };
