import { BestSeller } from "@/components/homepage1/BestSeller";
import { Blogs } from "@/components/homepage1/Blogs";
import { FeaturedProducts } from "@/components/homepage1/FeaturedProducts";
import { Intro } from "@/components/homepage1/Intro";
import { OfferMarquee } from "@/components/homepage1/OfferMarquee";
import { PopularProducts } from "@/components/homepage1/PopularProducts";
import { CategoryCards } from "@/components/homepage1/CategoryCards";
import { Promotion } from "@/components/homepage1/Promotion";
import { Testimonials } from "@/components/homepage1/Testimonials";

const Homepage1 = () => {
   return (
      <>
         <Intro />
         <OfferMarquee />
         <CategoryCards />
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
