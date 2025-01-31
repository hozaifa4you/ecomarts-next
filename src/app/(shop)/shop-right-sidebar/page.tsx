import { Pagination } from "@/components/Blogs/Pagination";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FilterByColor } from "@/components/Shop/FilterByColor";
import { FilterBySize } from "@/components/Shop/FilterBySize";
import { FilterPrice } from "@/components/Shop/FilterPrice";
import { ProductStatus } from "@/components/Shop/ProductStatus";
import { ReviewStarts } from "@/components/Shop/ReviewStarts";
import { SearchBox } from "@/components/Shop/SearchBox";
import { TopCategories } from "@/components/Shop/TopCategories";
import { productData } from "@/utils/data/shop";
import { ProductCard } from "../shop-left-sidebar/page";

const ShopLeftSidebarPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Shop Left Sidebar" secondaryTitle="Category" />

         <section className="shop-section section-padding2 fix">
            <div className="container">
               <div className="row gx-30 gy-30">
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
               </div>
            </div>
         </section>
      </>
   );
};

export default ShopLeftSidebarPage;
