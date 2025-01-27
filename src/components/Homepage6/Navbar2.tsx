import Image from "next/image";
import Link from "next/link";

const Navbar2 = () => {
   return (
      <header id="header-sticky" className="header-6 d-none d-xl-block">
         <div className="container-fluid">
            <div className="mega-menu-wrapper">
               <div className="header-main">
                  <div className="logo">
                     <Link href="/" className="header-logo">
                        <Image
                           width={1}
                           height={1}
                           src="/images/home-6/logo/black-logo.svg"
                           alt="logo-img"
                        />
                     </Link>
                  </div>
                  <div className="logo-2">
                     <Link href="/" className="header-logo">
                        <Image
                           width={1}
                           height={1}
                           src="/images/home-6/logo/white-logo.svg"
                           alt="logo-img"
                        />
                     </Link>
                  </div>
                  <div className="header-left">
                     <div className="bd-header__category-nav p-relative">
                        <div className="bd-category__click">
                           <span>
                              <i className="icon-icon-15"></i> All Categories
                           </span>
                        </div>
                        <div className="category__items">
                           <div className="category-item">
                              <nav>
                                 <ul>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-14"></i>
                                             Armchair
                                          </span>
                                          <span>(8)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-16"></i>
                                             Ceiling Fan
                                          </span>
                                          <span>(5)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-17"></i>
                                             Chandelier
                                          </span>
                                          <span>(7)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-18"></i>
                                             Coffee Table
                                          </span>
                                          <span>(3)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-19"></i>
                                             Cooker
                                          </span>
                                          <span>(4)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-20"></i>
                                             Cushion
                                          </span>
                                          <span>(2)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-21"></i>
                                             Dining Room
                                          </span>
                                          <span>(1)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-22"></i>
                                             Carver chair
                                          </span>
                                          <span>(8)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-22"></i>
                                             trundle bed
                                          </span>
                                          <span>(2)</span>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link href="/shop-details-one">
                                          <span>
                                             <i className="icon-icon-22"></i>
                                             basket chair
                                          </span>
                                          <span>(5)</span>
                                       </Link>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="header-right d-flex justify-content-end align-items-center">
                     <ul className="list">
                        <li>
                           <i className="fa-light fa-comments"></i>
                           <Link href="/contact">Live Chat</Link>
                        </li>
                        <li>
                           <i className="fa-light fa-comments"></i>
                           <Link href="/login">Login</Link>
                        </li>
                     </ul>
                     <div className="header__hamburger d-xl-none my-auto">
                        <div className="sidebar__toggle">
                           <i className="fas fa-bars"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export { Navbar2 };
