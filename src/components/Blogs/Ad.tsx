import Image from "next/image";
import React from "react";

const Ad = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__blog-thumb">
            <Image
               width={315}
               height={375}
               src="/images/blog/blog-sidebar-thumb.jpg"
               alt="thumb"
            />
         </div>
      </div>
   );
};

export { Ad };
