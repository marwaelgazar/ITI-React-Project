import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">About Us</h2>
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <p className="lead">
            Welcome to our website! We are dedicated to providing high-quality
            services and an exceptional experience for our users. Our goal is to 
            deliver the best content and features that make your experience smooth 
            and enjoyable.
          </p>
          <p>
            Our team is passionate about innovation and continuously improving our 
            platform to serve you better.
          </p>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <img
            src="/assets/images/about.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
