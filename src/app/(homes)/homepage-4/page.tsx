import { BeautyCareProductSection } from "@/components/Homepage4/BeautyCareProductSection";
import { BlogSection } from "@/components/Homepage4/BlogSection";
import { BrandSection } from "@/components/Homepage4/BrandSection";
import { CTASection } from "@/components/Homepage4/CTASection";
import { FeatureSection } from "@/components/Homepage4/FeatureSection";
import { GallerySection } from "@/components/Homepage4/GallerySection";
import { IncredibleProducts } from "@/components/Homepage4/IncredibleProducts";
import { IntroSection } from "@/components/Homepage4/IntroSection";
import { PopularCategorySection } from "@/components/Homepage4/PopularCategorySection";
import { TestimonialSection } from "@/components/Homepage4/TestimonialSection";
import { TopRatedSection } from "@/components/Homepage4/TopRatedSection";

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
         <IncredibleProducts />
         <FeatureSection />
      </>
   );
};

export default Homepage4;
