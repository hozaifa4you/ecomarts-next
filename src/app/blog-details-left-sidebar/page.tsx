import Image from "next/image";

import { Ad } from "@/components/Blogs/Ad";
import { AddComment } from "@/components/Blogs/AddComment";
import { CommentItem } from "@/components/Blogs/CommentItem";
import { RecentPosts } from "@/components/Blogs/RecentPosts";
import { RecommendedTopics } from "@/components/Blogs/RecommendedTopics";
import { SidebarSearchBox } from "@/components/Blogs/SidebarSearchBox";
import { Breadcrumb } from "@/components/Breadcrumb";
import { commentData } from "@/utils/data/blogs";

const BlogDetailsLeftSidebar = () => {
   return (
      <>
         <Breadcrumb mainTitle="Blog Details" secondaryTitle="Blog List" />

         <section className="blog-details fix section-padding">
            <div className="container">
               <div className="blog-details-area">
                  <div className="row g-5">
                     <div className="col-lg-3 order-2 order-lg-1">
                        <div className="main-sidebar-2">
                           <SidebarSearchBox />
                           <RecentPosts />
                           <RecommendedTopics />
                           <Ad />
                        </div>
                     </div>

                     <div className="col-lg-9 order-1 order-lg-2">
                        <div className="blog-post-details">
                           <div className="single-blog-post">
                              <h3 className="single-blog-post__title">
                                 <a href="blog-classic.html">
                                    Fashion is what you’re offered four times a
                                    year by designers. And style is what you
                                    choose
                                 </a>
                              </h3>
                              <div className="single-blog-post__thumb">
                                 <Image
                                    width={1045}
                                    height={450}
                                    src="/images/blog/blog-details-thumb1_1.jpg"
                                    alt="thumb"
                                 />
                                 <div className="single-blog-post__thumb--post-date">
                                    <ul>
                                       <li>
                                          <i className="fa-regular fa-user"></i>
                                          By Admin
                                       </li>
                                       <li>
                                          <i className="fa-solid fa-calendar-days"></i>
                                          Jun 12, 2024
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="single-blog-post__blog-details-content">
                                 <p className="single-blog-post__blog-details-content--subtitle">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don&apos;t look even slightly believable. If
                                    you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn&apos;t
                                    anything embarrassing hidden in the middle
                                    of text. All the Lorem Ipsum generators on
                                    the Internet
                                 </p>
                                 <p className="single-blog-post__blog-details-content--texttitle">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don&apos;t look even slightly believable. If
                                    you are going to use a passage of Lorem
                                    Ipsum,
                                 </p>
                                 <div className="row g-4">
                                    <div className="col-lg-6">
                                       <div className="single-blog-post__blog-details-content--details-image">
                                          <Image
                                             width={510}
                                             height={325}
                                             src="/images/blog/blog-details-thumb1_2.jpg"
                                             alt="thumb"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="single-blog-post__blog-details-content--details-image">
                                          <Image
                                             width={510}
                                             height={325}
                                             src="/images/blog/blog-details-thumb1_3.jpg"
                                             alt="thumb"
                                          />
                                       </div>
                                    </div>
                                 </div>

                                 <div className="single-blog-post__blog-details-content--hilight-text">
                                    <div className="icon">
                                       <svg
                                          width="44"
                                          height="38"
                                          viewBox="0 0 44 38"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M21.0461 11.5684C20.88 17.7542 19.6607 23.6642 16.5492 29.1016C14.3984 32.8589 11.1807 35.4877 7.58794 37.7346C7.36019 37.8767 7.06736 38.1405 6.81905 37.9076C6.53992 37.6455 6.78138 37.3082 6.92351 37.0462C8.22326 34.6708 9.60864 32.34 10.7406 29.874C11.9804 27.1715 12.9616 24.3818 13.6055 21.4721C13.7768 20.6998 13.6038 20.6141 12.8743 20.7717C6.90296 22.0664 1.34948 18.3895 0.181585 12.399C-0.926371 6.71842 3.0568 1.04984 8.79865 0.138763C15.2906 -0.8922 20.9947 3.95263 21.0461 10.5409C21.0478 10.8834 21.0461 11.2259 21.0461 11.5684Z"
                                             fill="#FF4035"
                                          />
                                          <path
                                             d="M44 11.6231C43.827 18.0794 42.5256 24.2258 39.0767 29.8002C36.9755 33.1945 33.9411 35.5681 30.6497 37.6746C30.3877 37.8424 30.0401 38.19 29.749 37.8681C29.4853 37.5769 29.7986 37.2276 29.9545 36.9347C31.2388 34.5508 32.6413 32.2303 33.7561 29.7557C34.9668 27.0704 35.9361 24.308 36.568 21.4258C36.7324 20.6757 36.5491 20.6038 35.8659 20.7647C29.8483 22.1776 23.9147 18.1223 23.031 11.8406C22.2639 6.3878 26.2933 0.943569 31.7252 0.14209C38.3883 -0.837494 43.9658 3.95254 44 10.6829C44 10.9963 44 11.3097 44 11.6231Z"
                                             fill="#FF4035"
                                          />
                                       </svg>
                                    </div>
                                    <p>
                                       There are many variations of passages of
                                       Lorem Ipsum available, but the majority
                                       have suffered alteration in some form, by
                                       injected humour, or randomised words
                                       which don&apos;t look even slightly
                                       believable. If you are going to use a
                                    </p>
                                 </div>
                                 <p className="single-blog-post__blog-details-content--subtitle">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don&apos;t look even slightly believable. If
                                    you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn&apos;t
                                    anything embarrassing hidden in the middle
                                    of text. All the Lorem Ipsum generators on
                                    the Internet{" "}
                                 </p>
                              </div>
                           </div>
                           <div className="row tag-share-wrap mt-4 mb-5">
                              <div className="col-lg-8 col-12">
                                 <div className="tagcloud">
                                    <a href="blog-classic.html">Accessories</a>
                                    <a href="blog-classic.html">Fashion</a>
                                    <a href="blog-classic.html">Blog</a>
                                    <a href="blog-classic.html">Life Style</a>
                                    <a href="blog-classic.html">Tadatheme</a>
                                 </div>
                              </div>
                              <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                 <div className="social-share">
                                    <a href="#">
                                       <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                       <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                       <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#">
                                       <i className="fa-brands fa-youtube"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>

                           <div className="blog-post-details__comments-area">
                              <div className="blog-post-details__comments-area__comments-heading">
                                 <h3 className="blog-post-details__comments-area__comments-heading--title">
                                    02 Comments
                                 </h3>
                              </div>
                              {commentData.map((comment) => (
                                 <CommentItem {...comment} key={comment.id} />
                              ))}
                           </div>
                           <AddComment />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsLeftSidebar;
