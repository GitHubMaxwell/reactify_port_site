import React from "react";
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";

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
