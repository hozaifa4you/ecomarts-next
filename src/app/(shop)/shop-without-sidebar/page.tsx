import { Pagination } from "@/components/Blogs/Pagination";
import { Breadcrumb } from "@/components/Breadcrumb";
import { productData } from "@/utils/data/shop";
import React from "react";
import { ProductCard } from "../shop-left-sidebar/page";

const ShopWithoutSidebarPage = () => {
   return (
      <>
         <Breadcrumb
            mainTitle="Shop Without Sidebar"
            secondaryTitle="Category"
         />

         <section className="shop-section section-padding2 fix">
            <div className="container">
               <div className="row g-4">
                  {productData.map((product) => (
                     <div className="col-xl-3 col-md-6" key={product.id}>
                        <ProductCard {...product} />
                     </div>
                  ))}
               </div>
               <Pagination />
            </div>
         </section>
      </>
   );
};

export default ShopWithoutSidebarPage;
