"use client";
import { useEffect, useRef } from "react";
import { bindNiceSelect } from "./utils";
import "./NiceSelect.css";

export default function NiceSelect({ id, children, ...otherProps }) {
   const initialized = useRef(false);

   useEffect(() => {
      if (!initialized.current) {
         const el = document.getElementById(id);
         if (el) {
            bindNiceSelect(el);
            initialized.current = true;
         }
      }
   }, [id]);

   return (
      <select id={id} {...otherProps}>
         {children}
      </select>
   );
}
