import React from "react";

const FeaturedProducts = () => {
   return (
      <section className="featured-product-section section-padding fix">
         <div className="container">
            <div className="featured-product-wrapper style1">
               <div className="top-deals-wrapper style1 text-center mb-30">
                  <div className="section-title">
                     <div className="subtitle style1">featured products</div>
                     <h2 className="title">Our featured products</h2>
                  </div>
               </div>
               <div className="feature-flex-tab-wrapper">
                  <div className="feature-tab-btn-wrapper">
                     <ul
                        className="nav nav-pills"
                        id="pills-tab2"
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

               <div className="tab-content" id="pills-tabContent2">
                  <div
                     className="tab-pane fade show active"
                     id="pills-one"
                     role="tabpanel"
                     aria-labelledby="pills-one-tab"
                  >
                     <div className="feature-tab-content">
                        <div className="row g-4">
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_1.png"
                                       alt="thumb"
                                    />
                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_2.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_3.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_4.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                new smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_5.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_6.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_7.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_8.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                New smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
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
                     <div className="feature-tab-content">
                        <div className="row g-4">
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_1.png"
                                       alt="thumb"
                                    />
                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_2.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_3.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_4.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                new smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_5.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="settings.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_6.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
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
                     <div className="feature-tab-content">
                        <div className="row g-4">
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_1.png"
                                       alt="thumb"
                                    />
                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_2.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_3.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_4.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                new smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_5.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_6.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_7.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_8.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                New smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
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
                     <div className="feature-tab-content">
                        <div className="row g-4">
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_2.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_3.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_4.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                new smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_5.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_6.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_7.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_8.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                New smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
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
                     <div className="feature-tab-content">
                        <div className="row g-4">
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_1.png"
                                       alt="thumb"
                                    />
                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_2.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_3.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_4.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                new smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_5.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Core i9 laptop
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_6.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_7.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_8.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                New smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
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
                     <div className="feature-tab-content">
                        <div className="row g-4">
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_1.png"
                                       alt="thumb"
                                    />
                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>Core i9 laptop</h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_2.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_6.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Apple i16x
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_7.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                Bluetooth Headphones
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-3 col-md-6">
                              <div className="featured-product-item-one">
                                 <div className="featured-product-item-one__thumb">
                                    <img
                                       src="/images/best-seller/bestSellerProductThumb1_8.png"
                                       alt="thumb"
                                    />

                                    <div className="badge">10% OFF</div>
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
                                 <div className="featured-product-item-one__content">
                                    <div className="featured-product-item-one__content--details-wrapper">
                                       <div className="price">
                                          <h6>
                                             <a href="shop-details-one.html">
                                                New smart watch
                                             </a>
                                          </h6>
                                          <div className="star-wrapper">
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <i className="fa-solid fa-star"></i>
                                             <span>0 Review</span>
                                          </div>
                                          <span className="price">
                                             USD 20.00
                                             <small>$ 50.00</small>
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
         </div>
      </section>
   );
};

export { FeaturedProducts };
