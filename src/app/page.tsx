import { BestSellerSection } from "@/components/homepage1/BestSellerSection";
import { BlogsSection } from "@/components/homepage1/BlogsSection";
import { FeaturedProductsSection } from "@/components/homepage1/FeaturedProductsSection";
import { IntroSection } from "@/components/homepage1/IntroSection";
import { OfferMarqueeSection } from "@/components/homepage1/OfferMarqueeSection";
import { PopularProductsSection } from "@/components/homepage1/PopularProductsSection";
import { CategoriesSection } from "@/components/homepage1/CategoriesSection";
import { PromotionSection } from "@/components/homepage1/PromotionSection";
import { TestimonialsSection } from "@/components/homepage1/TestimonialsSection";

const Homepage1 = () => {
   return (
      <>
         <IntroSection />
         <OfferMarqueeSection />
         <CategoriesSection />
         <BestSellerSection />
         <FeaturedProductsSection />
         <PromotionSection />
         <PopularProductsSection />
         <TestimonialsSection />
         <BlogsSection />
      </>
   );
};

export default Homepage1;
