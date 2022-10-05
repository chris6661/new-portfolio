import React from "react";
// import Typical from 'react-typical'; 
import Type from 'react-typed'; 

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/chris-hrutkay/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/chris6661">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.instagram.com/chrutkay/">
              <i className="fa fa-instagram"></i>
            </a>
            {/* <a href = '/#'>
                        <i className='fa fa-facebook.square'></i>
                    </a> */}
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="hightlighted-text">Chris</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                    {/* <Typical
                    loop={Infinity}
                    steps = {[
                        "Full Stack Developer", 
                        1000, 
                        "MERN Stack Developer", 
                        1000,  
                        // add more in future, use this is baseline
                    ]}
                    /> */}

                <Type
                // className="typed-text"
                strings={["Full Stack Web Developer", "Let's build something together!"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />

                </h1>
                <span className="profile-role-tagline">
                    Developer able to build both front and back end applications.
                </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
