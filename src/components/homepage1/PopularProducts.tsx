import Image from "next/image";
import React from "react";

import {
   popularProductsData,
   popularProductsData2,
   PopularProductType,
   PopularProductType2,
} from "@/utils/data/homepage-1";
import Link from "next/link";

const PopularProducts = () => {
   return (
      <div className="popular-product-section section-padding bg-color2 fix">
         <div className="container">
            <div className="row gy-4 d-flex align-items-center mb-30">
               <div className="col-xl-6">
                  <div className="section-title">
                     <div className="subtitle style1">Hot Sell</div>
                     <h2 className="title">Products Of The Week</h2>
                  </div>
               </div>
               <div className="col-xl-6 d-flex justify-content-xl-end">
                  <div className="btn-wrapper">
                     <Link
                        className="theme-btn style7"
                        href="/shop-left-sidebar"
                     >
                        View all
                     </Link>
                  </div>
               </div>
            </div>
            <div className="popular-product-wrapper style1">
               <div className="card-items-wrapper style1">
                  {popularProductsData.map((item) => (
                     <PopularProductCard key={item.id} {...item} />
                  ))}
               </div>
               <div className="card-items-wrapper style2">
                  {popularProductsData2.map((item) => (
                     <PopularProductCard2 key={item.id} {...item} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

const PopularProductCard = ({
   name,
   percent,
   tag,
   title,
   img,
   id,
}: PopularProductType) => {
   return (
      <div
         className={`popular-product-card-item-one ${id === 2 ? "mb-0" : ""}`}
      >
         <div className="popular-product-card-item-one__content">
            <div className="offer">{percent}</div>
            <h6 className="subtitle style1">{title}</h6>
            <p>{tag}</p>
            <h3>
               <Link href="/shop-details-one">{name}</Link>
            </h3>
            <div className="btn-wrapper product-btn-wrapper">
               <Link className="theme-btn style6" href="/cart">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                  >
                     <g clipPath="url(#clip0_86_603)">
                        <path
                           d="M15.7625 5.78421C15.5512 5.51915 15.2342 5.36709 14.8928 5.36709H11.8114L10.1405 1.54106C10.0369 1.30384 9.7606 1.19543 9.52335 1.29909C9.2861 1.40268 9.17775 1.67903 9.28138 1.91628L10.7884 5.36712H5.2116L6.71863 1.91628C6.82222 1.67903 6.71391 1.40271 6.47666 1.29909C6.23944 1.19543 5.9631 1.30377 5.8595 1.54106L4.1886 5.36712H1.10722C0.765783 5.36712 0.448814 5.51915 0.237533 5.78424C0.030127 6.04449 -0.0464043 6.37906 0.0275645 6.70224L1.6731 13.8897C1.788 14.3916 2.23197 14.7421 2.75275 14.7421H13.2473C13.768 14.7421 14.212 14.3916 14.3269 13.8897L15.9724 6.70221C16.0464 6.37902 15.9699 6.04446 15.7625 5.78421ZM13.2473 13.8046H2.75275C2.67316 13.8046 2.60344 13.7524 2.58697 13.6805L0.941439 6.49302C0.928533 6.43662 0.950189 6.39418 0.970689 6.36853C0.989689 6.34465 1.03272 6.30462 1.10722 6.30462H3.77919L3.65641 6.58577C3.55281 6.82302 3.66113 7.09934 3.89838 7.20296C3.95744 7.22887 4.02123 7.24226 4.08572 7.24228C4.26641 7.24228 4.4386 7.13718 4.51553 6.96103L4.80219 6.30468H11.1979L11.4845 6.96103C11.5615 7.13721 11.7337 7.24228 11.9143 7.24228C11.977 7.24228 12.0406 7.22965 12.1017 7.20296C12.3389 7.09937 12.4473 6.82302 12.3437 6.58577L12.2209 6.30462H14.8928C14.9673 6.30462 15.0104 6.34465 15.0294 6.36853C15.0498 6.39421 15.0715 6.43665 15.0586 6.49299L13.4131 13.6805C13.3966 13.7524 13.3268 13.8046 13.2473 13.8046Z"
                           fill="#FF4035"
                        ></path>
                        <path
                           d="M5.1875 8.33594C4.92862 8.33594 4.71875 8.54581 4.71875 8.80469V12.2422C4.71875 12.5011 4.92862 12.7109 5.1875 12.7109C5.44638 12.7109 5.65625 12.5011 5.65625 12.2422V8.80469C5.65625 8.54581 5.44641 8.33594 5.1875 8.33594ZM8 8.33594C7.74113 8.33594 7.53125 8.54581 7.53125 8.80469V12.2422C7.53125 12.5011 7.74113 12.7109 8 12.7109C8.25887 12.7109 8.46875 12.5011 8.46875 12.2422V8.80469C8.46875 8.54581 8.25887 8.33594 8 8.33594ZM10.8125 8.33594C10.5536 8.33594 10.3438 8.54581 10.3438 8.80469V12.2422C10.3438 12.5011 10.5536 12.7109 10.8125 12.7109C11.0714 12.7109 11.2812 12.5011 11.2812 12.2422V8.80469C11.2812 8.54581 11.0714 8.33594 10.8125 8.33594Z"
                           fill="#FF4035"
                        ></path>
                     </g>
                     <defs>
                        <clipPath id="clip0_86_60322">
                           <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                     </defs>
                  </svg>
                  Add To Cart
               </Link>
               <div className="timer-box-2 mb-0">
                  <i className="fa-sharp fa-solid fa-alarm-clock"></i>
                  <span className="text">
                     23 : 23 : 56 :<span className="sec">56</span>
                  </span>
               </div>
            </div>
         </div>
         <div className="popular-product-card-item-one__thumb">
            <Image width={100} height={100} src={img} alt="thumb" />
         </div>
      </div>
   );
};
const PopularProductCard2 = ({
   discountPrice,
   img,
   name,
   price,
}: PopularProductType2) => {
   return (
      <div className="popular-product-card-item-two">
         <div className="popular-product-card-item-two__thumb">
            <Image width={130} height={165} src={img} alt="thumb" />
         </div>
         <div className="popular-product-card-item-two__content">
            <h6>
               <Link href="/shop-details-one">{name}</Link>
            </h6>
            <div className="star">
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-solid fa-star"></i>
               <i className="fa-regular fa-star"></i>
            </div>
            <div className="popular-product-timer-box">
               <div className="box">
                  <h5 id="day" className="number">
                     24
                  </h5>
                  <p className="text">Days</p>
               </div>
               <div className="box">
                  <h5 id="hrs" className="number">
                     09
                  </h5>
                  <p className="text">Hour</p>
               </div>
               <div className="box">
                  <h5 id="min" className="number">
                     25
                  </h5>
                  <p className="text">Min</p>
               </div>
               <div className="box">
                  <h5 id="sec" className="number">
                     05
                  </h5>
                  <p className="text">Sec</p>
               </div>
            </div>
            <div className="price">
               <span className="discount-price">${discountPrice}</span>
               <span className="original-price">${price}</span>
            </div>
            <div className="icon">
               <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
                  <i className="fa-regular fa-eye"></i>
               </button>
               <Link href="/wishlist">
                  <i className="fa-regular fa-heart"></i>
               </Link>
               <Link href="/cart">
                  <i className="fa-light fa-bag-shopping"></i>
               </Link>
            </div>
         </div>
      </div>
   );
};

export { PopularProducts };
