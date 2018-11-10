import React from "react";
import picture from "../assets/assets_export.js";

export default function Work() {
  return (
    <main id="about">
      <h1 className="lg-heading">
        My <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">Check Out My Projects</h2>
      <div className="projects">
        <div className="project-items">
          <a href="#!">
            <img src={picture.project1} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
        <div className="project-items">
          <a href="#!">
            <img src={picture.project2} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
        <div className="project-items">
          <a href="#!">
            <img src={picture.project3} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
        <div className="project-items">
          <a href="#!">
            <img src={picture.project4} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
        <div className="project-items">
          <a href="#!">
            <img src={picture.project5} alt="Project" />
          </a>
          <a href="#!" className="btn-light">
            <i className="fas fa-eye" /> Project
          </a>
          <a href="#!" className="btn-dark">
            <i className="fab fa-github" /> GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
