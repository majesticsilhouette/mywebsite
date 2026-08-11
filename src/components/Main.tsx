import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" /> */}
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/majesticsilhouette" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a> */}
          </div>
          <h1>Jason White</h1>
          <p>Senior Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/majesticsilhouette" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;