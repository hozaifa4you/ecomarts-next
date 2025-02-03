import { useEffect, useState } from "react";

export interface TimeLeft {
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
}

/**
 *
 * @param targetDate ISO string format, e.g., "2023-12-31T23:59:59"
 * @returns TimeLeft object
 */
const calculateTimeLeft = (targetDate: string): TimeLeft => {
   const difference = +new Date(targetDate) - +new Date();
   let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   };

   if (difference > 0) {
      timeLeft = {
         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
         minutes: Math.floor((difference / 1000 / 60) % 60),
         seconds: Math.floor((difference / 1000) % 60),
      };
   }

   return timeLeft;
};

export const useCountdownTimer = () => {
   const TARGET_DATE = new Date();
   TARGET_DATE.setDate(TARGET_DATE.getDate() + 3);
   const TARGET_DATE_STRING =
      TARGET_DATE.toISOString().split("T")[0] + "T23:59:59";

   const [timeLeft, setTimeLeft] = useState<TimeLeft>(
      calculateTimeLeft(TARGET_DATE_STRING)
   );

   useEffect(() => {
      const timer = setTimeout(() => {
         setTimeLeft(calculateTimeLeft(TARGET_DATE_STRING));
      }, 1000);
      return () => clearTimeout(timer);
   });

   return timeLeft;
};
