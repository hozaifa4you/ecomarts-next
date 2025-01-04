import React from "react";
import { SearchModal } from "./SearchModal";
import { ModalV2 } from "./ModalV2";

const Navbar = () => {
   return (
      <>
         <SearchModal />
         <ModalV2 />
         <header className="header-section-1">
            <div id="header-sticky" className="header-1">
               <div className="header-top-one">
                  <div className="phone-icon">
                     <i className="icon-telephone"></i>
                     <a href="tel:32534534534">+61 000 321 555 004</a>
                  </div>
                  <div className="offer">
                     <div className="subtitle style1">
                        <i className="icon-tag"></i>
                        59% <span className="color-text"> discount </span> for
                        all items
                     </div>
                  </div>
                  <div className="lang">
                     <div className="language">
                        <i className="icon-earth"></i>

                        <div className="form">
                           <select className="single-select w-100">
                              <option>English</option>
                              <option>Bangla</option>
                              <option>Spanish</option>
                              <option>German</option>
                              <option>Arabic</option>
                           </select>
                        </div>
                     </div>

                     <div className="user">
                        <a href="dashboard.html">
                           <i className="fa-solid fa-user"></i>
                           My account
                        </a>
                     </div>
                  </div>
               </div>

               <div className="container-fluid">
                  <div className="mega-menu-wrapper">
                     <div className="header-main">
                        <div className="header-left">
                           <div className="logo">
                              <a href="index.html" className="header-logo">
                                 <img
                                    src="/images/logo/logo.svg"
                                    alt="logo-img"
                                 />
                              </a>
                           </div>
                           <div className="header-cataegory-item">
                              <ul className="header-cataegory">
                                 <li>
                                    <a href="#">
                                       <span className="left-icon">
                                          <i className="icon-app"></i>
                                       </span>
                                       all categories
                                       <span className="right-icon">
                                          <i className="fa-regular fa-chevron-down"></i>
                                       </span>
                                    </a>
                                 </li>
                              </ul>
                              <ul className="sub-cataegory">
                                 <li className="sub-has-dropdown">
                                    <a href="#">
                                       All Laptop
                                       <i className="fas fa-angle-right"></i>
                                    </a>
                                    <ul className="sub-cataegory">
                                       <li>
                                          <a href="shop-without-sidebar.html">
                                             Lenovo
                                          </a>
                                       </li>
                                       <li>
                                          <a href="shop-without-sidebar.html">
                                             MSI
                                          </a>
                                       </li>
                                       <li>
                                          <a href="shop-without-sidebar.html">
                                             Asus
                                          </a>
                                       </li>
                                       <li>
                                          <a href="shop-without-sidebar.html">
                                             HP
                                          </a>
                                       </li>
                                       <li>
                                          <a href="shop-without-sidebar.html">
                                             MacBook
                                          </a>
                                       </li>
                                       <li>
                                          <a href="shop-without-sidebar.html">
                                             Smart
                                          </a>
                                       </li>
                                       <li>
                                          <a href="shop-without-sidebar.html">
                                             Walton
                                          </a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="shop-without-sidebar.html">
                                       Gadget
                                    </a>
                                 </li>
                                 <li>
                                    <a href="shop-without-sidebar.html">
                                       Phone
                                    </a>
                                 </li>
                                 <li>
                                    <a href="shop-without-sidebar.html">
                                       Digital Watch
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                           <div className="mean__menu-wrapper">
                              <div className="main-menu">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li className="has-dropdown active menu-thumb">
                                          <a href="#">
                                             Home
                                             <i className="fa-regular fa-plus"></i>
                                          </a>
                                          <ul className="submenu has-homemenu">
                                             <li>
                                                <div className="homemenu-items">
                                                   <div className="row">
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb">
                                                            <img
                                                               src="/images/header/home-1.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <a
                                                                  className="theme-btn"
                                                                  href="index.html"
                                                               >
                                                                  Electronics
                                                               </a>
                                                            </div>
                                                         </div>
                                                         <div className="homemenu-content text-center">
                                                            <h4 className="homemenu-title">
                                                               Home 01
                                                            </h4>
                                                         </div>
                                                      </div>
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb mb-15">
                                                            <img
                                                               src="/images/header/home-2.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <a
                                                                  className="theme-btn"
                                                                  href="index2.html"
                                                               >
                                                                  Fashion
                                                               </a>
                                                            </div>
                                                         </div>
                                                         <div className="homemenu-content text-center">
                                                            <h4 className="homemenu-title">
                                                               Home 02
                                                            </h4>
                                                         </div>
                                                      </div>
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb mb-15">
                                                            <img
                                                               src="/images/header/home-3.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <a
                                                                  className="theme-btn"
                                                                  href="index3.html"
                                                               >
                                                                  Grocery Store
                                                               </a>
                                                            </div>
                                                         </div>
                                                         <div className="homemenu-content text-center">
                                                            <h4 className="homemenu-title">
                                                               Home 03
                                                            </h4>
                                                         </div>
                                                      </div>
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb mb-15">
                                                            <img
                                                               src="/images/header/home-4.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <a
                                                                  className="theme-btn"
                                                                  href="index4.html"
                                                               >
                                                                  Cosmetic
                                                               </a>
                                                            </div>
                                                         </div>
                                                         <div className="homemenu-content text-center">
                                                            <h4 className="homemenu-title">
                                                               Home 04
                                                            </h4>
                                                         </div>
                                                      </div>
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb mb-15">
                                                            <img
                                                               src="/images/header/home-5.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <a
                                                                  className="theme-btn"
                                                                  href="index-5.html"
                                                               >
                                                                  Jewelry
                                                               </a>
                                                            </div>
                                                         </div>
                                                         <div className="homemenu-content text-center">
                                                            <h4 className="homemenu-title">
                                                               Home 05
                                                            </h4>
                                                         </div>
                                                      </div>
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb mb-15">
                                                            <img
                                                               src="/images/header/home-6.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <a
                                                                  className="theme-btn"
                                                                  href="index-6.html"
                                                               >
                                                                  Furniture Shop
                                                               </a>
                                                            </div>
                                                         </div>
                                                         <div className="homemenu-content text-center">
                                                            <h4 className="homemenu-title">
                                                               Home 06
                                                            </h4>
                                                         </div>
                                                      </div>
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb mb-15">
                                                            <img
                                                               src="/images/header/home-7.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <a
                                                                  className="theme-btn"
                                                                  href="index-7.html"
                                                               >
                                                                  Pet Care
                                                               </a>
                                                            </div>
                                                         </div>
                                                         <div className="homemenu-content text-center">
                                                            <h4 className="homemenu-title">
                                                               Home 07
                                                            </h4>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown active d-xl-none">
                                          <a
                                             href="index.html"
                                             className="border-none"
                                          >
                                             Home
                                             <i className="fa-regular fa-plus"></i>
                                          </a>
                                          <ul className="submenu">
                                             <li>
                                                <a href="index.html">Home 01</a>
                                             </li>
                                             <li>
                                                <a href="index2.html">
                                                   Home 02
                                                </a>
                                             </li>
                                             <li>
                                                <a href="index3.html">
                                                   Home 03
                                                </a>
                                             </li>
                                             <li>
                                                <a href="index4.html">
                                                   Home 04
                                                </a>
                                             </li>
                                             <li>
                                                <a href="index-5.html">
                                                   Home 05
                                                </a>
                                             </li>
                                             <li>
                                                <a href="index-6.html">
                                                   Home 06
                                                </a>
                                             </li>
                                             <li>
                                                <a href="index-7.html">
                                                   Home 07
                                                </a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <a href="#">
                                             Shop
                                             <i className="fa-regular fa-plus"></i>
                                          </a>
                                          <ul className="submenu">
                                             <li>
                                                <a href="shop-left-sidebar.html">
                                                   Shop Left Sidebar
                                                </a>
                                             </li>
                                             <li>
                                                <a href="shop-right-sidebar.html">
                                                   Shop Right Sidbar
                                                </a>
                                             </li>
                                             <li>
                                                <a href="shop-without-sidebar.html">
                                                   Shop Without Sidebar
                                                </a>
                                             </li>
                                             <li>
                                                <a href="shop-details-one.html">
                                                   Shop Details One
                                                </a>
                                             </li>
                                             <li>
                                                <a href="shop-details-two.html">
                                                   Shop Details Two
                                                </a>
                                             </li>
                                             <li>
                                                <a href="cart.html">Cart</a>
                                             </li>
                                             <li>
                                                <a href="wishlist.html">
                                                   Wishlist
                                                </a>
                                             </li>
                                             <li>
                                                <a href="checkout.html">
                                                   checkout
                                                </a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <a href="#">
                                             Pages
                                             <i className="fa-regular fa-plus"></i>
                                          </a>
                                          <ul className="submenu">
                                             <li>
                                                <a href="about.html">
                                                   About Us
                                                </a>
                                             </li>
                                             <li>
                                                <a href="testimonial.html">
                                                   Testimonial
                                                </a>
                                             </li>
                                             <li>
                                                <a href="faq.html">Faq</a>
                                             </li>
                                             <li>
                                                <a href="look-book.html">
                                                   Look Book
                                                </a>
                                             </li>
                                             <li>
                                                <a href="login.html">Login</a>
                                             </li>
                                             <li>
                                                <a href="register.html">
                                                   Register
                                                </a>
                                             </li>
                                             <li>
                                                <a href="dashboard.html">
                                                   Dashboard
                                                </a>
                                             </li>
                                          </ul>
                                       </li>

                                       <li className="has-dropdown">
                                          <a href="#">
                                             Order
                                             <i className="fa-regular fa-plus"></i>
                                          </a>
                                          <ul className="submenu">
                                             <li>
                                                <a href="order-tracking.html">
                                                   Order Tracking
                                                </a>
                                             </li>
                                             <li>
                                                <a href="order-history.html">
                                                   Order History
                                                </a>
                                             </li>
                                             <li>
                                                <a href="order-details-one.html">
                                                   Order Details One
                                                </a>
                                             </li>
                                             <li>
                                                <a href="settings.html">
                                                   Settings
                                                </a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <a href="blog.html">
                                             Blog
                                             <i className="fa-regular fa-plus"></i>
                                          </a>
                                          <ul className="submenu">
                                             <li>
                                                <a href="blog.html">Blog</a>
                                             </li>
                                             <li>
                                                <a href="blog-classic.html">
                                                   Blog Classic
                                                </a>
                                             </li>
                                             <li>
                                                <a href="blog-left-sidebar.html">
                                                   Blog Left Sidebar
                                                </a>
                                             </li>
                                             <li>
                                                <a href="blog-details.html">
                                                   Blog Details
                                                </a>
                                             </li>
                                          </ul>
                                       </li>

                                       <li>
                                          <a href="contact.html">Contact</a>
                                       </li>
                                    </ul>
                                 </nav>
                              </div>
                           </div>
                           <a href="#" className="search-trigger search-icon">
                              <i className="fal fa-search"></i>
                           </a>
                           <div className="menu-cart">
                              <div className="cart-box">
                                 <ul>
                                    <li>
                                       <img
                                          src="/images/cart/01.jpg"
                                          alt="image"
                                       />
                                       <div className="cart-product">
                                          <a href="#">Android phone</a>
                                          <span>118$</span>
                                       </div>
                                    </li>
                                 </ul>
                                 <ul>
                                    <li className="border-none">
                                       <img
                                          src="/images/cart/02.jpg"
                                          alt="image"
                                       />
                                       <div className="cart-product">
                                          <a href="#">Macbook Book</a>
                                          <span>268$</span>
                                       </div>
                                    </li>
                                 </ul>
                                 <div className="shopping-items d-flex align-items-center justify-content-between">
                                    <span>Shopping : $20.00</span>
                                    <span>Total : $386.00</span>
                                 </div>
                                 <div className="cart-button d-flex justify-content-between mb-4">
                                    <a href="cart.html" className="theme-btn">
                                       View Cart
                                    </a>
                                    <a
                                       href="checkout.html"
                                       className="theme-btn bg-red-2"
                                    >
                                       Checkout
                                    </a>
                                 </div>
                              </div>
                              <a href="cart.html" className="cart-icon">
                                 <i className="fa-regular fa-bag-shopping"></i>
                              </a>
                           </div>
                           <a className="wishlist" href="wishlist.html">
                              <i className="fa-regular fa-heart"></i>
                           </a>
                           <div className="header__hamburger d-block d-xl-none my-auto">
                              <div className="sidebar__toggle">
                                 <i className="fas fa-bars"></i>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export { Navbar };
