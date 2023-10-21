import MovingSlider from "./OwlCarousel";
import "../css/Home.css";
import Footer from "./Footer";

function MainPage() {
  return (
    <div>
      <div className="container">
        <div className="box1">
          <img src="logo_horizontal.png" id="image1" /> <br />
          <h1 id="head">Get Placement Ready!!!</h1>
        </div>

        <img
          src="https://careerbulls.in/wp-content/uploads/2020/01/Our-Placements.png"
          id="imageC"
        />
      </div>
      <MovingSlider />
      <h2 className="head">What do you want to do today?</h2>
      <div className="container1">
        <div className="row">
          <div className="box">
            <img src="cimage1.jpeg" className="box"></img>
          </div>
          <div className="box">
            <img src="cimage2.png" className="box"></img>
          </div>
          <div className="box">
            <img src="cimage3.png" className="box"></img>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <img src="cimage2.png" className="box"></img>
          </div>
          <div className="box">
            <img src="cimage3.png" className="box"></img>
          </div>
          <div className="box">
            <img src="cimage1.jpeg" className="box"></img>
          </div>
        </div>
      </div>
      <h2 className="recruitHead">TOP RECRUITERS</h2>
      <div id="recruiters">
        <img
          src="https://yt3.googleusercontent.com/ytc/APkrFKZUGWJhV9edm7DdVSxnyVbH6rSFBDdzGopYTc-LKQ=s900-c-k-c0x00ffffff-no-rj"
          className="CompImage"
        />
        <img
          src="https://media.licdn.com/dms/image/D4D0BAQGfyppgQzdZ0A/company-logo_200_200/0/1688478118728/cvent_logo?e=2147483647&v=beta&t=SCF61XvH2dUKzc3NpmIy2Q19J-D366VLHf-N1HoNi0U"
          className="CompImage"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1547577387596288003/daCjhjv1_400x400.jpg"
          className="CompImage"
        />
        <img
          src="https://knoldus2019.appspot.com/assets/img/connect/contact-us/noida-office.jpg"
          className="CompImage"
        />
        <img
          src="https://avatars.githubusercontent.com/u/1261931?s=280&v=4"
          className="CompImage"
        />
        {/* <img src="https://pbs.twimg.com/profile_images/1547577387596288003/daCjhjv1_400x400.jpg" className="CompImage"/> */}
      </div>
      <div id="Latest">
        <div id="AlignedImg">
          <div id="FirstIm">
            <img
              id="im1"
              src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/03/technology-trend-freepik-1647963838.jpg"
              alt=""
            />
          </div>
          <div id="SecondIm">
            <img
              id="im1"
              src="https://media.noria.com/sites/Uploads/2019/11/19/3ad0b198-2717-4831-a344-f2e35e943bae_ArticleImages_RP31161_1234x694_08022019_extra_large.jpeg"
              alt=""
            />
          </div>

          <div id="ThirdIm">
            <img
              id="im1"
              src="https://community.nasscom.in/sites/default/files/media/images/New%20Technologies%20in%20Computer%20Science%20What%27s%20Trending.jpg"
              alt=""
            />
          </div>
        </div>
        <div id="AlText">
          <p id="Al1">
            Want to know about the
            <br />
            latest technology trends.
            <br />
            Find the booming technologies?
          </p>
          <button id="Onebtn">Read Here</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
