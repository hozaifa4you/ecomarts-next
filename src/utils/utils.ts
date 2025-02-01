export interface TimeLeft {
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
}

const shuffleArray = <T>(array: T[]): T[] => {
   let currentIndex = array.length,
      randomIndex;
   while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex],
      ];
   }
   return array;
};

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

export { shuffleArray, calculateTimeLeft };
