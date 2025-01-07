import Image from "next/image";
import Link from "next/link";

const IntroSection = () => {
   return (
      <section className="intro-section">
         <div className="intro-container-wrapper style2">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="intro-wrapper style2">
                        <div className="intro-subtitle">
                           Unmatched fashion trend 2024 at Ecomarts
                        </div>
                        <h1 className="intro-title">
                           Make your fashion look more charming
                        </h1>
                        <div className="intro-thumbs">
                           <div className="thumb1">
                              <Image
                                 src="/images/intro/introThumb2_1.jpg"
                                 alt="thumb"
                                 width={235}
                                 height={300}
                              />
                           </div>
                           <div className="thumb2">
                              <Image
                                 width={235}
                                 height={300}
                                 src="/images/intro/introThumb2_2.jpg"
                                 alt="thumb"
                              />
                           </div>
                           <div className="thumb3">
                              <Image
                                 width={340}
                                 height={455}
                                 src="/images/intro/introThumb2_3.jpg"
                                 alt="thumb"
                              />
                           </div>
                           <div className="thumb4">
                              <Image
                                 width={235}
                                 height={300}
                                 src="/images/intro/introThumb2_4.jpg"
                                 alt="thumb"
                              />
                           </div>
                           <div className="thumb5">
                              <Image
                                 width={235}
                                 height={300}
                                 src="/images/intro/introThumb2_5.jpg"
                                 alt="thumb"
                              />
                           </div>
                        </div>
                        <div className="collections">
                           <div className="summer-collections">
                              <div className="subtitle">Summer collection</div>
                              <div className="title">
                                 Trendy & clussi for new season
                              </div>
                              <Link href="/shop-left-sidebar">
                                 view products
                                 <i className="fa-solid fa-chevrons-right"></i>
                              </Link>
                           </div>
                           <div className="winter-collections">
                              <div className="subtitle">Winter collection</div>
                              <div className="title">
                                 Trendy & clussi for new season
                              </div>
                              <Link href="/shop-left-sidebar">
                                 view products
                                 <i className="fa-solid fa-chevrons-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { IntroSection };
