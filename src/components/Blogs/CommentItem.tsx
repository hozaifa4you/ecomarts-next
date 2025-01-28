import Image from "next/image";
import Link from "next/link";

import { CommentType } from "@/utils/data/blogs";

const CommentItem = ({ comment, date, img, name }: CommentType) => {
   return (
      <div className="blog-post-details__comments-area__blog-single-comment">
         <div className="blog-post-details__comments-area__blog-single-comment--thumb flex-shrink-0">
            <Image width={53} height={53} src={img} alt="thumb" />
         </div>
         <div className="blog-post-details__comments-area__blog-single-comment--content">
            <div className="head">
               <div className="con">
                  <h5>{name}</h5>
                  <span>{date}</span>
               </div>
               <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
               </div>
            </div>
            <p>{comment}</p>
            <Link href="#" className="reply">
               Reply
            </Link>
         </div>
      </div>
   );
};

export { CommentItem };
