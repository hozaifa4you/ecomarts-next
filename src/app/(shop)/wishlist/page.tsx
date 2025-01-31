import { Breadcrumb } from "@/components/Breadcrumb";
import { Wishlist } from "@/components/Dashboard/Wishlist";
import React from "react";

const WishListPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Wishlist" secondaryTitle="Category" />

         <Wishlist />
      </>
   );
};

export default WishListPage;
