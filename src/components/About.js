import React from "react";
import profile from "../assets/portrait.jpg";
export default function About() {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Some Information About Me</h2>
      <div className="about-info">
        <img
          src={profile}
          alt="John Doe Profile Picture"
          className="bio-image"
        />
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quos
            voluptates unde incidunt! Cupiditate harum, ipsam reprehenderit,
            repellendus mollitia laudantium voluptate quo dignissimos, magni
            eveniet cum tempora voluptatum. Laboriosam, ab.
          </p>
        </div>
        <div className="job job-1">
          <h3>123 Webshop</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            asperiores repudiandae perspiciatis eius nemo eaque sed sequi labore
            nostrum.
          </p>
        </div>
        <div className="job job-2">
          <h3>Designers ABC</h3>
          <h6>Frontend Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            asperiores repudiandae perspiciatis eius nemo eaque sed sequi labore
            nostrum.
          </p>
        </div>
        <div className="job job-3">
          <h3>Charity Workshop</h3>
          <h6>Backend Developer</h6>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            asperiores repudiandae perspiciatis eius nemo eaque sed sequi labore
            nostrum.
          </p>
        </div>
      </div>
    </main>
  );
}
