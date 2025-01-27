import React from "react";

const VideoSection = () => {
   return (
      <div
         className="vedio-area fix section-padding2 bg-cover"
         // style="background-image: url('/images/home-7/video-bg.jpg')"
      >
         <div className="video-box-2">
            <a
               href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
               className="play-btn popup-video"
            >
               <i className="fa-sharp fa-solid fa-play"></i>
            </a>
         </div>
      </div>
   );
};

export { VideoSection };
