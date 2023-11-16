// OurTeam.js
import TopBar from "../components/TopBar";
import "../css/main.css";
import "./OurTeam.css";
import Footer from "./Footer";

const OurTeam = () => {
  return (
    <div>
      <TopBar />

      <img
        src="https://149349671.v2.pressablecdn.com/wp-content/uploads/2018/02/banner-meet-team-1.jpg"
        alt="Our Team Banner"
        width="100%"
      />

      <div className="our-team-container">
        <h1 className="about-us">Our Team</h1>

        <div className="team-cards">
          <TeamMemberCard
            name="Dhiraj Prasad"
            imageUrl="https://i.ibb.co/PDms7yD/dhiraj.jpg"
          />
          <TeamMemberCard
            name="Yash Arora"
            imageUrl="https://i.ibb.co/CQrJYjp/yash.jpg"
          />
          <TeamMemberCard
            name="Nitika Devgan"
            imageUrl="https://i.ibb.co/XzRvr1G/nitika.jpg"
          />
          <TeamMemberCard
            name="Muskan Tyagi"
            imageUrl="https://i.ibb.co/8mCG9PS/muskan.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const TeamMemberCard = ({ name, imageUrl }) => {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={name} className="team-member-image" />
      <p className="team-member-name">{name}</p>
    </div>
  );
};

export default OurTeam;

//https://res.cloudinary.com/crowdicity-us-east-1/image/upload/blog-banner-team_hbzopw

