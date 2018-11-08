import React, { Component } from "react";
export default class Work extends Component {
  render() {
    return (
      <main id="about">
        <h1 class="lg-heading">
          My <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">Check Out My Projects</h2>
        <div class="projects">
          <div class="project-items">
            <a href="#!">
              <img src="img/projects/project1.jpg" alt="Project" />
            </a>
            <a href="#!" class="btn-light">
              <i class="fas fa-eye" /> Project
            </a>
            <a href="#!" class="btn-dark">
              <i class="fab fa-github" /> GitHub
            </a>
          </div>
          <div class="project-items">
            <a href="#!">
              <img src="img/projects/project2.jpg" alt="Project" />
            </a>
            <a href="#!" class="btn-light">
              <i class="fas fa-eye" /> Project
            </a>
            <a href="#!" class="btn-dark">
              <i class="fab fa-github" /> GitHub
            </a>
          </div>
          <div class="project-items">
            <a href="#!">
              <img src="img/projects/project3.jpg" alt="Project" />
            </a>
            <a href="#!" class="btn-light">
              <i class="fas fa-eye" /> Project
            </a>
            <a href="#!" class="btn-dark">
              <i class="fab fa-github" /> GitHub
            </a>
          </div>
          <div class="project-items">
            <a href="#!">
              <img src="img/projects/project4.jpg" alt="Project" />
            </a>
            <a href="#!" class="btn-light">
              <i class="fas fa-eye" /> Project
            </a>
            <a href="#!" class="btn-dark">
              <i class="fab fa-github" /> GitHub
            </a>
          </div>
          <div class="project-items">
            <a href="#!">
              <img src="img/projects/project5.jpg" alt="Project" />
            </a>
            <a href="#!" class="btn-light">
              <i class="fas fa-eye" /> Project
            </a>
            <a href="#!" class="btn-dark">
              <i class="fab fa-github" /> GitHub
            </a>
          </div>
        </div>
      </main>
    );
  }
}
