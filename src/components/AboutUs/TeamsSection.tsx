import Image from "next/image";
import { teamData, TeamType } from "@/utils/data/about-us";

const TeamsSection = () => {
   return (
      <section className="team-section-1 section-padding fix">
         <div className="container">
            <div className="section-title text-center">
               <h3 className="title style4">The Best Team Available</h3>
            </div>
            <div className="row">
               {teamData.map((member) => (
                  <div className="col-xl-3 col-md-6" key={member.id}>
                     <TeamCard {...member} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

const TeamCard = ({ designation, img, name }: TeamType) => {
   return (
      <div className="team-section-1-card">
         <div className="team-section-1-card__thumb">
            <Image
               width={335}
               height={505}
               className="team-section-1-card__thumb-img"
               src={img}
               alt="thumb"
            />
            <div className="team-section-1-card__thumb-social">
               <a href="#">
                  <i className="fa-brands fa-youtube"></i>
               </a>
               <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
               </a>
               <a href="#">
                  <i className="fa-brands fa-twitter"></i>
               </a>
               <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
               </a>
            </div>
         </div>
         <div className="team-section-1-card__content">
            <h4 className="team-section-1-card__content-name">{name}</h4>
            <p className="team-section-1-card__content-designation">
               {designation}
            </p>
         </div>
      </div>
   );
};

export { TeamsSection };
