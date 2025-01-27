import Link from "next/link";

const VideoSection = () => {
   return (
      <div
         className="vedio-area fix section-padding2 bg-cover"
         style={{ backgroundImage: "url('/images/home-7/video-bg.jpg')" }}
      >
         <div className="video-box-2">
            <Link
               href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
               className="play-btn popup-video"
            >
               <i className="fa-sharp fa-solid fa-play"></i>
            </Link>
         </div>
      </div>
   );
};

export { VideoSection };
