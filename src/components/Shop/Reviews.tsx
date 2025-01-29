import { reviewsData, ReviewsType } from "@/utils/data/shop";
import Image from "next/image";

const Reviews = () => {
   return (
      <div className="product-review">
         <h3>02 Reviews</h3>
         <ul className="comment-list">
            {reviewsData.map((review) => (
               <ReviewItem {...review} key={review.id} />
            ))}
         </ul>
      </div>
   );
};

const ReviewItem = ({ author, comment, date, img }: ReviewsType) => {
   return (
      <li className="review comment-item">
         <div className="post-comment">
            <div className="comment-avater">
               <Image width={120} height={120} src={img} alt="Comment Author" />
            </div>
            <div className="comment-content">
               <h4 className="name">{author.name}</h4>
               <div className="commented-on">{date}</div>
               <ul className="star">
                  <li>
                     <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-solid fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-solid fa-star"></i>
                  </li>
               </ul>
               <p className="text">{comment}</p>

               <a className="theme-btn" href="#!">
                  Reply
               </a>
            </div>
         </div>
      </li>
   );
};

export { Reviews };
