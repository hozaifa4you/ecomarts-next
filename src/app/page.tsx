import { BestSeller } from "@/components/homepage1/BestSeller";
import { Blogs } from "@/components/homepage1/Blogs";
import { FeaturedProducts } from "@/components/homepage1/FeaturedProducts";
import { Intro } from "@/components/homepage1/Intro";
import { OfferMarquee } from "@/components/homepage1/OfferMarquee";
import { PopularProducts } from "@/components/homepage1/PopularProducts";
import { Products } from "@/components/homepage1/Products";
import { Promotion } from "@/components/homepage1/Promotion";
import { Testimonials } from "@/components/homepage1/Testimonials";
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
