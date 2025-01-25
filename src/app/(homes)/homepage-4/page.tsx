import { BeautyCareProductSection } from "@/components/Homepage4/BeautyCareProductSection";
import { BlogSection } from "@/components/Homepage4/BlogSection";
import { BrandSection } from "@/components/Homepage4/BrandSection";
import { CTASection } from "@/components/Homepage4/CTASection";
import { GallerySection } from "@/components/Homepage4/GallerySection";
import { IncredibleProductsSection } from "@/components/Homepage4/IncredibleProductsSection";
import { IntroSection } from "@/components/Homepage4/IntroSection";
import { PopularCategorySection } from "@/components/Homepage4/PopularCategorySection";
import { TestimonialSection } from "@/components/Homepage4/TestimonialSection";
import { TopRatedSection } from "@/components/Homepage4/TopRatedSection";
import { ShopFeatureSection as ShopFeatureSection2 } from "@/components/Homepage2/ShopFeatureSection";

const Homepage4 = () => {
   return (
      <>
         <IntroSection />
         <PopularCategorySection />
         <BeautyCareProductSection />
         <GallerySection />
         <TopRatedSection />
         <CTASection />
         <TestimonialSection />
         <BlogSection />
         <BrandSection />
         <IncredibleProductsSection />
         <ShopFeatureSection2 />
      </>
   );
};

export default Homepage4;
