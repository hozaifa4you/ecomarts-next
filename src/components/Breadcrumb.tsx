/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface BreadcrumbProps {
   mainTitle: string;
   secondaryTitle: string;
}

const Breadcrumb = ({ mainTitle, secondaryTitle }: BreadcrumbProps) => {
   return (
      <div className="breadcumb-section">
         <div
            className="breadcumb-container-wrapper"
            style={{
               backgroundImage: 'url("/images/breadcumb/breadcumb-bg.png")',
            }}
         >
            <div className="shape1">
               <img src="/images/shape/breadcumb-shape1_1.png" alt="shape" />
            </div>
            <div className="shape2">
               <img src="/images/shape/breadcumb-shape1_2.png" alt="shape" />
            </div>
            <div className="shape3">
               <img src="/images/shape/breadcumb-shape1_3.png" alt="shape" />
            </div>
            <div className="shape4">
               <img src="/images/shape/breadcumb-shape1_4.png" alt="shape" />
            </div>
            <div className="container">
               <ul className="breadcumb-wrapper">
                  <li>
                     <Link href="/">
                        <i className="fa-sharp fa-light fa-house"></i>
                     </Link>
                  </li>
                  <li>
                     <i className="fa-solid fa-chevron-right"></i>
                  </li>
                  <li>{secondaryTitle}</li>
                  <li>
                     <i className="fa-solid fa-chevron-right"></i>
                  </li>
                  <li>{mainTitle}</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export { Breadcrumb };
