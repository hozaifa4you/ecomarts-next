"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, Offcanvas } from "react-bootstrap";

const ResponsiveSidebar = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <button onClick={handleShow}>
            <i className="fas fa-bars"></i>
         </button>

         <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Body className="p-0 m-0">
               <div className="offcanvas__info">
                  <div className="offcanvas__wrapper">
                     <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                           <div className="offcanvas__logo">
                              <Link href="/">
                                 <Image
                                    width={50}
                                    height={25}
                                    quality={100}
                                    src="/images/logo/logo-white.svg"
                                    alt="logo-img"
                                 />
                              </Link>
                           </div>
                           <div>
                              <button
                                 className="offcanvas__close"
                                 onClick={handleClose}
                              >
                                 <i className="fas fa-times"></i>
                              </button>
                           </div>
                        </div>
                        {/* offcanvas list with accordion */}
                        <div className="d-xl-none text-white w-100 responsive-sidebar-accordion">
                           <Accordion flush>
                              <Accordion.Item eventKey="0">
                                 <Accordion.Header>
                                    <span>Homepages</span>
                                    <i className="fa-regular fa-plus"></i>
                                 </Accordion.Header>
                                 <Accordion.Body>
                                    <ul>
                                       <li>
                                          <Link href="/">Home 1</Link>
                                       </li>
                                       <li>
                                          <Link href="/homepage-2">Home 2</Link>
                                       </li>
                                       <li>
                                          <Link href="/homepage-3">Home 3</Link>
                                       </li>
                                       <li>
                                          <Link href="/homepage-4">Home 4</Link>
                                       </li>
                                       <li>
                                          <Link href="/homepage-5">Home 5</Link>
                                       </li>
                                       <li>
                                          <Link href="/homepage-6">Home 6</Link>
                                       </li>
                                       <li>
                                          <Link href="/homepage-7">Home 7</Link>
                                       </li>
                                    </ul>
                                 </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                 <Accordion.Header>
                                    <span>Shop</span>
                                    <i className="fa-regular fa-plus"></i>
                                 </Accordion.Header>
                                 <Accordion.Body>
                                    <ul>
                                       <li>
                                          <Link href="/shop-left-sidebar">
                                             Shop Left Sidebar
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-right-sidebar">
                                             Ship Right Sidebar
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/shop-without-sidebar">
                                             Ship Without Sidebar
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
                                          <Link href="/wishlist">Wishlist</Link>
                                       </li>
                                       <li>
                                          <Link href="/checkout">Checkout</Link>
                                       </li>
                                    </ul>
                                 </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                 <Accordion.Header>
                                    <span>Pages</span>
                                    <i className="fa-regular fa-plus"></i>
                                 </Accordion.Header>
                                 <Accordion.Body>
                                    <ul>
                                       <li>
                                          <Link href="/about-us">About Us</Link>
                                       </li>
                                       <li>
                                          <Link href="/testimonials">
                                             Testimonials
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/faqs">FAQs</Link>
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
                                          <Link href="/register">Register</Link>
                                       </li>
                                       <li>
                                          <Link href="/dashboard">
                                             Dashboard
                                          </Link>
                                       </li>
                                    </ul>
                                 </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3">
                                 <Accordion.Header>
                                    <span>Orders</span>
                                    <i className="fa-regular fa-plus"></i>
                                 </Accordion.Header>
                                 <Accordion.Body>
                                    <ul>
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
                                          <Link href="/settings">Settings</Link>
                                       </li>
                                    </ul>
                                 </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="4">
                                 <Accordion.Header>
                                    <span>Blogs</span>
                                    <i className="fa-regular fa-plus"></i>
                                 </Accordion.Header>
                                 <Accordion.Body>
                                    <ul>
                                       <li>
                                          <Link href="/blogs">Blogs</Link>
                                       </li>
                                       <li>
                                          <Link href="/blogs-classic">
                                             Blogs Classic
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/blog-details-left-sidebar">
                                             Blogs Left Sidebar
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="/blogs/:slug">
                                             Blog Details
                                          </Link>
                                       </li>
                                    </ul>
                                 </Accordion.Body>
                              </Accordion.Item>
                           </Accordion>
                           <Link href="/contact" className="single-item">
                              Contact
                           </Link>
                        </div>

                        <p className="text d-none d-xl-block">
                           Nullam dignissim, ante scelerisque the is euismod
                           fermentum odio sem semper the is erat, a feugiat leo
                           urna eget eros. Duis Aenean a imperdiet risus.
                        </p>
                        <div className="mobile-menu fix mb-3"></div>
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
                                    All Laptop{" "}
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
                                 <Link href="/shop-without-sidebar">Phone</Link>
                              </li>
                              <li>
                                 <Link href="/shop-without-sidebar">
                                    Digital Watch
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <div className="offcanvas__contact">
                           <h4>Contact Info</h4>
                           <ul>
                              <li className="d-flex align-items-center">
                                 <div className="offcanvas__contact-icon">
                                    <i className="fal fa-map-marker-alt"></i>
                                 </div>
                                 <div className="offcanvas__contact-text">
                                    <Link target="_blank" href="#">
                                       Main Street, Melbourne, Australia
                                    </Link>
                                 </div>
                              </li>
                              <li className="d-flex align-items-center">
                                 <div className="offcanvas__contact-icon mr-15">
                                    <i className="fal fa-envelope"></i>
                                 </div>
                                 <div className="offcanvas__contact-text">
                                    <Link href="mailto:info@example.com">
                                       <span className="mailto:info@example.com">
                                          info@example.com
                                       </span>
                                    </Link>
                                 </div>
                              </li>
                              <li className="d-flex align-items-center">
                                 <div className="offcanvas__contact-icon mr-15">
                                    <i className="fal fa-clock"></i>
                                 </div>
                                 <div className="offcanvas__contact-text">
                                    <Link target="_blank" href="#">
                                       Mod-friday, 09am -05pm
                                    </Link>
                                 </div>
                              </li>
                              <li className="d-flex align-items-center">
                                 <div className="offcanvas__contact-icon mr-15">
                                    <i className="far fa-phone"></i>
                                 </div>
                                 <div className="offcanvas__contact-text">
                                    <Link href="tel:+11002345909">
                                       +11002345909
                                    </Link>
                                 </div>
                              </li>
                           </ul>
                           <div className="header-button mt-4">
                              <Link
                                 href="contact.html"
                                 className="theme-btn text-center"
                              >
                                 <span>
                                    Get A Quote
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                 </span>
                              </Link>
                           </div>
                           <div className="social-icon d-flex align-items-center">
                              <Link href="#">
                                 <i className="fab fa-facebook-f"></i>
                              </Link>
                              <Link href="#">
                                 <i className="fab fa-twitter"></i>
                              </Link>
                              <Link href="#">
                                 <i className="fab fa-youtube"></i>
                              </Link>
                              <Link href="#">
                                 <i className="fab fa-linkedin-in"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Offcanvas.Body>
         </Offcanvas>
      </>
   );
};

export { ResponsiveSidebar };
