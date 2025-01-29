import { headers } from "next/headers";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

const UserDashboardLayout = async ({ children }: PropsWithChildren) => {
   const headersList = await headers();

   const pathname = headersList.get("x-next-pathname");

   return (
      <div className="dashboard-section section-padding fix">
         <div className="container">
            <div className="row">
               <div className="col-xl-3">
                  <div className="dashboard-navigation-sidebar">
                     <h3>Navigation</h3>
                     <div>
                        <div className="nav flex-column nav-pills">
                           <Link
                              href="/dashboard"
                              className="nav-link"
                              type="button"
                           >
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
                                 pathname === "/order-details-one"
                                    ? "active"
                                    : ""
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
                              <i className="fa-solid fa-sign-out-alt"></i>Log
                              Out
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-9">{children}</div>
            </div>
         </div>
      </div>
   );
};

export default UserDashboardLayout;

{
   /* <div
            className=" fade show active"
            id="v-pills-dashboard"
            role="tabpanel"
            aria-labelledby="v-pills-dashboard-tab"
         >
            user dashboard 
         </div> */
}
// <div
//    className=" fade show active"
//    id="v-pills-order-history"
//    role="tabpanel"
//    aria-labelledby="v-pills-order-history-tab"
// >
//     order history
// </div>

{
   /* <div
            className=" fade"
            id="v-pills-wishlist"
            role="tabpanel"
            aria-labelledby="v-pills-wishlist-tab"
         >
             wishlist 
         </div> */
}
// <div
//    className=" fade"
//    id="v-pills-settings"
//    role="tabpanel"
//    aria-labelledby="v-pills-settings-tab"
// >
//     settings
// </div>
