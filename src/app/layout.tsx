import type { Metadata } from "next";
import { Albert_Sans, Jost } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

import "@/styles/css/all.min.css";
import "@/styles/scss/main.scss";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

const albertSans = Albert_Sans({
   variable: "--font-albert-sans",
   subsets: ["latin"],
});

const jost = Jost({
   variable: "--font-jost",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
      template: "EcomArts - s%",
      default: "EcomArts - Multipurpose E-commerce HTML Template",
   },
   description: "EcomArts - Multipurpose Ecommerce HTML Template",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${albertSans.variable} ${jost.variable}`}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
