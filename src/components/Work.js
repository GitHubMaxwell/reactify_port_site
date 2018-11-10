import React from "react";
import {
  project1,
  project2,
  project3,
  project4,
  project5
} from "../assets/assets_export.js";

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
            <img src={project1} alt="Project" />
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
            <img src={project2} alt="Project" />
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
            <img src={project3} alt="Project" />
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
            <img src={project4} alt="Project" />
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
            <img src={project5} alt="Project" />
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
