"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
   const [visible, setVisible] = useState(false);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      const toggleVisibility = () => {
         if (window.scrollY > 300) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);

   return (
      <button
         id="back-top"
         className={`back-to-top ${visible ? "show" : ""}`}
         onClick={scrollToTop}
      >
         <i className="fa-solid fa-chevron-up"></i>
      </button>
   );
};

export { ScrollToTop };
