import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:hsuswiowkskow@gmail.com">
          hsuswiowkskow@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/subhranil-mondal-537433318/">
          User Name: Subhranil Mondal
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/extremecoder-rgb">
          Subhranil
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
