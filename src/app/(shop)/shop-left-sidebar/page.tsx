import { Pagination } from "@/components/Blogs/Pagination";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FilterByColor } from "@/components/Shop/FilterByColor";
import { FilterBySize } from "@/components/Shop/FilterBySize";
import { FilterPrice } from "@/components/Shop/FilterPrice";
import { ProductStatus } from "@/components/Shop/ProductStatus";
import { ReviewStarts } from "@/components/Shop/ReviewStarts";
import { SearchBox } from "@/components/Shop/SearchBox";
import { TopCategories } from "@/components/Shop/TopCategories";
import { productData, ProductType } from "@/utils/data/shop";
import Image from "next/image";
import Link from "next/link";

const ShopLeftSidebarPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Shop Left Sidebar" secondaryTitle="Category" />

         <section className="shop-section section-padding2 fix">
            <div className="container">
               <div className="row gx-30 gy-30">
                  <div className="col-lg-3">
                     <div className="main-sidebar-1">
                        <SearchBox />
                        <FilterPrice />
                        <TopCategories />
                        <FilterByColor />
                        <ProductStatus />
                        <FilterBySize />
                        <ReviewStarts />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <div className="row g-4">
                        {productData.slice(0, 12).map((product) => (
                           <div
                              key={product.id}
                              className="col-xl-4 col-lg-4 col-md-6"
                           >
                              <ProductCard {...product} />
                           </div>
                        ))}
                     </div>
                     <Pagination />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export const ProductCard = ({
   category,
   image,
   name,
   offerPrice,
   price,
   tag,
}: ProductType) => {
   return (
      <div className="best-seller-product-items-two item-border">
         <div className="icon-box2">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
               <i className="fa-regular fa-eye"></i>
            </button>
            <a href="wishlist.html">
               <i className="fa-regular fa-heart"></i>
            </a>
            <a href="cart.html">
               <i className="fa-light fa-bag-shopping"></i>
            </a>
         </div>
         <div className="best-seller-product-items-two__badge1">{tag}</div>
         <div className="best-seller-product-items-two__thumb">
            <Image
               width={image.w}
               height={image.h}
               src={image.url}
               alt="thumb"
            />
         </div>
         <div className="best-seller-product-items-two__content">
            <div className="best-seller-product-items-two__details">
               <p className="best-seller-product-items-two__details--subtitle">
                  {category}
               </p>
               <h6 className="best-seller-product-items-two__details--title">
                  <Link href="/shop-details-one">{name}</Link>
               </h6>
               <div className="best-seller-product-items-two__details--price">
                  <span className="offer-price">${offerPrice}</span>
                  <span className="original-price">${price}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopLeftSidebarPage;
