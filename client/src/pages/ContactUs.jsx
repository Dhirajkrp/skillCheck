// ContactUs.js
import TopBar from "../components/TopBar";
import "../css/main.css";
import "./ContactUs.css";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      <TopBar />
      <img
        src="https://www.pit.ac.in/assets/images/ContactUs/contact-us-banner.jpg"
        alt="Contact Us Banner"
        width="100%"
      />
      <div className="contact-us-container">
        <h1 className="heading">CONTACT US</h1>

        <div className="contact-info">
          <p>
            Have questions or need assistance? Reach out to us using the contact
            information below.
          </p>
          
          <div className="contact-details">
            <p>Email: placementassess@email.com</p>
            <p>Phone: 9821346521</p>
            <p>Address: 123 Main Street, Cityville, Country</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

//  {/* <img src="https://pcu.edu.in/wp-content/uploads/2023/03/Contact-Us.jpg" width="100%"></img> */}
