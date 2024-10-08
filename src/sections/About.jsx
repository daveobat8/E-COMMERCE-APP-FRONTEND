import React from "react";

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title1">About Us</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="https://www.shutterstock.com/image-photo/amazing-application-portrait-happy-black-600nw-1762639805.jpg"
            alt="profile pic"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <br />
          <div className="text-container">
            <p>
              Welcome to <b>Nunua<img src="logo.png" alt="Cart" className=" logo_icon2" /></b>, your trusted online shop where security, speed,
              and simplicity come first. We take pride in offering a seamless
              shopping experience with secure payment options, lightning-fast
              deliveries, and a user-friendly interface that makes browsing and
              purchasing effortless. Shop with confidence, knowing that your
              satisfaction is our top priority
            </p>
          </div>
          <div className="about-containers">
            <div className="details-container">
              <img src="thumb.png" alt="thumb icon" className="icon" />
              <h3>Fast Deliveries</h3>
              <p>Enjoy up to 2-3 day doorstep deliveries</p>
            </div>
            <div className="details-container">
              <img src="thumb.png" alt="thumb icon" className="icon" />
              <h3>Secure Payment</h3>
              <p>Your payment details are safe with us</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="arrow.png"
        alt="arrow"
        className="icon arrow"
        onClick={() => (window.location.hash = "#experience")}
      />
    </section>
  );
}

export default About;
