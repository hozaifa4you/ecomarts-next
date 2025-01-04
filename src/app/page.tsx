import { BestSeller } from "@/components/home1/BestSeller";
import { Blogs } from "@/components/home1/Blogs";
import { FeaturedProducts } from "@/components/home1/FeaturedProducts";
import { Intro } from "@/components/home1/Intro";
import { OfferMarquee } from "@/components/home1/OfferMarquee";
import { PopularProducts } from "@/components/home1/PopularProducts";
import { Products } from "@/components/home1/Products";
import { Promotion } from "@/components/home1/Promotion";
import { Testimonials } from "@/components/home1/Testimonials";
import React from "react";

const Homepage1 = () => {
   return (
      <>
         <Intro />
         <OfferMarquee />
         <Products />
         <BestSeller />
         <FeaturedProducts />
         <Promotion />
         <PopularProducts />
         <Testimonials />
         <Blogs />
      </>
   );
};

export default Homepage1;
