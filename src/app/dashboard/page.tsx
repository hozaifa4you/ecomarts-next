"use client";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AccountSettings } from "@/components/Dashboard/AccountSettings";
import { OrderDetails } from "@/components/Dashboard/OrderDetails";
import { OrderHistory } from "@/components/Dashboard/OrderHistory";
import { Overview } from "@/components/Dashboard/Overview";
import { Wishlist } from "@/components/Dashboard/Wishlist";
import { useState } from "react";

type TabType =
   | "overview"
   | "order-history"
   | "order-details"
   | "wishlist"
   | "settings"
   | "logout";

const DashboardPage = () => {
   const [tab, setTab] = useState<TabType>("overview");

   return (
      <>
         <Breadcrumb mainTitle="Overview" secondaryTitle="Dashboard" />

         <div className="dashboard-section section-padding fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3">
                     <div className="dashboard-navigation-sidebar">
                        <h3>Navigation</h3>
                        <div>
                           <div
                              className="nav flex-column nav-pills"
                              role="tablist"
                           >
                              <button
                                 className={`nav-link ${
                                    tab === "overview" ? "active" : ""
                                 }`}
                                 type="button"
                                 role="tab"
                                 onClick={() => setTab("overview")}
                              >
                                 <i className="fa-sharp fa-solid fa-grid-2"></i>
                                 Dashboard
                              </button>

                              <button
                                 className={`nav-link ${
                                    tab === "order-history" ? "active" : ""
                                 }`}
                                 type="button"
                                 role="tab"
                                 onClick={() => setTab("order-history")}
                              >
                                 <i className="fa-solid fa-sync"></i>Order
                                 History
                              </button>

                              <button
                                 className={`nav-link ${
                                    tab === "order-details" ? "active" : ""
                                 }`}
                                 type="button"
                                 role="tab"
                                 onClick={() => setTab("order-details")}
                              >
                                 <i className="fa-solid fa-list"></i>Order
                                 Details
                              </button>

                              <button
                                 className={`nav-link ${
                                    tab === "wishlist" ? "active" : ""
                                 }`}
                                 type="button"
                                 role="tab"
                                 onClick={() => setTab("wishlist")}
                              >
                                 <i className="fa-light fa-heart"></i>Wishlist
                              </button>

                              <button
                                 className={`nav-link ${
                                    tab === "settings" ? "active" : ""
                                 }`}
                                 type="button"
                                 role="tab"
                                 onClick={() => setTab("settings")}
                              >
                                 <i className="fa-regular fa-gear"></i>Settings
                              </button>

                              <button
                                 className={`nav-link ${
                                    tab === "logout" ? "active" : ""
                                 }`}
                                 type="button"
                                 role="tab"
                              >
                                 <i className="fa-solid fa-sign-out-alt"></i>Log
                                 Out
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 mt-4 mt-xl-0">
                     <div className="tab-content" id="v-pills-tabContent">
                        {tab === "overview" && (
                           <div className=" fade show active" role="tabpanel">
                              <Overview />
                           </div>
                        )}
                        {tab === "order-history" && (
                           <div className=" fade show active" role="tabpanel">
                              <OrderHistory />
                           </div>
                        )}
                        {tab === "order-details" && (
                           <div className=" fade show active" role="tabpanel">
                              <OrderDetails />
                           </div>
                        )}
                        {tab === "wishlist" && (
                           <div className=" fade show active" role="tabpanel">
                              <Wishlist />
                           </div>
                        )}
                        {tab === "settings" && (
                           <div className=" fade show active" role="tabpanel">
                              <AccountSettings />
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DashboardPage;
