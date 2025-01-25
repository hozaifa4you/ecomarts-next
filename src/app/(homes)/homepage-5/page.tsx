import { BlogSection } from "@/components/Homepage5/BlogSection";
import { BrandLogoSection } from "@/components/Homepage5/BrandLogoSection";
import { CtaCollectionSection } from "@/components/Homepage5/CtaCollectionSection";
import { CtaDiscountSection } from "@/components/Homepage5/CtaDiscountSection";
import { HeroSection } from "@/components/Homepage5/HeroSection";
import { JewelryCategorySection } from "@/components/Homepage5/JewelryCategorySection";
import { NewProductsSection } from "@/components/Homepage5/NewProductsSection";
import { TopRatedSection } from "@/components/Homepage5/TopRatedSection";
import { TopRatedSection2 } from "@/components/Homepage5/TopRatedSection2";

const Homepage5 = () => {
   return (
      <>
         <HeroSection />
         <JewelryCategorySection />
         <CtaDiscountSection />
         <TopRatedSection />
         <CtaCollectionSection />
         <TopRatedSection2 />
         <BlogSection />
         <BrandLogoSection />
         <NewProductsSection />
      </>
   );
};

export default Homepage5;
