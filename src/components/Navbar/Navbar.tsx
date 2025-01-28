import Image from "next/image";
import Link from "next/link";

import { SearchModal } from "@/components/Navbar/SearchModal";
import { ResponsiveSidebar } from "./ResponsiveSidebar";
import { NewsletterModal } from "../NewsletterModal";

const Navbar = () => {
   return (
      <>
         <NewsletterModal />
         <header className="header-section-1">
            <div id="header-sticky" className="header-1">
               <div className="header-top-one">
                  <div className="phone-icon">
                     <i className="icon-telephone"></i>
                     <Link href="tel:32534534534">+61 000 321 555 004</Link>
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
                        <Link href="/dashboard">
                           <i className="fa-solid fa-user"></i>
                           My account
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="container-fluid">
                  <div className="mega-menu-wrapper">
                     <div className="header-main">
                        <div className="header-left">
                           <div className="logo">
                              <Link href="/" className="header-logo">
                                 <Image
                                    width={175}
                                    height={30}
                                    src="/images/logo/logo.svg"
                                    alt="logo-img"
                                    quality={100}
                                 />
                              </Link>
                           </div>
                           {/* category items */}
                           <div className="header-cataegory-item">
                              <ul className="header-cataegory">
                                 <li>
                                    <Link href="#">
                                       <span className="left-icon">
                                          <i className="icon-app"></i>
                                       </span>
                                       all categories
                                       <span className="right-icon">
                                          <i className="fa-regular fa-chevron-down"></i>
                                       </span>
                                    </Link>
                                 </li>
                              </ul>
                              <ul className="sub-cataegory">
                                 <li className="sub-has-dropdown">
                                    <Link href="#">
                                       All Laptop
                                       <i className="fas fa-angle-right"></i>
                                    </Link>
                                    <ul className="sub-cataegory">
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             Lenovo
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             MSI
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             Asus
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             HP
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             MacBook
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             Smart
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             Walton
                                          </Link>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link href="/shop-without-sidebar">
                                       Gadget
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="/shop-without-sidebar">
                                       Phone
                                    </Link>
                                 </li>
                                 <li>
                                    <Link href="/shop-without-sidebar">
                                       Digital Watch
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="header-right d-flex justify-content-end align-items-center">
                           <div className="mean__menu-wrapper d-none d-xl-block">
                              <div className="main-menu">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li className="has-dropdown active menu-thumb">
                                          <Link href="#">
                                             Home
                                             <i className="fa-regular fa-plus"></i>
                                          </Link>
                                          <ul className="submenu has-homemenu">
                                             <li>
                                                <div className="homemenu-items">
                                                   <div className="row">
                                                      <div className="col-lg-3 homemenu">
                                                         <div className="homemenu-thumb">
                                                            <Image
                                                               width={217}
                                                               height={271}
                                                               src="/images/header/home-1.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <Link
                                                                  className="theme-btn"
                                                                  href="/"
                                                               >
                                                                  Electronics
                                                               </Link>
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
                                                            <Image
                                                               width={217}
                                                               height={271}
                                                               src="/images/header/home-2.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <Link
                                                                  className="theme-btn"
                                                                  href="/homepage-2"
                                                               >
                                                                  Fashion
                                                               </Link>
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
                                                            <Image
                                                               width={217}
                                                               height={271}
                                                               src="/images/header/home-3.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <Link
                                                                  className="theme-btn"
                                                                  href="/homepage-3"
                                                               >
                                                                  Grocery Store
                                                               </Link>
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
                                                            <Image
                                                               width={217}
                                                               height={271}
                                                               src="/images/header/home-4.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <Link
                                                                  className="theme-btn"
                                                                  href="/homepage-4"
                                                               >
                                                                  Cosmetic
                                                               </Link>
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
                                                            <Image
                                                               width={217}
                                                               height={271}
                                                               src="/images/header/home-5.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <Link
                                                                  className="theme-btn"
                                                                  href="/homepage-5"
                                                               >
                                                                  Jewelry
                                                               </Link>
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
                                                            <Image
                                                               width={217}
                                                               height={271}
                                                               src="/images/header/home-6.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <Link
                                                                  className="theme-btn"
                                                                  href="/homepage-6"
                                                               >
                                                                  Furniture Shop
                                                               </Link>
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
                                                            <Image
                                                               width={217}
                                                               height={271}
                                                               src="/images/header/home-7.png"
                                                               alt="img"
                                                            />
                                                            <div className="demo-button">
                                                               <Link
                                                                  className="theme-btn"
                                                                  href="/homepage-7"
                                                               >
                                                                  Pet Care
                                                               </Link>
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
                                          <Link
                                             href="/"
                                             className="border-none"
                                          >
                                             Home
                                             <i className="fa-regular fa-plus"></i>
                                          </Link>
                                          <ul className="submenu">
                                             <li>
                                                <Link href="/">Home 01</Link>
                                             </li>
                                             <li>
                                                <Link href="/homepage-2">
                                                   Home 02
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/homepage-3">
                                                   Home 03
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/homepage-4">
                                                   Home 04
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/homepage-5">
                                                   Home 05
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/homepage-6">
                                                   Home 06
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/homepage-7">
                                                   Home 07
                                                </Link>
                                             </li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <Link href="#">
                                             Shop
                                             <i className="fa-regular fa-plus"></i>
                                          </Link>
                                          <ul className="submenu">
                                             <li>
                                                <Link href="/shop-left-sidebar">
                                                   Shop Left Sidebar
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/shop-right-sidebar">
                                                   Shop Right Sidbar
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/shop-without-sidebar">
                                                   Shop Without Sidebar
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/shop-details-one">
                                                   Shop Details One
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/shop-details-two">
                                                   Shop Details Two
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/cart">Cart</Link>
                                             </li>
                                             <li>
                                                <Link href="/wishlist">
                                                   Wishlist
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/checkout">
                                                   checkout
                                                </Link>
                                             </li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <Link href="#">
                                             Pages
                                             <i className="fa-regular fa-plus"></i>
                                          </Link>
                                          <ul className="submenu">
                                             <li>
                                                <Link href="/about-us">
                                                   About Us
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/testimonial">
                                                   Testimonial
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/faq">Faq</Link>
                                             </li>
                                             <li>
                                                <Link href="/look-book">
                                                   Look Book
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/login">Login</Link>
                                             </li>
                                             <li>
                                                <Link href="/register">
                                                   Register
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/dashboard">
                                                   Dashboard
                                                </Link>
                                             </li>
                                          </ul>
                                       </li>

                                       <li className="has-dropdown">
                                          <Link href="#">
                                             Order
                                             <i className="fa-regular fa-plus"></i>
                                          </Link>
                                          <ul className="submenu">
                                             <li>
                                                <Link href="/order-tracking">
                                                   Order Tracking
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/order-history">
                                                   Order History
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/order-details-one">
                                                   Order Details One
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/settings">
                                                   Settings
                                                </Link>
                                             </li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <Link href="#">
                                             Blog
                                             <i className="fa-regular fa-plus"></i>
                                          </Link>
                                          <ul className="submenu">
                                             <li>
                                                <Link href="/blogs">Blog</Link>
                                             </li>
                                             <li>
                                                <Link href="/blogs-classic">
                                                   Blog Classic
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/blog-details-left-sidebar">
                                                   Blog Left Sidebar
                                                </Link>
                                             </li>
                                             <li>
                                                <Link href="/blog-details">
                                                   Blog Details
                                                </Link>
                                             </li>
                                          </ul>
                                       </li>

                                       <li>
                                          <Link href="/contact">Contact</Link>
                                       </li>
                                    </ul>
                                 </nav>
                              </div>
                           </div>
                           <SearchModal />
                           <div className="menu-cart">
                              <div className="cart-box">
                                 <ul>
                                    <li>
                                       <Image
                                          width={90}
                                          height={90}
                                          src="/images/cart/01.jpg"
                                          alt="image"
                                       />
                                       <div className="cart-product">
                                          <Link href="#">Android phone</Link>
                                          <span>118$</span>
                                       </div>
                                    </li>
                                 </ul>
                                 <ul>
                                    <li className="border-none">
                                       <Image
                                          width={90}
                                          height={90}
                                          src="/images/cart/02.jpg"
                                          alt="image"
                                       />
                                       <div className="cart-product">
                                          <Link href="#">Macbook Book</Link>
                                          <span>268$</span>
                                       </div>
                                    </li>
                                 </ul>
                                 <div className="shopping-items d-flex align-items-center justify-content-between">
                                    <span>Shopping : $20.00</span>
                                    <span>Total : $386.00</span>
                                 </div>
                                 <div className="cart-button d-flex justify-content-between mb-4">
                                    <Link href="/cart" className="theme-btn">
                                       View Cart
                                    </Link>
                                    <Link
                                       href="/checkout"
                                       className="theme-btn bg-red-2"
                                    >
                                       Checkout
                                    </Link>
                                 </div>
                              </div>
                              <Link href="/cart" className="cart-icon">
                                 <i className="fa-regular fa-bag-shopping"></i>
                              </Link>
                           </div>
                           <Link className="wishlist" href="/wishlist">
                              <i className="fa-regular fa-heart"></i>
                           </Link>
                           <div className="header__hamburger d-block d-xl-none my-auto">
                              <div className="sidebar__toggle">
                                 <ResponsiveSidebar />
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
