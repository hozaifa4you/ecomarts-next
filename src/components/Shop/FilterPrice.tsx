"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const FilterPrice = () => {
   const [range, setRange] = useState(35);

   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Filter by price
            </h3>
         </div>
         <div className="single-sidebar-widget__filter-price-widget-categories">
            <div className="range-slider">
               <Form.Range
                  min={0}
                  max={70}
                  value={range}
                  onChange={(e) => setRange(Number(e.target.value))}
                  style={{
                     background: `linear-gradient(90deg, rgb(255, 64, 53) ${
                        (range / 70) * 100
                     }%, rgb(224, 224, 224) ${(range / 70) * 100}%)`,
                  }}
               />
               <div className="range-values">
                  <span id="minPrice">$0</span>
                  <span id="currentPrice">${range}</span>
                  <span id="maxPrice">$70</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { FilterPrice };
