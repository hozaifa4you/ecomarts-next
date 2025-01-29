"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
   const pathname = usePathname();

   return (
      <div>
         <div className="nav flex-column nav-pills">
            <Link href="/dashboard" className="nav-link" type="button">
               <i className="fa-sharp fa-solid fa-grid-2"></i>
               Dashboard
            </Link>

            <Link
               href="/order-history"
               className={`nav-link ${
                  pathname === "/order-history" ? "active" : ""
               }`}
            >
               <i className="fa-solid fa-sync"></i>Order History
            </Link>

            <Link
               href="/order-details-one"
               className={`nav-link ${
                  pathname === "/order-details-one" ? "active" : ""
               }`}
            >
               <i className="fa-solid fa-list"></i>Order Details
            </Link>

            <Link
               href="/wishlist"
               className={`nav-link ${
                  pathname === "/wishlist" ? "active" : ""
               }`}
            >
               <i className="fa-light fa-heart"></i>Wishlist
            </Link>

            <Link
               href="/settings"
               className={`nav-link ${
                  pathname === "/settings" ? "active" : ""
               }`}
            >
               <i className="fa-regular fa-gear"></i>Settings
            </Link>

            <button className="nav-link">
               <i className="fa-solid fa-sign-out-alt"></i>Log Out
            </button>
         </div>
      </div>
   );
};

export { Navigation };
