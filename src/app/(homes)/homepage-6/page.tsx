import { FeaturedProductSection } from "@/components/Homepage6/FeaturedProductSection";
import { CountDownSection } from "@/components/Homepage6/CountDownSection";
import { IntroSection } from "@/components/Homepage6/IntroSection";
import { ShopFeatureSection } from "@/components/Homepage6/ShopFeatureSection";
import { TopCategorySection } from "@/components/Homepage6/TopCategorySection";
import { CtaSection } from "@/components/Homepage6/CtaSection";
import { HotDealSection } from "@/components/Homepage6/HotDealSection";
import { CtaSection2 } from "@/components/Homepage6/CtaSection2";
import { BrandLogoSection } from "@/components/Homepage6/BrandLogoSection";
import { BlogSection } from "@/components/Homepage6/BlogSection";

const Homepage6 = () => {
   return (
      <>
         <IntroSection />
         <ShopFeatureSection />
         <TopCategorySection />
         <CountDownSection />
         <FeaturedProductSection />
         <CtaSection />
         <HotDealSection />
         <CtaSection2 />
         <BrandLogoSection />
         <BlogSection />
      </>
   );
};

export default Homepage6;
