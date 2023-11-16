// AboutUs.js
import TopBar from "../components/TopBar";
import "../css/main.css";
import "./AboutUs.css";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <TopBar />
      <img src="https://oheconsultants.com/wp-content/uploads/2022/03/about-us-hero.jpg" width="100%" height="50%"></img>
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>Welcome to SkillCheck</h1>

          <p className="mission-statement">
            At SkillCheck, we believe in empowering individuals with the tools
            they need to showcase their skills and thrive in their chosen
            fields. Our mission is to bridge the gap between talent and
            opportunities, providing everyone with a fair chance to prove their
            abilities.
          </p>

          <div className="unique-features">
            <h2>What Sets Us Apart</h2>
            <ul>
              <li>
                <strong>Tailored Assessments:</strong> Our platform provides
                personalized assessments designed to evaluate your skills
                accurately.
              </li>
              <li>
                <strong>Industry-Relevant Tests:</strong> Stay ahead with our
                industry-specific tests aligned with the latest trends.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Seamless navigation
                for a stress-free assessment process.
              </li>
              <li>
                <strong>Real-Time Insights:</strong> Receive instant, detailed
                feedback on your performance.
              </li>
            </ul>
          </div>

          <p className="our-commitment">
            SkillCheck is more than a platform; it's a community committed to
            your success. Join SkillCheck today and take the first step toward a
            brighter, more fulfilling future.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
